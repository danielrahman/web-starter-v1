import assert from 'node:assert/strict'
import test from 'node:test'

import { getCmsEnv, getLocalMediaDir, hasS3StorageConfig } from '@/lib/env'

const baseEnv: NodeJS.ProcessEnv = {
  DATABASE_URL: 'file:./payload.db',
  NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  NODE_ENV: 'test',
  PAYLOAD_LOCAL_MEDIA_DIR: '',
  PAYLOAD_SECRET: 'integration-secret',
  S3_ACCESS_KEY_ID: '',
  S3_BUCKET: '',
  S3_ENDPOINT: '',
  S3_PUBLIC_BASE_URL: '',
  S3_SECRET_ACCESS_KEY: '',
  TURSO_AUTH_TOKEN: '',
}

test('getCmsEnv accepts local SQLite without S3 storage', () => {
  const env = getCmsEnv(baseEnv)

  assert.equal(hasS3StorageConfig(env), false)
  assert.equal(getLocalMediaDir(baseEnv), 'media')
})

test('getCmsEnv rejects partial S3 configuration', () => {
  assert.throws(
    () =>
      getCmsEnv({
        ...baseEnv,
        S3_ENDPOINT: 'https://example-account.r2.cloudflarestorage.com',
      }),
    /S3 storage requires all of:/,
  )
})

test('getCmsEnv detects complete S3 configuration', () => {
  const env = getCmsEnv({
    ...baseEnv,
    S3_ACCESS_KEY_ID: 'access-key',
    S3_BUCKET: 'bucket',
    S3_ENDPOINT: 'https://example-account.r2.cloudflarestorage.com',
    S3_PUBLIC_BASE_URL: 'https://cdn.example.com',
    S3_SECRET_ACCESS_KEY: 'secret-key',
  })

  assert.equal(hasS3StorageConfig(env), true)
})
