import Link from 'next/link'

import type { CaseStudiesTeaserBlock, CaseStudy } from '@/lib/content/models'
import { Card, GridThree, Heading, Lead, Section } from '@/components/ui'

type CaseStudiesTeaserSectionProps = {
  block: CaseStudiesTeaserBlock
  caseStudies: CaseStudy[]
}

export function CaseStudiesTeaserSection({ block, caseStudies }: CaseStudiesTeaserSectionProps) {
  if (!caseStudies.length) {
    return null
  }

  return (
    <Section>
      <div className="space-y-4">
        <Heading>{block.title}</Heading>
        {block.intro ? <Lead>{block.intro}</Lead> : null}
      </div>

      <GridThree className="mt-8">
        {caseStudies.map((study) => (
          <Card key={study.slug}>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{study.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{study.summary}</p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]" href={`/case-studies/${study.slug}`}>
              Read case study
            </Link>
          </Card>
        ))}
      </GridThree>

      {block.cta ? (
        <div className="mt-8">
          <Link className="inline-flex text-sm font-semibold text-[var(--color-primary)]" href={block.cta.href}>
            {block.cta.label}
          </Link>
        </div>
      ) : null}
    </Section>
  )
}
