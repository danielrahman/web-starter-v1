import fs from 'node:fs/promises'
import path from 'node:path'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createClient } from '@libsql/client'

import config from '@payload-config'
import { getPayload } from 'payload'

import { getCmsEnv, getLocalMediaDir, hasS3StorageConfig } from '@/lib/env'
import { getStoragePrefix } from '@/lib/storage-prefix'
import { readFlagValue } from './_shared/payload-cli-utils.mjs'

const TABLES_TO_SKIP = new Set([
  'payload_locked_documents',
  'payload_locked_documents_rels',
  'payload_preferences',
  'payload_preferences_rels',
  'users_sessions',
])

const targetEnv = getCmsEnv()

if (!targetEnv.DATABASE_URL.startsWith('libsql://')) {
  console.error('Target DATABASE_URL must use "libsql://" when pushing local CMS data to Turso.')
  process.exit(1)
}

if (!hasS3StorageConfig(targetEnv)) {
  console.error('Complete S3 configuration is required before pushing local CMS data to remote storage.')
  process.exit(1)
}

const sourceDatabaseURL = readFlagValue('--source-db') || process.env.SOURCE_DATABASE_URL || 'file:./payload.db'
const sourceDatabaseAuthToken = readFlagValue('--source-db-token') || process.env.SOURCE_TURSO_AUTH_TOKEN
const sourceMediaDir = path.resolve(
  readFlagValue('--source-media-dir') || process.env.SOURCE_MEDIA_DIR || getLocalMediaDir(process.env),
)
const mediaPrefixOverride = readFlagValue('--media-prefix') || process.env.TARGET_MEDIA_PREFIX

if (sourceDatabaseURL === targetEnv.DATABASE_URL) {
  console.error('Source and target databases must be different.')
  process.exit(1)
}

const targetPayload = await getPayload({ config })
await targetPayload.destroy()

const sourceClient = createClient({
  url: sourceDatabaseURL,
  ...(sourceDatabaseURL.startsWith('libsql://') && sourceDatabaseAuthToken ? { authToken: sourceDatabaseAuthToken } : {}),
})

const targetClient = createClient({
  authToken: targetEnv.TURSO_AUTH_TOKEN,
  url: targetEnv.DATABASE_URL,
})

const s3Client = new S3Client({
  credentials: {
    accessKeyId: targetEnv.S3_ACCESS_KEY_ID,
    secretAccessKey: targetEnv.S3_SECRET_ACCESS_KEY,
  },
  endpoint: targetEnv.S3_ENDPOINT,
  region: 'auto',
})

function escapeIdentifier(value) {
  return `"${String(value).replace(/"/g, '""')}"`
}

async function listTables(client) {
  const result = await client.execute(`
    select name
    from sqlite_master
    where type = 'table'
      and name not like 'sqlite_%'
    order by name asc
  `)

  return result.rows.map((row) => String(row.name))
}

async function getTableColumns(client, table) {
  const result = await client.execute(`pragma table_info(${escapeIdentifier(table)})`)
  return result.rows.map((row) => String(row.name))
}

function resolveMediaPrefix(rowPrefix, fallbackPrefix) {
  if (typeof rowPrefix === 'string' && rowPrefix.trim()) {
    return rowPrefix.trim().replace(/^\/+|\/+$/g, '')
  }

  if (typeof mediaPrefixOverride === 'string' && mediaPrefixOverride.trim()) {
    return mediaPrefixOverride.trim().replace(/^\/+|\/+$/g, '')
  }

  return fallbackPrefix
}

function buildS3Key(prefix, filename) {
  return prefix ? `${prefix}/${filename}` : filename
}

async function uploadMediaFiles(rows) {
  if (!rows.length) {
    return { uploaded: 0 }
  }

  await fs.access(sourceMediaDir)

  const fallbackPrefix = getStoragePrefix({
    cwd: process.cwd(),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  })

  let uploaded = 0

  for (const row of rows) {
    const filename = typeof row.filename === 'string' ? row.filename : ''
    if (!filename) {
      continue
    }

    const prefix = resolveMediaPrefix(row.prefix, fallbackPrefix)
    const filePath = path.resolve(sourceMediaDir, filename)
    const body = await fs.readFile(filePath)

    await s3Client.send(
      new PutObjectCommand({
        Body: body,
        Bucket: targetEnv.S3_BUCKET,
        ContentType: typeof row.mime_type === 'string' ? row.mime_type : undefined,
        Key: buildS3Key(prefix, filename),
      }),
    )

    uploaded += 1
  }

  return { fallbackPrefix, uploaded }
}

async function copyTables() {
  const sourceTables = await listTables(sourceClient)
  const targetTables = new Set(await listTables(targetClient))
  const tablesToCopy = sourceTables.filter((table) => targetTables.has(table) && !TABLES_TO_SKIP.has(table))

  const mediaRowsResult = sourceTables.includes('media') ? await sourceClient.execute('select * from media') : { rows: [] }
  const mediaRows = mediaRowsResult.rows.map((row) => ({ ...row }))
  const uploadSummary = await uploadMediaFiles(mediaRows)
  const fallbackPrefix = uploadSummary.fallbackPrefix || ''

  await targetClient.execute('pragma foreign_keys = off')

  try {
    for (const table of [...tablesToCopy].reverse()) {
      await targetClient.execute(`delete from ${escapeIdentifier(table)}`)
    }

    for (const table of tablesToCopy) {
      const targetColumns = await getTableColumns(targetClient, table)
      const sourceColumns = new Set(await getTableColumns(sourceClient, table))
      const rows = table === 'media' ? mediaRows : (await sourceClient.execute(`select * from ${escapeIdentifier(table)}`)).rows

      const insertableColumns = targetColumns.filter((column) => sourceColumns.has(column) || (table === 'media' && column === 'prefix'))

      if (!insertableColumns.length) {
        continue
      }

      const sql = `insert into ${escapeIdentifier(table)} (${insertableColumns
        .map((column) => escapeIdentifier(column))
        .join(', ')}) values (${insertableColumns.map(() => '?').join(', ')})`

      for (const rawRow of rows) {
        const row = { ...rawRow }

        if (table === 'media' && insertableColumns.includes('prefix')) {
          row.prefix = resolveMediaPrefix(row.prefix, fallbackPrefix)
        }

        await targetClient.execute({
          args: insertableColumns.map((column) => row[column] ?? null),
          sql,
        })
      }
    }
  } finally {
    await targetClient.execute('pragma foreign_keys = on')
  }

  return {
    copiedTables: tablesToCopy.length,
    uploadedFiles: uploadSummary.uploaded,
  }
}

try {
  const summary = await copyTables()

  console.log('Remote CMS bootstrap completed.')
  console.log(`- Source DB: ${sourceDatabaseURL}`)
  console.log(`- Source media dir: ${sourceMediaDir}`)
  console.log(`- Target DB: ${targetEnv.DATABASE_URL}`)
  console.log(`- Target bucket: ${targetEnv.S3_BUCKET}`)
  console.log(`- Tables copied: ${summary.copiedTables}`)
  console.log(`- Media files uploaded: ${summary.uploadedFiles}`)
} catch (error) {
  console.error('Remote CMS bootstrap failed:', error)
  process.exit(1)
} finally {
  sourceClient.close()
  targetClient.close()
}
