import Link from 'next/link'

import { Heading, Section } from '@/components/ui'

type ListingItem = {
  title: string
  description: string
  href: string
}

type ListingTeaserSectionProps = {
  title: string
  items: ListingItem[]
}

export function ListingTeaserSection({ title, items }: ListingTeaserSectionProps) {
  return (
    <Section>
      <Heading>{title}</Heading>
      <div className="mt-6 divide-y divide-[var(--color-border)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white">
        {items.map((item) => (
          <article className="p-6" key={item.href}>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]" href={item.href}>
              Read case study
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
