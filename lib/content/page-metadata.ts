import 'server-only'

import type { Metadata } from 'next'

import { buildMetadataFromPage } from '@/lib/seo'

import { getContentSource } from './get-content-source'

export async function generatePageMetadata(slug: string): Promise<Metadata> {
  const source = getContentSource()
  const [page, site] = await Promise.all([source.getPageBySlug(slug), source.getSiteConfig()])

  if (!page) {
    return {
      title: site.defaultTitle,
    }
  }

  return buildMetadataFromPage(page, site)
}
