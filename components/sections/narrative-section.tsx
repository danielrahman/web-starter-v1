import type { RichTextBlock } from '@/lib/content/models'
import { Heading, Section } from '@/components/ui'

type NarrativeSectionProps = {
  block: RichTextBlock
}

export function NarrativeSection({ block }: NarrativeSectionProps) {
  return (
    <Section>
      <article className="surface-card max-w-4xl p-8 md:p-10">
        {block.title ? <Heading className="text-2xl md:text-3xl">{block.title}</Heading> : null}
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[var(--color-text-muted)]">{block.body}</p>
      </article>
    </Section>
  )
}
