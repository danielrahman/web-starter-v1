import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type GridProps = {
  children: ReactNode
  className?: string
}

export function GridTwo({ children, className }: GridProps) {
  return <div className={cn('grid gap-6 md:grid-cols-2', className)}>{children}</div>
}

export function GridThree({ children, className }: GridProps) {
  return <div className={cn('grid gap-6 md:grid-cols-3', className)}>{children}</div>
}
