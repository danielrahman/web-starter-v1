import type { Block } from 'payload'

import { linkField } from '@/payload/fields/link'

export const CTABlock: Block = {
  slug: 'cta',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
    },
    linkField('primaryCta', 'Primary CTA'),
    linkField('secondaryCta', 'Secondary CTA'),
  ],
}
