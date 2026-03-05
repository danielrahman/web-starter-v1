import Link from 'next/link'

import { Card, GridThree, Heading, Lead, Section } from '@/components/ui'

type CardGridItem = {
  title: string
  description: string
  href?: string
}

type CardGridSectionProps = {
  title: string
  intro?: string
  items: CardGridItem[]
}

export function CardGridSection({ title, intro, items }: CardGridSectionProps) {
  return (
    <Section>
      <div className="space-y-4">
        <Heading>{title}</Heading>
        {intro ? <Lead>{intro}</Lead> : null}
      </div>

      <GridThree className="mt-8">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
            {item.href ? (
              <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]" href={item.href}>
                View details
              </Link>
            ) : null}
          </Card>
        ))}
      </GridThree>
    </Section>
  )
}
