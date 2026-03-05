import type { StatsBlock } from '@/lib/content/models'
import { Card, GridThree, Heading, Section } from '@/components/ui'

type StatsSectionProps = {
  block: StatsBlock
}

export function StatsSection({ block }: StatsSectionProps) {
  return (
    <Section>
      {block.title ? <Heading>{block.title}</Heading> : null}
      <GridThree className="mt-8">
        {block.items.map((item) => (
          <Card key={item.label}>
            <p className="text-3xl font-semibold text-[var(--color-text)]">{item.value}</p>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{item.label}</p>
            {item.description ? <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p> : null}
          </Card>
        ))}
      </GridThree>
    </Section>
  )
}
