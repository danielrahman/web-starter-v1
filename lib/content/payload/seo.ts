import type { SeoMeta } from '@/lib/content/models'

import { asBoolean, asObject, optionalString } from './coerce'

function extractImageUrl(input: unknown): string | undefined {
  const value = asObject(input)

  if (typeof value.url === 'string') {
    return optionalString(value.url)
  }

  const relationValue = asObject(value.value)
  if (typeof relationValue.url === 'string') {
    return optionalString(relationValue.url)
  }

  return undefined
}

export function normalizePayloadSeo(input: unknown): SeoMeta | undefined {
  const value = asObject(input)
  const meta = asObject(value.meta)
  const legacySeo = asObject(value.seo)
  const hasMetaNoIndex = typeof meta.noIndex === 'boolean'

  const normalized = {
    title: optionalString(meta.title) || optionalString(legacySeo.title),
    description: optionalString(meta.description) || optionalString(legacySeo.description),
    canonicalPath: optionalString(meta.canonicalPath) || optionalString(legacySeo.canonicalPath),
    noIndex: hasMetaNoIndex ? asBoolean(meta.noIndex) : asBoolean(legacySeo.noIndex),
    ogImage: extractImageUrl(meta.image) || optionalString(legacySeo.ogImage),
  } satisfies SeoMeta

  const compact = Object.fromEntries(
    Object.entries(normalized).filter(([, value]) => value !== undefined && value !== ''),
  ) as SeoMeta

  return Object.keys(compact).length > 0 ? compact : undefined
}

export function mapSeoToPayloadMeta(seo?: SeoMeta): Record<string, unknown> | undefined {
  if (!seo) {
    return undefined
  }

  const meta = {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
    ...(seo.canonicalPath ? { canonicalPath: seo.canonicalPath } : {}),
    ...(seo.noIndex ? { noIndex: true } : {}),
  }

  return Object.keys(meta).length > 0 ? meta : undefined
}
