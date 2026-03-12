import type { MetadataRoute } from 'next'

import { getContentSource } from '@/lib/content/get-content-source'
import { getCaseStudyPath, getPagePath } from '@/lib/site-paths'
import { absoluteUrl } from '@/lib/utils'
import { siteUrl } from '@/lib/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const source = getContentSource()
  const [pages, caseStudies] = await Promise.all([source.getPages(), source.getCaseStudies()])

  const pageEntries = pages.map((page) => ({
    lastModified: new Date(),
    url: absoluteUrl(getPagePath(page.slug), siteUrl),
  }))

  const caseStudyEntries = caseStudies.map((caseStudy) => ({
    lastModified: new Date(),
    url: absoluteUrl(getCaseStudyPath(caseStudy.slug), siteUrl),
  }))

  return [...pageEntries, ...caseStudyEntries]
}
