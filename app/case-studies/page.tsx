import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ListingTeaserSection, SimplePageHeaderSection } from '@/components/sections'
import { getContentSource } from '@/lib/content/get-content-source'
import { buildMetadataFromPage } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const source = getContentSource()
  const [page, site] = await Promise.all([source.getPageBySlug('case-studies'), source.getSiteConfig()])

  if (!page) {
    return {
      title: site.defaultTitle,
    }
  }

  return buildMetadataFromPage(page, site)
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
