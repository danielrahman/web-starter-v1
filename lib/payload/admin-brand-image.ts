import sharp from 'sharp'

const DEFAULT_SQUARE_ICON_SIZE = 96
const MAX_SQUARE_ICON_SIZE = 512
const MIN_SQUARE_ICON_SIZE = 16
const SQUARE_ICON_CACHE_TTL_MS = 5 * 60 * 1000

const squareIconCache = new Map<string, { expiresAt: number; value: Promise<Uint8Array | undefined> }>()

export function parseSquareIconSize(value?: null | string): number {
  if (!value) {
    return DEFAULT_SQUARE_ICON_SIZE
  }

  const parsedValue = Number.parseInt(value, 10)

  if (!Number.isFinite(parsedValue)) {
    return DEFAULT_SQUARE_ICON_SIZE
  }

  return Math.min(MAX_SQUARE_ICON_SIZE, Math.max(MIN_SQUARE_ICON_SIZE, parsedValue))
}

export async function createSquareIconBuffer(sourceBuffer: Buffer, size: number): Promise<Buffer> {
  return sharp(sourceBuffer, { density: 300 })
    .resize(size, size, {
      background: { alpha: 0, b: 0, g: 0, r: 0 },
      fit: 'contain',
    })
    .png()
    .toBuffer()
}

export function getAdminBrandFaviconPath(size = DEFAULT_SQUARE_ICON_SIZE): string {
  return `/api/admin-brand/favicon?size=${size}`
}

export async function loadSquareIconFromUrlCached(sourceUrl: string, size: number): Promise<Uint8Array | undefined> {
  const cacheKey = `${sourceUrl}::${size}`
  const now = Date.now()
  const cachedEntry = squareIconCache.get(cacheKey)

  if (cachedEntry && cachedEntry.expiresAt > now) {
    return cachedEntry.value
  }

  if (cachedEntry) {
    squareIconCache.delete(cacheKey)
  }

  const pendingValue = (async () => {
    const sourceResponse = await fetch(sourceUrl, {
      cache: 'force-cache',
      next: { revalidate: SQUARE_ICON_CACHE_TTL_MS / 1000 },
    })

    if (!sourceResponse.ok) {
      return undefined
    }

    const sourceBuffer = Buffer.from(await sourceResponse.arrayBuffer())
    const iconBuffer = await createSquareIconBuffer(sourceBuffer, size)

    return new Uint8Array(iconBuffer)
  })()

  squareIconCache.set(cacheKey, {
    expiresAt: now + SQUARE_ICON_CACHE_TTL_MS,
    value: pendingValue,
  })

  try {
    const iconBuffer = await pendingValue

    if (!iconBuffer) {
      squareIconCache.delete(cacheKey)
    }

    return iconBuffer
  } catch (error) {
    squareIconCache.delete(cacheKey)
    throw error
  }
}
