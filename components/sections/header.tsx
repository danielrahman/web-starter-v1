import Link from 'next/link'

import type { Navigation, SiteConfig } from '@/lib/content/models'
import { ButtonLink, Container } from '@/components/ui'

type HeaderSectionProps = {
  navigation: Navigation
  site: SiteConfig
}

export function HeaderSection({ navigation, site }: HeaderSectionProps) {
  const logo = navigation.logoSource === 'custom' ? navigation.logo : site.brand?.logo
  const accessibleLogoLabel = logo?.alt || site.name

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),white_35%)] backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-8">
        <Link className="inline-flex items-center text-base font-semibold tracking-tight text-[var(--color-text)]" href="/">
          {logo ? (
            <>
              <img alt={logo.alt} className="h-8 w-auto max-w-48 object-contain" src={logo.url} />
              <span className="sr-only">{accessibleLogoLabel}</span>
            </>
          ) : (
            site.name
          )}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navigation.items.map((item) => (
            <Link className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {navigation.cta ? (
          <ButtonLink href={navigation.cta.href} variant="primary">
            {navigation.cta.label}
          </ButtonLink>
        ) : null}
      </Container>
    </header>
  )
}
