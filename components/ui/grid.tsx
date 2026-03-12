import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type GridProps = {
  children: ReactNode
  className?: string
}

const gridClassByColumns = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
} as const

function getGridClassName(columns: keyof typeof gridClassByColumns, className?: string) {
  return cn('grid gap-6', gridClassByColumns[columns], className)
}

export function GridTwo({ children, className }: GridProps) {
  return <div className={getGridClassName(2, className)}>{children}</div>
}

export function GridThree({ children, className }: GridProps) {
  return <div className={getGridClassName(3, className)}>{children}</div>
}
