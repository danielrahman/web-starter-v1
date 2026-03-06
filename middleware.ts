import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { extractPayloadRedirectReference, resolvePayloadRedirect } from '@/lib/payload/redirects'
import { getCollectionDocumentPath } from '@/lib/site-paths'

const cmsEnabled = process.env.CMS_ENABLED === 'true'

async function resolveReferenceDestination(request: NextRequest, input: unknown): Promise<null | { destination: string; statusCode: 301 | 302 | 303 | 307 | 308 }> {
  const reference = extractPayloadRedirectReference(input)

  if (!reference) {
    return null
  }

  const lookupUrl = new URL(`/api/${reference.collection}/${reference.id}`, request.url)
  lookupUrl.searchParams.set('depth', '0')

  const response = await fetch(lookupUrl, {
    headers: {
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    return null
  }

  const document = (await response.json()) as { slug?: string }
  const destination = typeof document.slug === 'string' ? getCollectionDocumentPath(reference.collection, document.slug) : undefined

  if (!destination) {
    return null
  }

  return {
    destination,
    statusCode: reference.statusCode,
  }
}

export async function middleware(request: NextRequest) {
  if (!cmsEnabled || !['GET', 'HEAD'].includes(request.method)) {
    return NextResponse.next()
  }

  const lookupUrl = new URL('/api/redirects', request.url)
  lookupUrl.searchParams.set('depth', '1')
  lookupUrl.searchParams.set('limit', '1')
  lookupUrl.searchParams.set('where[from][equals]', request.nextUrl.pathname)

  try {
    const response = await fetch(lookupUrl, {
      headers: {
        accept: 'application/json',
      },
    })

    if (!response.ok) {
      return NextResponse.next()
    }

    const data = (await response.json()) as { docs?: unknown[] }
    const doc = Array.isArray(data.docs) ? data.docs[0] : undefined
    const redirect = resolvePayloadRedirect(doc) || (await resolveReferenceDestination(request, doc))

    if (!redirect) {
      return NextResponse.next()
    }

    const destination = new URL(redirect.destination, request.url)
    const current = request.nextUrl

    if (
      destination.origin === current.origin &&
      destination.pathname === current.pathname &&
      destination.search === current.search
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(destination, redirect.statusCode)
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
}
