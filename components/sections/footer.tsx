import Link from 'next/link'

import type { Footer } from '@/lib/content/models'
import { Container } from '@/components/ui'

type FooterSectionProps = {
  footer: Footer
}

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(2,minmax(0,1fr))]">
          <div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`}>
                    <Link className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">{footer.copyright}</p>
          <div className="flex items-center gap-4">
            {footer.legalLinks.map((link) => (
              <Link className="text-xs text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
