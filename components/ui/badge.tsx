import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[color-mix(in_oklab,var(--color-primary),white_65%)] bg-[color-mix(in_oklab,var(--color-primary),white_88%)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
