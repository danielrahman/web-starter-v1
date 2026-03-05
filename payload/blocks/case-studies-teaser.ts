import type { Block } from 'payload'

import { linkField } from '@/payload/fields/link'

export const CaseStudiesTeaserBlock: Block = {
  slug: 'caseStudiesTeaser',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 24,
    },
    linkField('cta', 'Section CTA'),
  ],
}
