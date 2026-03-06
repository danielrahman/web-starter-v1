import assert from 'node:assert/strict'
import test from 'node:test'

import { extractPayloadRedirectReference, resolvePayloadRedirect } from '@/lib/payload/redirects'

test('resolvePayloadRedirect handles internal page references', () => {
  assert.deepEqual(
    resolvePayloadRedirect({
      from: '/old-home',
      to: {
        reference: {
          relationTo: 'pages',
          value: {
            slug: 'home',
          },
        },
        type: 'reference',
      },
      type: '301',
    }),
    {
      destination: '/',
      statusCode: 301,
    },
  )
})

test('resolvePayloadRedirect handles internal case study references', () => {
  assert.deepEqual(
    resolvePayloadRedirect({
      to: {
        reference: {
          relationTo: 'caseStudies',
          value: {
            slug: 'ridge-labs-revops',
          },
        },
        type: 'reference',
      },
      type: '308',
    }),
    {
      destination: '/case-studies/ridge-labs-revops',
      statusCode: 308,
    },
  )
})

test('resolvePayloadRedirect handles custom URLs and defaults invalid codes to 301', () => {
  assert.deepEqual(
    resolvePayloadRedirect({
      to: {
        type: 'custom',
        url: 'contact',
      },
      type: 'not-a-code',
    }),
    {
      destination: '/contact',
      statusCode: 301,
    },
  )
})

test('extractPayloadRedirectReference reads unresolved relationship IDs', () => {
  assert.deepEqual(
    extractPayloadRedirectReference({
      to: {
        reference: {
          relationTo: 'pages',
          value: 4,
        },
        type: 'reference',
      },
      type: '302',
    }),
    {
      collection: 'pages',
      id: 4,
      statusCode: 302,
    },
  )
})
