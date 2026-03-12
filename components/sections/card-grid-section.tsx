import { Heading, Lead, Section } from '@/components/ui'
import { TitledCardGrid } from '@/components/sections/titled-card-grid'

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
      <TitledCardGrid items={items} linkLabel="View details" />
    </Section>
  )
}
