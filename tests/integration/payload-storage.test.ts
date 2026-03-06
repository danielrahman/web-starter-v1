import assert from 'node:assert/strict'
import test from 'node:test'

import { getCmsEnv } from '@/lib/env'
import { buildPublicMediaFileUrl, resolvePayloadStorage } from '@/lib/payload/storage'

const baseEnv: NodeJS.ProcessEnv = {
  DATABASE_URL: 'file:./payload.db',
  NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  NODE_ENV: 'test',
  PAYLOAD_SECRET: 'integration-secret',
  S3_ACCESS_KEY_ID: '',
  S3_BUCKET: '',
  S3_ENDPOINT: '',
  S3_PUBLIC_BASE_URL: '',
  S3_SECRET_ACCESS_KEY: '',
  TURSO_AUTH_TOKEN: '',
}

test('resolvePayloadStorage returns local mode without S3 config', () => {
  const storage = resolvePayloadStorage({
    cmsEnv: getCmsEnv(baseEnv),
    cwd: '/tmp/web-starter-v1',
    siteUrl: 'http://localhost:3000',
  })

  assert.equal(storage.kind, 'local')
  assert.equal(storage.dbURL, 'file:./payload.db')
  assert.equal(storage.prefix, 'web-starter-v1')
})

test('resolvePayloadStorage returns s3 mode with public URL config', () => {
  const storage = resolvePayloadStorage({
    cmsEnv: getCmsEnv({
      ...baseEnv,
      DATABASE_URL: 'libsql://demo.turso.io',
      S3_ACCESS_KEY_ID: 'access-key',
      S3_BUCKET: 'bucket',
      S3_ENDPOINT: 'https://example-account.r2.cloudflarestorage.com',
      S3_PUBLIC_BASE_URL: 'https://cdn.example.com',
      S3_SECRET_ACCESS_KEY: 'secret-key',
      TURSO_AUTH_TOKEN: 'token',
    }),
    cwd: '/tmp/project',
    siteUrl: 'https://www.example.com',
  })

  assert.equal(storage.kind, 's3')
  assert.equal(storage.prefix, 'example-com')
  assert.equal(storage.publicBaseUrl, 'https://cdn.example.com')
})

test('buildPublicMediaFileUrl preserves prefix and image size naming', () => {
  const url = buildPublicMediaFileUrl({
    filename: 'hero.png',
    prefix: 'example-com',
    publicBaseUrl: 'https://cdn.example.com/',
    size: { name: 'card' },
  })

  assert.equal(url, 'https://cdn.example.com/example-com/card_hero.png')
})
