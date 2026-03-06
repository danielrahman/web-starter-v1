import { notFound } from 'next/navigation'

import { SectionRenderer } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { cmsEnabled } from '@/lib/env'
import { buildMetadataFromPage } from '@/lib/seo'

type SlugPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  if (cmsEnabled) {
    return []
  }

  const source = getContentSource()
  const pages = await source.getPages()

  return pages.filter((page) => page.slug !== 'home').map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params
  const source = getContentSource()
  const [page, site] = await Promise.all([source.getPageBySlug(slug), source.getSiteConfig()])

  if (!page) {
    return {
      title: site.defaultTitle,
    }
  }

  return buildMetadataFromPage(page, site)
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params

  if (slug === 'case-studies') {
    notFound()
  }

  const source = getContentSource()
  const page = await source.getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return <SectionRenderer blocks={page.blocks} />
}
