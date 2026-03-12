import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/utils'
import { siteUrl } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      lastModified: new Date(),
      url: absoluteUrl('/', siteUrl),
    },
  ]
}
