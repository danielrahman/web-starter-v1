import { seoPlugin } from '@payloadcms/plugin-seo'
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types'
import type { Field } from 'payload'

import { getCaseStudyPath, getPagePath } from '@/lib/site-paths'
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
        description: 'Optional path like /services. Leave empty to use the default document URL.',
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
  collections: ['pages', 'caseStudies'],
  fields: buildSeoFields,
  generateDescription: ({ doc }) => {
    const value = doc as Record<string, unknown>
    return readString(value.description) || readString(value.summary) || ''
  },
  generateTitle: ({ doc }) => {
    const value = doc as Record<string, unknown>
    return readString(value.title) || ''
  },
  generateURL: ({ collectionConfig, doc }) => {
    const value = doc as Record<string, unknown>
    const slug = readString(value.slug)

    if (!slug) {
      return ''
    }

    switch (collectionConfig?.slug) {
      case 'pages':
        return getPagePath(slug)
      case 'caseStudies':
        return getCaseStudyPath(slug)
      default:
        return ''
    }
  },
  tabbedUI: true,
  uploadsCollection: 'media',
} satisfies SEOPluginConfig

export const payloadSeoPlugin = seoPlugin(config)
