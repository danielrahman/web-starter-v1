import type { FeaturesBlock } from '@/lib/content/models'
import { Card, GridThree, Heading, Lead, Section } from '@/components/ui'

type FeatureGridSectionProps = {
  block: FeaturesBlock
}

export function FeatureGridSection({ block }: FeatureGridSectionProps) {
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
          </Card>
        ))}
      </GridThree>
    </Section>
  )
}
