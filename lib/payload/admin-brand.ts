import 'server-only'

import type { Payload } from 'payload'
import { cache } from 'react'

import type { ImageAsset, SiteSettings } from '@/lib/site-settings'
import { normalizeSiteSettings } from '@/lib/site-settings'

export async function getAdminSiteConfig(payload: Payload): Promise<SiteSettings> {
  return getCachedAdminSiteConfig(payload)
}

const getCachedAdminSiteConfig = cache(async (payload: Payload): Promise<SiteSettings> => {
  try {
    const rawGlobal = await payload.findGlobal({
      depth: 1,
      overrideAccess: true,
      slug: 'siteSettings',
    })

    return normalizeSiteSettings(rawGlobal)
  } catch {
    return normalizeSiteSettings({})
  }
})

export function getAdminBrandIcon(site: SiteSettings): ImageAsset | undefined {
  return site.brand?.favicon || site.brand?.logo
}
