import type { Block } from 'payload'

import { linkField } from '@/payload/fields/link'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    linkField('primaryCta', 'Primary CTA'),
    linkField('secondaryCta', 'Secondary CTA'),
  ],
}
