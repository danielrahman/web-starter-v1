import type { ContentSource } from './content-source'
import type {
  CaseStudy,
  ContactSubmission,
  ContactSubmissionInput,
  FAQGroup,
  Footer,
  Navigation,
  Page,
  SiteConfig,
} from './models'
import { asArray, asObject, asString, optionalString } from './payload/coerce'
import type { PayloadFallbackPolicy } from './payload/fallback-policy'
import { resolvePayloadFallbackPolicy } from './payload/fallback-policy'
import {
  normalizeCaseStudyDocument,
  normalizeFAQGroupDocument,
  normalizeFooterGlobal,
  normalizeNavigationGlobal,
  normalizePageDocument,
  normalizeSiteSettingsGlobal,
} from './payload/normalizers'
import { cmsFileFallbackMode } from '@/lib/env'

type PayloadClient = {
  findGlobal: (args: { depth: number; slug: string }) => Promise<unknown>
  find: (args: Record<string, unknown>) => Promise<{ docs?: unknown[] }>
  create: (args: { collection: string; data: Record<string, unknown> }) => Promise<unknown>
}

type PayloadContentSourceDependencies = {
  createFileFallbackSource?: () => Promise<ContentSource>
  fallbackPolicy?: PayloadFallbackPolicy
  getPayloadClient?: () => Promise<PayloadClient>
}

async function createDefaultFileFallbackSource(): Promise<ContentSource> {
  const fileContentModule = await import('./file-content-source')
  return new fileContentModule.FileContentSource()
}

async function getDefaultPayloadClient(): Promise<PayloadClient> {
  const payloadModule = await import('@/lib/payload/get-payload')
  return (await payloadModule.getPayloadClient()) as unknown as PayloadClient
}

export class PayloadContentSource implements ContentSource {
  private readonly createFileFallbackSource: () => Promise<ContentSource>
  private readonly fallbackPolicy: PayloadFallbackPolicy
  private readonly getPayloadClient: () => Promise<PayloadClient>

  private fileFallbackSource: ContentSource | null = null

  constructor(dependencies: PayloadContentSourceDependencies = {}) {
    this.createFileFallbackSource = dependencies.createFileFallbackSource || createDefaultFileFallbackSource
    this.fallbackPolicy = dependencies.fallbackPolicy || resolvePayloadFallbackPolicy(cmsFileFallbackMode)
    this.getPayloadClient = dependencies.getPayloadClient || getDefaultPayloadClient
  }

  async getSiteConfig(): Promise<SiteConfig> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const normalized = normalizeSiteSettingsGlobal(await payload.findGlobal({ depth: 1, slug: 'siteSettings' }))

