import type { GlobalConfig } from 'payload'

import { linkField } from '@/payload/fields/link'

export const NavigationGlobal: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    description: 'Header navigation links and the optional brand logo toggle for the frontend.',
    group: 'Site',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'logoSource',
          label: 'Navigation Logo',
          type: 'select',
          defaultValue: 'siteBrand',
          options: [
            {
              label: 'Use site brand logo',
              value: 'siteBrand',
            },
            {
              label: 'Upload custom navigation logo',
              value: 'custom',
            },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'logo',
      label: 'Custom Navigation Logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.logoSource === 'custom',
      },
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
