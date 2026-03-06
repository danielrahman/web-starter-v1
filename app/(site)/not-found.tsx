import Link from 'next/link'

import { Container } from '@/components/ui'

export default function NotFoundPage() {
  return (
    <div className="py-28">
      <Container>
        <h1 className="text-4xl font-semibold text-[var(--color-text)]">Page not found</h1>
        <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
          The page you requested does not exist or is unavailable in the current mode.
        </p>
        <Link className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]" href="/">
          Return to homepage
        </Link>
      </Container>
    </div>
  )
}
