import assert from 'node:assert/strict'
import test from 'node:test'

import { getStoragePrefix, normalizeStoragePrefix } from '@/lib/storage-prefix'
import { resolveMediaPrefix } from '@/payload/collections/media'

test('normalizeStoragePrefix keeps nested folders and slugifies segments', () => {
  assert.equal(normalizeStoragePrefix(' Clients / Necktip Assets '), 'clients/necktip-assets')
  assert.equal(normalizeStoragePrefix('///'), undefined)
})

test('getStoragePrefix prefers hostname over cwd when available', () => {
  assert.equal(
    getStoragePrefix({
      cwd: '/tmp/web-starter-v1',
      siteUrl: 'https://www.example.com',
    }),
    'example-com',
  )
})

test('getStoragePrefix falls back to site hostname and then cwd', () => {
  assert.equal(getStoragePrefix({ cwd: '/tmp/project', siteUrl: 'https://www.necktip.cz' }), 'necktip-cz')
  assert.equal(getStoragePrefix({ cwd: '/tmp/project', siteUrl: 'http://localhost:3000' }), 'project')
})

test('resolveMediaPrefix keeps existing prefixes and sets one only for new uploads', () => {
  assert.equal(
    resolveMediaPrefix({
      currentPrefix: 'clients/necktip',
      filename: 'logo.svg',
      originalFilename: 'logo.svg',
    }),
    'clients/necktip',
  )

  assert.equal(
    resolveMediaPrefix({
      filename: 'new-logo.svg',
      originalFilename: 'old-logo.svg',
      originalPrefix: 'clients/necktip',
    }),
    'clients/necktip',
  )

  assert.equal(
    Boolean(
      resolveMediaPrefix({
        filename: 'brand.svg',
        originalFilename: undefined,
      }),
    ),
    true,
  )

  assert.equal(
    resolveMediaPrefix({
      filename: 'same.svg',
      originalFilename: 'same.svg',
    }),
    undefined,
  )
})
