import { getCollectionDocumentPath } from '@/lib/site-paths'

type ResolvedRedirect = {
  destination: string
  statusCode: 301 | 302 | 303 | 307 | 308
}

type RedirectReference = {
  collection: string
  id: number | string
  statusCode: ResolvedRedirect['statusCode']
}

function asObject(input: unknown): Record<string, unknown> {
  return input && typeof input === 'object' ? (input as Record<string, unknown>) : {}
}

function asString(input: unknown): string | undefined {
  return typeof input === 'string' && input.trim() ? input.trim() : undefined
}

function asRedirectStatus(input: unknown): ResolvedRedirect['statusCode'] {
  const parsed = Number(input)

  switch (parsed) {
    case 301:
    case 302:
    case 303:
    case 307:
    case 308:
      return parsed
    default:
      return 301
  }
}

function normalizeCustomDestination(input: unknown): string | undefined {
  const value = asString(input)
  if (!value) {
    return undefined
  }

  if (/^https?:\/\//i.test(value) || value.startsWith('/')) {
    return value
  }

  return `/${value}`
}

function resolveReferenceDestination(input: unknown): string | undefined {
  const reference = asObject(input)
  const relationTo = asString(reference.relationTo)
  const relationValue = asObject(reference.value)
  const slug = asString(relationValue.slug)

  if (!relationTo || !slug) {
    return undefined
  }

  return getCollectionDocumentPath(relationTo, slug)
}

export function extractPayloadRedirectReference(input: unknown): RedirectReference | null {
  const value = asObject(input)
  const to = asObject(value.to)
  const targetType = asString(to.type)

  if (targetType !== 'reference') {
    return null
  }

  const reference = asObject(to.reference)
  const relationTo = asString(reference.relationTo)
  const relationValue = reference.value

  if (!relationTo || (typeof relationValue !== 'number' && typeof relationValue !== 'string')) {
    return null
  }

  return {
    collection: relationTo,
    id: relationValue,
    statusCode: asRedirectStatus(value.type),
  }
}

export function resolvePayloadRedirect(input: unknown): ResolvedRedirect | null {
  const value = asObject(input)
  const to = asObject(value.to)
  const targetType = asString(to.type)

  const destination =
    targetType === 'reference'
      ? resolveReferenceDestination(to.reference)
      : targetType === 'custom'
        ? normalizeCustomDestination(to.url)
        : undefined

  if (!destination) {
    return null
  }

  return {
    destination,
    statusCode: asRedirectStatus(value.type),
  }
}
