import type { ServerProps } from 'payload'

import { resolveBrandTheme } from '@/lib/brand/theme'
import { getAdminSiteConfig } from '@/lib/payload/admin-brand'
import {
  ADMIN_BRAND_LOGO_FRAME_STYLE,
  ADMIN_BRAND_LOGO_IMAGE_STYLE,
  getAdminBrandFallbackLogoStyle,
} from '@/payload/admin/graphics/styles'

export async function PayloadAdminLogo({ payload }: Pick<ServerProps, 'payload'>) {
  const site = await getAdminSiteConfig(payload)
  const theme = resolveBrandTheme(site)
  const logo = site.brand?.logo

  if (logo) {
    return (
      <span style={ADMIN_BRAND_LOGO_FRAME_STYLE}>
        <img
          alt={logo.alt || site.name}
          src={logo.url}
          style={ADMIN_BRAND_LOGO_IMAGE_STYLE}
        />
      </span>
    )
  }

  return (
    <span style={getAdminBrandFallbackLogoStyle(theme.colors.primaryColor)}>
      {site.name}
    </span>
  )
}

export default PayloadAdminLogo
