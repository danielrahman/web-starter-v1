import type { CTABlock } from '@/lib/content/models'
import { ButtonLink, Heading, Lead, Section } from '@/components/ui'

type CTASectionProps = {
  block: CTABlock
}

export function CTASection({ block }: CTASectionProps) {
  return (
    <Section>
      <div className="surface-card bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary),white_90%),white)] p-8 md:p-12">
        <div className="max-w-3xl space-y-4">
          <Heading>{block.title}</Heading>
          {block.body ? <Lead>{block.body}</Lead> : null}
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
      </div>
    </Section>
  )
}
