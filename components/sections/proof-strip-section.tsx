import type { ProofStripBlock } from '@/lib/content/models'
import { Section } from '@/components/ui'

type ProofStripSectionProps = {
  block: ProofStripBlock
}

export function ProofStripSection({ block }: ProofStripSectionProps) {
  return (
    <Section className="py-10">
      {block.title ? <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[var(--color-text-muted)] uppercase">{block.title}</p> : null}
      <div className="flex flex-wrap items-center gap-3">
        {block.items.map((item) => (
          <span className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text-muted)]" key={item}>
            {item}
          </span>
        ))}
      </div>
    </Section>
  )
}
