import type { MetadataRoute } from 'next'

import { getSiteUrl } from '@/lib/env'
import { absoluteUrl } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  return [
    {
      lastModified: new Date(),
      url: absoluteUrl('/', siteUrl),
    },
  ]
}
