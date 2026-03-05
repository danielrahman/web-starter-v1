import type { GlobalConfig } from 'payload'

import { linkField } from '@/payload/fields/link'

export const NavigationGlobal: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'logoText',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'external',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    linkField('cta', 'Header CTA'),
  ],
}
