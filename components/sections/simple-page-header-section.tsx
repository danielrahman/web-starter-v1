import { Badge, Lead, Section } from '@/components/ui'

type SimplePageHeaderSectionProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SimplePageHeaderSection({ eyebrow, title, description }: SimplePageHeaderSectionProps) {
  return (
    <Section className="py-14 md:py-18">
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">{title}</h1>
        {description ? <Lead>{description}</Lead> : null}
      </div>
    </Section>
  )
}