        return {
          value: normalized.value,
          isEmpty: normalized.isEmpty,
        }
      },
      fallback: (source) => source.getSiteConfig(),
    })
  }

  async getNavigation(): Promise<Navigation> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const normalized = normalizeNavigationGlobal(await payload.findGlobal({ depth: 1, slug: 'navigation' }))

        return {
          value: normalized.value,
          isEmpty: normalized.isEmpty,
        }
      },
      fallback: (source) => source.getNavigation(),
    })
  }

  async getFooter(): Promise<Footer> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const normalized = normalizeFooterGlobal(await payload.findGlobal({ depth: 1, slug: 'footer' }))

        return {
          value: normalized.value,
          isEmpty: normalized.isEmpty,
        }
      },
      fallback: (source) => source.getFooter(),
    })
  }

  async getPages(): Promise<Page[]> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const result = await payload.find({
          collection: 'pages',
          depth: 2,
          limit: 100,
          sort: 'title',
        })

        const pages = asArray(result.docs).map(normalizePageDocument)

        return {
          value: pages,
          isEmpty: pages.length === 0,
        }
      },
      fallback: (source) => source.getPages(),
    })
  }

  async getPageBySlug(slug: string): Promise<Page | null> {
    return this.withContentFallback({
      load: async () => {
        const normalizedSlug = slug.trim() === '' ? 'home' : slug
        const payload = await this.getPayloadClient()
        const result = await payload.find({
          collection: 'pages',
          depth: 2,
          draft: true,
          limit: 1,
          where: {
            slug: {
              equals: normalizedSlug,
            },
          },
        })

        const page = asArray(result.docs)[0]
        if (!page) {
          return { isEmpty: true, value: null }
        }

        return {
          value: normalizePageDocument(page),
          isEmpty: false,
        }
      },
      fallback: (source) => source.getPageBySlug(slug),
    })
  }

  async getCaseStudies(limit?: number): Promise<CaseStudy[]> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const result = await payload.find({
          collection: 'caseStudies',
          depth: 2,
          limit: limit ?? 24,
          sort: '-updatedAt',
        })

        const studies = asArray(result.docs).map(normalizeCaseStudyDocument)

        return {
          value: studies,
          isEmpty: studies.length === 0,
        }
      },
      fallback: (source) => source.getCaseStudies(limit),
    })
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const result = await payload.find({
          collection: 'caseStudies',
          depth: 2,
          draft: true,
          limit: 1,
          where: {
            slug: {
              equals: slug,
            },
          },
        })

        const caseStudy = asArray(result.docs)[0]
        if (!caseStudy) {
          return { isEmpty: true, value: null }
        }

        return {
          value: normalizeCaseStudyDocument(caseStudy),
          isEmpty: false,
        }
      },
      fallback: (source) => source.getCaseStudyBySlug(slug),
    })
  }

  async getFAQGroup(slug: string): Promise<FAQGroup | null> {
    return this.withContentFallback({
      load: async () => {
        const payload = await this.getPayloadClient()
        const result = await payload.find({
          collection: 'faqs',
          depth: 1,
          limit: 1,
          where: {
            slug: {
              equals: slug,
            },
          },
        })

        const faqGroup = asArray(result.docs)[0]
        if (!faqGroup) {
          return { isEmpty: true, value: null }
        }

        return {
          value: normalizeFAQGroupDocument(faqGroup, slug),
          isEmpty: false,
        }
      },
      fallback: (source) => source.getFAQGroup(slug),
    })
  }

  async createContactSubmission(input: ContactSubmissionInput): Promise<ContactSubmission> {
    return this.withErrorFallback(
      async () => {
        const payload = await this.getPayloadClient()

        const created = (await payload.create({
          collection: 'submissions',
          data: {
            name: input.name,
            email: input.email,
            company: input.company,
            message: input.message,
            pageUrl: input.pageUrl,
            submittedAt: new Date().toISOString(),
          },
        })) as unknown

        const value = asObject(created)

        return {
          id: asString(value.id, `payload-${Date.now()}`),
          name: asString(value.name, input.name),
          email: asString(value.email, input.email),
          company: optionalString(value.company),
          message: asString(value.message, input.message),
          pageUrl: optionalString(value.pageUrl),
          createdAt: asString(value.createdAt, new Date().toISOString()),
        }
      },
      (source) => source.createContactSubmission(input),
    )
  }

  private async getFileFallbackSource(): Promise<ContentSource> {
    if (!this.fileFallbackSource) {
      this.fileFallbackSource = await this.createFileFallbackSource()
    }

    return this.fileFallbackSource
  }

  private async readFromFileFallback<T>(reader: (source: ContentSource) => Promise<T>): Promise<T> {
    const source = await this.getFileFallbackSource()
    return reader(source)
  }

  private async withContentFallback<T>(params: {
    fallback: (source: ContentSource) => Promise<T>
    load: () => Promise<{ isEmpty: boolean; value: T }>
  }): Promise<T> {
    try {
      const { value, isEmpty } = await params.load()

      if (isEmpty && this.fallbackPolicy.allowEmptyStateFallback) {
        return this.readFromFileFallback(params.fallback)
      }

      return value
    } catch (error) {
      if (this.fallbackPolicy.allowErrorFallback) {
        return this.readFromFileFallback(params.fallback)
      }

      throw error
    }
  }

  private async withErrorFallback<T>(
    operation: () => Promise<T>,
    fallback: (source: ContentSource) => Promise<T>,
  ): Promise<T> {
    try {
      return await operation()
    } catch (error) {
      if (this.fallbackPolicy.allowErrorFallback) {
        return this.readFromFileFallback(fallback)
      }

      throw error
    }
  }
}
