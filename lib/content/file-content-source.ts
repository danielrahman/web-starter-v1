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
    return this.readJSON('site.json', siteConfigSchema)
  }

  async getNavigation(): Promise<Navigation> {
    return this.readJSON('navigation.json', navigationSchema)
  }

  async getFooter(): Promise<Footer> {
    return this.readJSON('footer.json', footerSchema)
  }

  async getPages(): Promise<Page[]> {
    const pagesDir = path.join(CONTENT_ROOT, 'pages')
    const files = await this.collectJSONFiles(pagesDir)
    const pages = await Promise.all(files.map((filePath) => this.readJSON(filePath, pageSchema)))

    return pages.sort((a, b) => a.slug.localeCompare(b.slug))
  }

  async getPageBySlug(slug: string): Promise<Page | null> {
    const normalizedSlug = normalizePageSlug(slug) || 'home'
    const candidatePaths = [
      path.join('pages', `${normalizedSlug}.json`),
      path.join('pages', normalizedSlug, 'index.json'),
    ]

    for (const candidatePath of candidatePaths) {
      try {
        return await this.readJSON(candidatePath, pageSchema)
      } catch (error) {
        if (isNotFoundError(error)) {
          continue
        }

        throw error
      }
    }

    return null
  }

  async getCaseStudies(limit?: number): Promise<CaseStudy[]> {
    const data = await this.readJSON(path.join('collections', 'case-studies.json'), caseStudiesCollectionSchema)
    return typeof limit === 'number' ? data.items.slice(0, limit) : data.items
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const caseStudies = await this.getCaseStudies()
    return caseStudies.find((item) => item.slug === slug) || null
  }

  async getFAQGroup(slug: string): Promise<FAQGroup | null> {
    const faqCollection = await this.readJSON(path.join('collections', 'faq.json'), faqCollectionSchema)
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

  private async readJSON<T>(relativePath: string, schema: z.ZodType<T>): Promise<T> {
    const fullPath = path.join(CONTENT_ROOT, relativePath)
    const raw = await readFile(fullPath, 'utf8')
    const parsed = JSON.parse(raw)
    return schema.parse(parsed)
  }

  private async collectJSONFiles(directoryPath: string): Promise<string[]> {
    const entries = await readdir(directoryPath, { withFileTypes: true })
    const relativePaths: string[] = []

    for (const entry of entries) {
      const absolutePath = path.join(directoryPath, entry.name)

      if (entry.isDirectory()) {
        relativePaths.push(...(await this.collectJSONFiles(absolutePath)))
        continue
      }

      if (!entry.isFile() || !entry.name.endsWith('.json')) {
        continue
      }

      relativePaths.push(path.relative(CONTENT_ROOT, absolutePath))
    }

    return relativePaths
  }
}

function normalizePageSlug(slug: string): string {
  const normalized = slug.trim().replace(/^\/+|\/+$/g, '')
  return normalized || 'home'
}

function isNotFoundError(error: unknown): boolean {
  return Boolean(error && typeof error === 'object' && 'code' in error && (error as { code?: string }).code === 'ENOENT')
}
