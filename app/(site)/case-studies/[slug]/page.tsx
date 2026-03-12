import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CardGridSection, CTASection, NarrativeSection, SimplePageHeaderSection, StatsSection } from '@/components/sections'
import type { CTABlock, RichTextBlock, StatsBlock } from '@/lib/content/models'
import { getContentSource } from '@/lib/content/get-content-source'
import { buildMetadata } from '@/lib/seo'
import { getCaseStudyPath } from '@/lib/site-paths'

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const source = getContentSource()
  const [caseStudy, site] = await Promise.all([source.getCaseStudyBySlug(slug), source.getSiteConfig()])

  if (!caseStudy) {
    return {
      title: 'Case Study',
    }
  }

  return buildMetadata({
    title: caseStudy.seo?.title || `${caseStudy.title} | Case Study`,
    description: caseStudy.seo?.description || caseStudy.summary,
    canonicalPath: caseStudy.seo?.canonicalPath || getCaseStudyPath(caseStudy.slug),
    seo: caseStudy.seo,
    site,
  })
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const source = getContentSource()
  const caseStudy = await source.getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const narrativeBlock: RichTextBlock = {
    type: 'richText',
    id: `${caseStudy.slug}-narrative`,
    title: 'Engagement summary',
    body: `Challenge\n${caseStudy.challenge}\n\nSolution\n${caseStudy.solution}\n\nOutcome\n${caseStudy.outcome}`,
  }

  const statsBlock: StatsBlock = {
    type: 'stats',
    id: `${caseStudy.slug}-stats`,
    title: 'Key metrics',
    items: caseStudy.stats,
  }

  const ctaBlock: CTABlock = {
    type: 'cta',
    id: `${caseStudy.slug}-cta`,
    title: 'Want a similar transformation?',
    body: 'Share your current constraints and we will propose a scoped implementation plan.',
    primaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
  }

  return (
    <>
      <SimplePageHeaderSection description={caseStudy.summary} eyebrow="Case study" title={caseStudy.title} />
      <StatsSection block={statsBlock} />
      <NarrativeSection block={narrativeBlock} />
      {caseStudy.testimonial ? (
        <CardGridSection
          items={[
            {
              title: caseStudy.testimonial.author,
              description: `“${caseStudy.testimonial.quote}”\n${[caseStudy.testimonial.role, caseStudy.testimonial.company]
                .filter(Boolean)
                .join(', ')}`,
            },
          ]}
          title="Client perspective"
        />
      ) : null}
      <CTASection block={ctaBlock} />
    </>
  )
}
