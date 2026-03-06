import { notFound } from 'next/navigation'

import { SectionRenderer } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { buildMetadataFromPage } from '@/lib/seo'

export async function generateMetadata() {
  const source = getContentSource()
  const [page, site] = await Promise.all([source.getPageBySlug('home'), source.getSiteConfig()])

  if (!page) {
    return {
      title: site.defaultTitle,
    }
  }

  return buildMetadataFromPage(page, site)
}

export default async function HomePage() {
  const source = getContentSource()
  const page = await source.getPageBySlug('home')

  if (!page) {
    notFound()
  }

  return <SectionRenderer blocks={page.blocks} />
}
