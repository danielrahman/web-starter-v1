import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { getCmsEnv, cmsEnabled } from '@/lib/env'
import { CaseStudies, FAQs, Media, Pages, Submissions, Users } from '@/payload/collections'
import { FooterGlobal, NavigationGlobal, SiteSettings } from '@/payload/globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const cmsEnv = cmsEnabled ? getCmsEnv() : null
const dbURL = cmsEnv?.DATABASE_URL || 'file:./payload-local.db'

const plugins =
  cmsEnabled && cmsEnv
    ? [
        s3Storage({
          bucket: cmsEnv.S3_BUCKET,
          collections: {
            media: {
              generateFileURL: ({ filename, prefix, size }) => {
                const base = cmsEnv.S3_PUBLIC_BASE_URL.replace(/\/+$/, '')
                const prefixPath = prefix ? `${prefix.replace(/^\/+|\/+$/g, '')}/` : ''
                const sizePrefix = size?.name ? `${size.name}_` : ''
                return `${base}/${prefixPath}${sizePrefix}${filename}`
              },
            },
          },
          config: {
            credentials: {
              accessKeyId: cmsEnv.S3_ACCESS_KEY_ID,
              secretAccessKey: cmsEnv.S3_SECRET_ACCESS_KEY,
            },
            endpoint: cmsEnv.S3_ENDPOINT,
            region: 'auto',
          },
        }),
      ]
    : []

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, CaseStudies, FAQs, Submissions],
  globals: [SiteSettings, NavigationGlobal, FooterGlobal],
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      authToken: cmsEnv?.TURSO_AUTH_TOKEN,
      url: dbURL,
    },
    transactionOptions: {},
  }),
  plugins,
  secret: process.env.PAYLOAD_SECRET || 'dev-payload-secret',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
