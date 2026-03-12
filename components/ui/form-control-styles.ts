import { cn } from '@/lib/utils'

const formControlBaseClassName =
  'w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm text-[var(--color-text)] outline-none ring-[var(--color-primary)] transition focus-visible:ring-2'

export function getFormControlClassName(className?: string, sizeClassName?: string) {
  return cn(formControlBaseClassName, sizeClassName, className)
}
