import nextEnv from '@next/env'
import { createClient } from '@libsql/client'

const { loadEnvConfig } = nextEnv

loadEnvConfig(process.cwd())

const required = [
  'CMS_ENABLED',
  'NEXT_PUBLIC_SITE_URL',
  'PAYLOAD_SECRET',
  'DATABASE_URL',
]

const missing = required.filter((name) => !process.env[name])
if (missing.length) {
  console.error(`Missing required CMS env vars: ${missing.join(', ')}`)
  process.exit(1)
}

if (process.env.CMS_ENABLED !== 'true') {
  console.error('CMS_ENABLED must be true when running verify-cms.')
  process.exit(1)
}

const databaseURL = process.env.DATABASE_URL
const usesLibsql = databaseURL.startsWith('libsql://')
const usesFileSqlite = databaseURL.startsWith('file:')
const localMediaDir = process.env.PAYLOAD_LOCAL_MEDIA_DIR || 'media'

const s3EnvKeys = [
  'S3_ENDPOINT',
  'S3_BUCKET',
  'S3_ACCESS_KEY_ID',
  'S3_SECRET_ACCESS_KEY',
  'S3_PUBLIC_BASE_URL',
]
const populatedS3Keys = s3EnvKeys.filter((name) => process.env[name])
const usesS3Storage = populatedS3Keys.length === s3EnvKeys.length

if (!usesLibsql && !usesFileSqlite) {
  console.error('DATABASE_URL must start with libsql:// (Turso) or file: (local sqlite).')
  process.exit(1)
}

if (usesLibsql && !process.env.TURSO_AUTH_TOKEN) {
  console.error('TURSO_AUTH_TOKEN is required when DATABASE_URL uses libsql://.')
  process.exit(1)
}

if (populatedS3Keys.length > 0 && !usesS3Storage) {
  console.error(`S3 storage requires all of: ${s3EnvKeys.join(', ')}`)
  process.exit(1)
}

if (usesS3Storage) {
  const r2Endpoint = process.env.S3_ENDPOINT
  if (!/^https:\/\/.+/.test(r2Endpoint)) {
    console.error('S3_ENDPOINT must be an https URL.')
    process.exit(1)
  }
  if (!r2Endpoint.includes('.r2.cloudflarestorage.com')) {
    console.error('S3_ENDPOINT should point to a Cloudflare R2 S3-compatible endpoint.')
    process.exit(1)
  }

  const publicBase = process.env.S3_PUBLIC_BASE_URL
  if (!/^https?:\/\/.+/.test(publicBase)) {
    console.error('S3_PUBLIC_BASE_URL must be a valid http/https URL.')
    process.exit(1)
  }
}

const client = createClient({
  url: databaseURL,
  ...(usesLibsql ? { authToken: process.env.TURSO_AUTH_TOKEN } : {}),
})

try {
  const result = await client.execute('select 1 as ok')
  if (result.rows?.[0]?.ok !== 1n && result.rows?.[0]?.ok !== 1) {
    throw new Error('Unexpected DB response from SELECT 1')
  }

  console.log('CMS verification passed')
  console.log(`- Database URL: ${databaseURL}`)
  console.log(`- Media Storage: ${usesS3Storage ? 'S3/R2' : `Local filesystem (${localMediaDir})`}`)
  if (usesS3Storage) {
    console.log(`- R2 Endpoint: ${process.env.S3_ENDPOINT}`)
    console.log(`- Public Media Base URL: ${process.env.S3_PUBLIC_BASE_URL}`)
  }
} catch (error) {
  console.error('CMS verification failed:', error)
  process.exit(1)
} finally {
  client.close()
}
