import type { CollectionConfig } from 'payload'

import { getLocalMediaDir } from '@/lib/env'
import { getStoragePrefix, normalizeStoragePrefix } from '@/lib/storage-prefix'

function generateAltFromFilename(filename?: null | string): string | undefined {
  if (!filename) {
    return undefined
  }

  const basename = filename
    .split('/')
    .pop()
    ?.replace(/\.[a-z0-9]+$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!basename) {
    return undefined
  }

  return basename.charAt(0).toUpperCase() + basename.slice(1)
}

function resolveMediaPrefix({
  currentPrefix,
  filename,
  originalFilename,
  originalPrefix,
}: {
  currentPrefix?: null | string
  filename?: null | string
  originalFilename?: null | string
  originalPrefix?: null | string
}): string | undefined {
  const normalizedCurrentPrefix = normalizeStoragePrefix(currentPrefix)
  if (normalizedCurrentPrefix) {
    return normalizedCurrentPrefix
  }

  const normalizedOriginalPrefix = normalizeStoragePrefix(originalPrefix)
  if (normalizedOriginalPrefix) {
    return normalizedOriginalPrefix
  }

  const isNewUpload = Boolean(filename) && filename !== originalFilename
  if (!isNewUpload) {
    return undefined
  }

  return getStoragePrefix({
    cwd: process.cwd(),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  })
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data, originalDoc }) => {
        if (!data || typeof data !== 'object') {
          return data
        }

        const nextData = data as Record<string, unknown>
        const currentAlt = typeof nextData.alt === 'string' ? nextData.alt.trim() : ''
        const nextFilename = typeof nextData.filename === 'string' ? nextData.filename : undefined
        const originalFilename =
          originalDoc && typeof originalDoc === 'object' && 'filename' in originalDoc && typeof originalDoc.filename === 'string'
            ? originalDoc.filename
            : undefined
        const originalPrefix =
          originalDoc && typeof originalDoc === 'object' && 'prefix' in originalDoc && typeof originalDoc.prefix === 'string'
            ? originalDoc.prefix
            : undefined

        const resolvedPrefix = resolveMediaPrefix({
          currentPrefix: typeof nextData.prefix === 'string' ? nextData.prefix : undefined,
          filename: nextFilename,
          originalFilename,
          originalPrefix,
        })

        if (resolvedPrefix) {
          nextData.prefix = resolvedPrefix
        }

        if (currentAlt) {
          nextData.alt = currentAlt
          return nextData
        }

        const fallbackAlt =
          generateAltFromFilename(nextFilename) || generateAltFromFilename(originalFilename)

        if (fallbackAlt) {
          nextData.alt = fallbackAlt
        }

        return nextData
      },
    ],
  },
  upload: {
    staticDir: getLocalMediaDir(),
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt text',
      type: 'text',
      admin: {
        description: 'Optional. If left blank, Payload generates it from the file name.',
      },
    },
  ],
}

export { generateAltFromFilename, resolveMediaPrefix }
