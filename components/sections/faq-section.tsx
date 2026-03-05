import type { FAQItem } from '@/lib/content/models'
import { Heading, Section } from '@/components/ui'

type FAQSectionProps = {
  title?: string
  items: FAQItem[]
}

export function FAQSection({ title = 'Frequently asked questions', items }: FAQSectionProps) {
  if (!items.length) {
    return null
  }

  return (
    <Section>
      <Heading>{title}</Heading>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details className="surface-card px-6 py-5" key={item.question}>
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-[var(--color-text)]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
