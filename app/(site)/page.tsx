import { SectionRenderer } from '@/components/sections'
import { generatePageMetadata } from '@/lib/content/page-metadata'
import { getRequiredPageBySlug } from '@/lib/content/required-page'

export async function generateMetadata() {
  return generatePageMetadata('home')
}

export default async function HomePage() {
  const page = await getRequiredPageBySlug('home')

  return <SectionRenderer blocks={page.blocks} />
}
