import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { getCmsEnv, cmsEnabled } from '@/lib/env'
import { resolvePayloadStorage } from '@/lib/payload/storage'
import { Media, Pages, Submissions, Users } from '@/payload/collections'
import { payloadSeoPlugin } from '@/payload/plugins/seo'
import { SiteSettings } from '@/payload/globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const cmsEnv = cmsEnabled ? getCmsEnv() : null
const payloadStorage = cmsEnv
  ? resolvePayloadStorage({
      cmsEnv,
      cwd: process.cwd(),
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    })
  : null
const dbURL = payloadStorage?.dbURL || 'file:./payload-local.db'

const plugins = payloadStorage
  ? [
      payloadStorage.plugin,
      payloadSeoPlugin,
      redirectsPlugin({
        collections: ['pages'],
        redirectTypes: ['301', '302', '307', '308'],
      }),
    ]
  : []

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Icon: {
          path: '/payload/admin/graphics/icon.tsx',
          exportName: 'PayloadAdminIcon',
        },
        Logo: {
          path: '/payload/admin/graphics/logo.tsx',
          exportName: 'PayloadAdminLogo',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      icons: {
        icon: '/api/admin-brand/favicon',
      },
    },
  },
  collections: [Users, Media, Pages, Submissions],
  globals: [SiteSettings],
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
