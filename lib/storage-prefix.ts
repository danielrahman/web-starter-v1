import path from 'node:path'

type StoragePrefixInput = {
  cwd?: string
  siteUrl?: null | string
}

function sanitizeStoragePrefixSegment(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/^www\./, '')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function normalizeStoragePrefix(value?: null | string): string | undefined {
  if (typeof value !== 'string') {
    return undefined
  }

  const normalized = value
    .split(/[\\/]+/)
    .map((segment) => sanitizeStoragePrefixSegment(segment))
    .filter(Boolean)
    .join('/')

  return normalized || undefined
}

function getPrefixFromSiteUrl(siteUrl?: null | string): string | undefined {
  if (!siteUrl) {
    return undefined
  }

  try {
    const url = new URL(siteUrl)
    const hostname = url.hostname.toLowerCase()

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return undefined
    }

    return sanitizeStoragePrefixSegment(hostname)
  } catch {
    return normalizeStoragePrefix(siteUrl)
  }
}

export function getStoragePrefix(input: StoragePrefixInput = {}): string {
  const siteUrlPrefix = getPrefixFromSiteUrl(input.siteUrl)
  if (siteUrlPrefix) {
    return siteUrlPrefix
  }

  const cwdName = input.cwd ? path.basename(input.cwd) : path.basename(process.cwd())
  return sanitizeStoragePrefixSegment(cwdName) || 'media'
}
