import type { GlobalConfig } from 'payload'

import { BRAND_FONT_OPTIONS, validateHexColor } from '@/lib/brand/theme'

function brandColorField(name: string, label: string) {
  return {
    name,
    label,
    type: 'text' as const,
    admin: {
      components: {
        Field: {
          path: '/payload/admin/fields/color-picker.tsx',
          exportName: 'ColorPickerField',
        },
      },
      description: 'Pick a color or paste a HEX value.',
    },
    validate: validateHexColor,
  }
}

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  admin: {
    description: 'Shared brand identity, site defaults and admin branding used across the website and Payload.',
    group: 'Site',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'tagline',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              type: 'group',
              name: 'brand',
              label: 'Brand Assets',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'logo',
                      label: 'Logo',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'favicon',
                      label: 'Favicon',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'socialImage',
                      label: 'Default Social Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
                {
                  type: 'group',
                  name: 'theme',
                  label: 'Theme',
                  fields: [
                    {
                      type: 'group',
                      name: 'colors',
                      label: 'Colors',
                      fields: [
                        {
                          type: 'row',
                          fields: [
                            brandColorField('primaryColor', 'Primary Color'),
                            brandColorField('primaryColorStrong', 'Primary Color Strong'),
                            brandColorField('surfaceColor', 'Surface Color'),
                          ],
                        },
                        {
                          type: 'row',
                          fields: [
                            brandColorField('surfaceElevatedColor', 'Surface Elevated Color'),
                            brandColorField('textColor', 'Text Color'),
                            brandColorField('textMutedColor', 'Text Muted Color'),
                          ],
                        },
                        {
                          type: 'row',
                          fields: [brandColorField('borderColor', 'Border Color')],
                        },
                      ],
                    },
                    {
                      type: 'group',
                      name: 'fonts',
                      label: 'Fonts',
                      fields: [
                        {
                          type: 'row',
                          fields: [
                            {
                              name: 'heading',
                              label: 'Heading Font',
                              type: 'select',
                              options: BRAND_FONT_OPTIONS,
                            },
                            {
                              name: 'body',
                              label: 'Body Font',
                              type: 'select',
                              options: BRAND_FONT_OPTIONS,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'defaultTitle',
              type: 'text',
              required: true,
            },
            {
              name: 'defaultDescription',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contactEmail',
              type: 'email',
            },
          ],
        },
      ],
    },
  ],
}
