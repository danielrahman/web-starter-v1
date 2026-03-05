import 'server-only'

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'

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
import {
  caseStudiesCollectionSchema,
  faqCollectionSchema,
  footerSchema,
  navigationSchema,
  pageSchema,
  siteConfigSchema,
} from './schemas'

const CONTENT_ROOT = path.join(process.cwd(), 'content')

export class FileContentSource implements ContentSource {
  async getSiteConfig(): Promise<SiteConfig> {
    return this.readJSON(['site.json'], siteConfigSchema)
  }

  async getNavigation(): Promise<Navigation> {
    return this.readJSON(['navigation.json'], navigationSchema)
  }

  async getFooter(): Promise<Footer> {
    return this.readJSON(['footer.json'], footerSchema)
  }

  async getPages(): Promise<Page[]> {
    const pagesDir = path.join(CONTENT_ROOT, 'pages')
    const files = await readdir(pagesDir)

    const pages = await Promise.all(
      files
        .filter((name) => name.endsWith('.json'))
        .map((name) => this.readJSON(['pages', name], pageSchema)),
    )

    return pages.sort((a, b) => a.slug.localeCompare(b.slug))
  }

  async getPageBySlug(slug: string): Promise<Page | null> {
    const normalizedSlug = slug.trim() === '' ? 'home' : slug
    const filePath = path.join(CONTENT_ROOT, 'pages', `${normalizedSlug}.json`)

    try {
      const raw = await readFile(filePath, 'utf8')
      return pageSchema.parse(JSON.parse(raw))
    } catch {
      return null
    }
  }

  async getCaseStudies(limit?: number): Promise<CaseStudy[]> {
    const data = await this.readJSON(['collections', 'case-studies.json'], caseStudiesCollectionSchema)
    return typeof limit === 'number' ? data.items.slice(0, limit) : data.items
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const caseStudies = await this.getCaseStudies()
    return caseStudies.find((item) => item.slug === slug) || null
  }

  async getFAQGroup(slug: string): Promise<FAQGroup | null> {
    const faqCollection = await this.readJSON(['collections', 'faq.json'], faqCollectionSchema)
    return faqCollection.groups.find((group) => group.slug === slug) || null
  }

  async createContactSubmission(input: ContactSubmissionInput): Promise<ContactSubmission> {
    return {
      id: `file-${Date.now()}`,
      name: input.name,
      email: input.email,
      company: input.company,
      message: input.message,
      pageUrl: input.pageUrl,
      createdAt: new Date().toISOString(),
    }
  }

  private async readJSON<T>(segments: string[], schema: z.ZodType<T>): Promise<T> {
    const fullPath = path.join(CONTENT_ROOT, ...segments)
    const raw = await readFile(fullPath, 'utf8')
    const parsed = JSON.parse(raw)
    return schema.parse(parsed)
  }
}
