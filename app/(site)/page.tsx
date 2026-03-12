import { notFound } from 'next/navigation'

import { SectionRenderer } from '@/components/sections'
import { generatePageMetadata } from '@/lib/content/page-metadata'
import { getContentSource } from '@/lib/content/get-content-source'

export async function generateMetadata() {
  return generatePageMetadata('home')
}

export default async function HomePage() {
  const source = getContentSource()
  const page = await source.getPageBySlug('home')

  if (!page) {
    notFound()
  }

  return <SectionRenderer blocks={page.blocks} />
}
