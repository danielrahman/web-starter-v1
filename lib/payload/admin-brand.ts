import 'server-only'

import type { Payload } from 'payload'
import { cache } from 'react'

import type { ImageAsset, SiteConfig } from '@/lib/content/models'
import { normalizeSiteSettingsGlobal } from '@/lib/content/payload/normalizers'

const FALLBACK_SITE_CONFIG: SiteConfig = {
  name: 'Payload CMS',
  tagline: 'Content platform',
  description: 'Admin branding fallback.',
  defaultTitle: 'Payload CMS',
  defaultDescription: 'Admin branding fallback.',
}

export async function getAdminSiteConfig(payload: Payload): Promise<SiteConfig> {
  return getCachedAdminSiteConfig(payload)
}

const getCachedAdminSiteConfig = cache(async (payload: Payload): Promise<SiteConfig> => {
  try {
    const rawGlobal = await payload.findGlobal({
      depth: 1,
      overrideAccess: true,
      slug: 'siteSettings',
    })

    return normalizeSiteSettingsGlobal(rawGlobal).value
  } catch {
    return FALLBACK_SITE_CONFIG
  }
})

export function getAdminBrandIcon(site: SiteConfig): ImageAsset | undefined {
  return site.brand?.favicon || site.brand?.logo
}
