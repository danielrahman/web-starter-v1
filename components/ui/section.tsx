import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Container } from './container'

type SectionProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
