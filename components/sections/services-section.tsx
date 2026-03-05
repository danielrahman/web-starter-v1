import Link from 'next/link'

import type { ServicesBlock } from '@/lib/content/models'
import { Card, GridThree, Heading, Lead, Section } from '@/components/ui'

type ServicesSectionProps = {
  block: ServicesBlock
}

export function ServicesSection({ block }: ServicesSectionProps) {
  return (
    <Section>
      <div className="space-y-4">
        <Heading>{block.title}</Heading>
        {block.intro ? <Lead>{block.intro}</Lead> : null}
      </div>

      <GridThree className="mt-8">
        {block.items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
            {item.href ? (
              <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]" href={item.href}>
                Learn more
              </Link>
            ) : null}
          </Card>
        ))}
      </GridThree>
    </Section>
  )
}
