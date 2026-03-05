import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
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
      name: 'defaultTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'defaultDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
  ],
}
