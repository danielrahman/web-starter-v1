import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    external?: boolean
  }

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)] border border-[var(--color-primary)]',
  secondary:
    'bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
  ghost: 'bg-transparent text-[var(--color-text)] hover:bg-neutral-100 border border-transparent',
}

const baseStyles =
  'inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]'

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({ className, variant = 'primary', children, href, external, ...props }: ButtonLinkProps) {
  if (external) {
    return (
      <a className={cn(baseStyles, variantStyles[variant], className)} href={href} rel="noreferrer" target="_blank" {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link className={cn(baseStyles, variantStyles[variant], className)} href={href} {...props}>
      {children}
    </Link>
  )
}
