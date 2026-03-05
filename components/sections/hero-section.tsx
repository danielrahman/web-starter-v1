import type { HeroBlock } from '@/lib/content/models'
import { Badge, ButtonLink, Lead, Section } from '@/components/ui'

type HeroSectionProps = {
  block: HeroBlock
}

export function HeroSection({ block }: HeroSectionProps) {
  return (
    <Section className="bg-brand-gradient pb-20 pt-20 md:pb-28 md:pt-24">
      <div className="max-w-3xl space-y-6">
        {block.eyebrow ? <Badge>{block.eyebrow}</Badge> : null}
        <h1 className="text-4xl leading-tight font-semibold tracking-tight text-[var(--color-text)] md:text-6xl">{block.headline}</h1>
        <Lead>{block.body}</Lead>

        <div className="flex flex-wrap gap-3 pt-2">
          {block.primaryCta ? (
            <ButtonLink href={block.primaryCta.href} variant="primary">
              {block.primaryCta.label}
            </ButtonLink>
          ) : null}
          {block.secondaryCta ? (
            <ButtonLink href={block.secondaryCta.href} variant="secondary">
              {block.secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
