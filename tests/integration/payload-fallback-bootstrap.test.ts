import assert from 'node:assert/strict'
import test from 'node:test'

import type { ContentSource } from '@/lib/content/content-source'
import { PayloadContentSource } from '@/lib/content/payload-content-source'

function createFileFallbackStub(overrides: Partial<ContentSource> = {}): ContentSource {
  const fallback: ContentSource = {
    getSiteConfig: async () => ({
      name: 'File Site',
      tagline: 'File Tagline',
      description: 'File description',
      defaultTitle: 'File Title',
      defaultDescription: 'File default description',
    }),
    getNavigation: async () => ({
      logoText: 'File Site',
      items: [],
    }),
    getFooter: async () => ({
      blurb: 'File footer',
      columns: [],
      legalLinks: [],
      copyright: 'File copyright',
    }),
    getPages: async () => [],
    getPageBySlug: async () => null,
    getCaseStudies: async () => [],
    getCaseStudyBySlug: async () => null,
    getFAQGroup: async () => null,
    createContactSubmission: async (input) => ({
      id: 'file-id',
      name: input.name,
      email: input.email,
      company: input.company,
      message: input.message,
      pageUrl: input.pageUrl,
      createdAt: new Date().toISOString(),
    }),
  }

  return { ...fallback, ...overrides }
}

test('bootstrap fallback does not swallow runtime Payload errors', async () => {
  let fallbackCalls = 0

  const source = new PayloadContentSource({
    fallbackPolicy: {
      allowEmptyStateFallback: true,
      allowErrorFallback: false,
    },
    getPayloadClient: async () => ({
      findGlobal: async () => {
        throw new Error('database unavailable')
      },
      find: async () => ({ docs: [] }),
      create: async () => {
        throw new Error('database unavailable')
      },
    }),
    createFileFallbackSource: async () => {
      fallbackCalls += 1
      return createFileFallbackStub()
    },
  })

  await assert.rejects(() => source.getSiteConfig(), /database unavailable/)
  assert.equal(fallbackCalls, 0, 'Fallback source must not be used when runtime error fallback is disabled.')
})

test('bootstrap fallback still serves file content for empty CMS state', async () => {
  let fallbackCalls = 0

  const source = new PayloadContentSource({
    fallbackPolicy: {
      allowEmptyStateFallback: true,
      allowErrorFallback: false,
    },
    getPayloadClient: async () => ({
      findGlobal: async () => ({}),
      find: async () => ({ docs: [] }),
      create: async () => {
        throw new Error('not used')
      },
    }),
    createFileFallbackSource: async () => {
      fallbackCalls += 1
      return createFileFallbackStub()
    },
  })

  const siteConfig = await source.getSiteConfig()

  assert.equal(siteConfig.name, 'File Site')
  assert.equal(fallbackCalls, 1, 'Fallback source should be used exactly once for empty CMS state.')
})
