import { notFound } from 'next/navigation'

import { SectionRenderer } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { generatePageMetadata } from '@/lib/content/page-metadata'
import { cmsEnabled } from '@/lib/env'

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
  return generatePageMetadata(slug)
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
