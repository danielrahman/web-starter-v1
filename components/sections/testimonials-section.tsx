import type { TestimonialsBlock } from '@/lib/content/models'
import { Card, GridThree, Heading, Section } from '@/components/ui'

type TestimonialsSectionProps = {
  block: TestimonialsBlock
}

export function TestimonialsSection({ block }: TestimonialsSectionProps) {
  return (
    <Section>
      {block.title ? <Heading>{block.title}</Heading> : null}
      <GridThree className="mt-8">
        {block.items.map((item) => (
          <Card key={`${item.author}-${item.quote.slice(0, 20)}`}>
            <blockquote className="text-sm leading-relaxed text-[var(--color-text)]">“{item.quote}”</blockquote>
            <p className="mt-4 text-sm font-semibold text-[var(--color-text)]">{item.author}</p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {[item.role, item.company].filter(Boolean).join(', ')}
            </p>
          </Card>
        ))}
      </GridThree>
    </Section>
  )
}
