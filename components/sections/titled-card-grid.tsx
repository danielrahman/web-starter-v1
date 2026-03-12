import Link from 'next/link'

import { Card, GridThree } from '@/components/ui'

type TitledCardItem = {
  title: string
  description: string
  href?: string
}

type TitledCardGridProps = {
  items: TitledCardItem[]
  linkLabel?: string
}

export function TitledCardGrid({ items, linkLabel }: TitledCardGridProps) {
  return (
    <GridThree className="mt-8">
      {items.map((item) => (
        <Card key={item.title}>
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
          {item.href && linkLabel ? (
            <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]" href={item.href}>
              {linkLabel}
            </Link>
          ) : null}
        </Card>
      ))}
    </GridThree>
  )
}
