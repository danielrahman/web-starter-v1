import type { Metadata } from 'next'

import { ListingTeaserSection, SimplePageHeaderSection } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { generatePageMetadata } from '@/lib/content/page-metadata'
import { getRequiredPageBySlug } from '@/lib/content/required-page'
import { getCaseStudyPath } from '@/lib/site-paths'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('case-studies')
}

export default async function CaseStudiesPage() {
  const source = getContentSource()
  const [page, caseStudies] = await Promise.all([getRequiredPageBySlug('case-studies'), source.getCaseStudies()])

  return (
    <>
      <SimplePageHeaderSection description={page.description} eyebrow="Case studies" title={page.title} />
      <ListingTeaserSection
        items={caseStudies.map((study) => ({
          description: study.summary,
          href: getCaseStudyPath(study.slug),
          title: study.title,
        }))}
        title="Project outcomes"
      />
    </>
  )
}
