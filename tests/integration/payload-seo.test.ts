import assert from 'node:assert/strict'
import test from 'node:test'

import { mapSeoToPayloadMeta, normalizePayloadSeo } from '@/lib/content/payload/seo'

test('normalizePayloadSeo reads official plugin meta fields', () => {
  const seo = normalizePayloadSeo({
    meta: {
      canonicalPath: '/services',
      description: 'Services description',
      image: {
        alt: 'Services social image',
        url: 'https://cdn.example.com/services.png',
      },
      noIndex: true,
      title: 'Services | Northstar',
    },
  })

  assert.deepEqual(seo, {
    canonicalPath: '/services',
    description: 'Services description',
    noIndex: true,
    ogImage: 'https://cdn.example.com/services.png',
    title: 'Services | Northstar',
  })
})

test('normalizePayloadSeo falls back to legacy seo fields', () => {
  const seo = normalizePayloadSeo({
    seo: {
      canonicalPath: '/legacy',
      description: 'Legacy description',
      ogImage: '/legacy.png',
      title: 'Legacy title',
    },
  })

  assert.deepEqual(seo, {
    canonicalPath: '/legacy',
    description: 'Legacy description',
    ogImage: '/legacy.png',
    title: 'Legacy title',
  })
})

test('normalizePayloadSeo respects explicit plugin noIndex=false over legacy data', () => {
  const seo = normalizePayloadSeo({
    meta: {
      noIndex: false,
    },
    seo: {
      noIndex: true,
      title: 'Legacy title',
    },
  })

  assert.deepEqual(seo, {
    noIndex: false,
    title: 'Legacy title',
  })
})

test('mapSeoToPayloadMeta keeps the fields supported by the SEO plugin config', () => {
  assert.deepEqual(
    mapSeoToPayloadMeta({
      canonicalPath: '/contact',
      description: 'Contact description',
      noIndex: true,
      ogImage: '/ignored.png',
      title: 'Contact',
    }),
    {
      canonicalPath: '/contact',
      description: 'Contact description',
      noIndex: true,
      title: 'Contact',
    },
  )
})
