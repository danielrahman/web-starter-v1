import type { ServerProps } from 'payload'

import { resolveBrandTheme } from '@/lib/brand/theme'
import { getAdminBrandIcon, getAdminSiteConfig } from '@/lib/payload/admin-brand'
import { getAdminBrandFaviconPath } from '@/lib/payload/admin-brand-image'
import {
  ADMIN_BRAND_ICON_IMAGE_STYLE,
  getAdminBrandFallbackIconStyle,
  getAdminBrandIconFrameStyle,
} from '@/payload/admin/graphics/styles'

export async function PayloadAdminIcon({ payload }: Pick<ServerProps, 'payload'>) {
  const site = await getAdminSiteConfig(payload)
  const icon = getAdminBrandIcon(site)
  const theme = resolveBrandTheme(site)

  if (icon) {
    return (
      <span
        aria-label={icon.alt || site.name}
        style={getAdminBrandIconFrameStyle(theme.colors)}
      >
        <img
          alt={icon.alt || site.name}
          src={getAdminBrandFaviconPath()}
          style={ADMIN_BRAND_ICON_IMAGE_STYLE}
        />
      </span>
    )
  }

  return (
      <span
        aria-label={site.name}
        style={getAdminBrandFallbackIconStyle(theme.colors)}
      >
        {site.name.slice(0, 1).toUpperCase()}
      </span>
  )
}

export default PayloadAdminIcon
