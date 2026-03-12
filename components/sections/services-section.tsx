import type { ServicesBlock } from '@/lib/content/models'
import { Heading, Lead, Section } from '@/components/ui'
import { TitledCardGrid } from '@/components/sections/titled-card-grid'

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
      <TitledCardGrid items={block.items} linkLabel="Learn more" />
    </Section>
  )
}
