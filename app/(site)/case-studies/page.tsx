import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ListingTeaserSection, SimplePageHeaderSection } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { generatePageMetadata } from '@/lib/content/page-metadata'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('case-studies')
}

export default async function CaseStudiesPage() {
  const source = getContentSource()
  const [page, caseStudies] = await Promise.all([source.getPageBySlug('case-studies'), source.getCaseStudies()])

  if (!page) {
    notFound()
  }

  return (
    <>
      <SimplePageHeaderSection description={page.description} eyebrow="Case studies" title={page.title} />
      <ListingTeaserSection
        items={caseStudies.map((study) => ({
          description: study.summary,
          href: `/case-studies/${study.slug}`,
          title: study.title,
        }))}
        title="Project outcomes"
      />
    </>
  )
}
