import { seoPlugin } from '@payloadcms/plugin-seo'
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types'
import type { Field } from 'payload'

import { getPagePath } from '@/lib/site-paths'
import { optionalTrimmedString } from '@/lib/string-utils'

function readString(value: unknown): string | undefined {
  return optionalTrimmedString(value)
}

function buildSeoFields({ defaultFields }: { defaultFields: Field[] }): Field[] {
  return [
    ...defaultFields,
    {
      name: 'canonicalPath',
      label: 'Canonical Path',
      type: 'text',
      admin: {
        description: 'Optional path like /about. Leave empty to use the default document URL.',
      },
    },
    {
      name: 'noIndex',
      label: 'No Index',
      type: 'checkbox',
      defaultValue: false,
    },
  ]
}

const config = {
  collections: ['pages'],
  fields: buildSeoFields,
  generateDescription: ({ doc }) => {
    const value = doc as Record<string, unknown>
    return readString(value.description) || ''
  },
  generateTitle: ({ doc }) => {
    const value = doc as Record<string, unknown>
    return readString(value.title) || ''
  },
  generateURL: ({ doc }) => {
    const value = doc as Record<string, unknown>
    const slug = readString(value.slug)

    return slug ? getPagePath(slug) : ''
  },
  tabbedUI: true,
  uploadsCollection: 'media',
} satisfies SEOPluginConfig

export const payloadSeoPlugin = seoPlugin(config)
