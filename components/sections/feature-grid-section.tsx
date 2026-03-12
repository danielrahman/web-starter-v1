import type { FeaturesBlock } from '@/lib/content/models'
import { Heading, Lead, Section } from '@/components/ui'
import { TitledCardGrid } from '@/components/sections/titled-card-grid'

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
      <TitledCardGrid items={block.items} />
    </Section>
  )
}
