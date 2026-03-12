import type { LinkItem } from '@/lib/content/models'

import { asBoolean, asObject, asString } from './coerce'

export function normalizeLinkItem(input: unknown): LinkItem | null {
  const value = asObject(input)
  const label = asString(value.label, '')
  const href = asString(value.href, '')

  if (!label || !href) {
    return null
  }

  return {
    label,
    href,
    external: asBoolean(value.external),
  }
}
