import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type HeadingProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: HeadingProps) {
  return <p className={cn('text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]', className)}>{children}</p>
}

export function Heading({ children, className }: HeadingProps) {
  return <h2 className={cn('text-3xl leading-tight font-semibold text-[var(--color-text)] md:text-4xl', className)}>{children}</h2>
}

export function Lead({ children, className }: HeadingProps) {
  return <p className={cn('max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg', className)}>{children}</p>
}
