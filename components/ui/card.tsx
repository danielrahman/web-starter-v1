import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return <article className={cn('surface-card p-6 md:p-7', className)}>{children}</article>
}
