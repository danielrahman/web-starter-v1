import type { CSSProperties } from 'react'

export const ADMIN_BRAND_LOGO_FRAME_STYLE: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
  lineHeight: 0,
  maxWidth: '14.5rem',
  minHeight: '2.75rem',
  overflow: 'visible',
  padding: '0.125rem 0.375rem 0.125rem 0',
}

export const ADMIN_BRAND_LOGO_IMAGE_STYLE: CSSProperties = {
  display: 'block',
  height: '2.25rem',
  maxWidth: '100%',
  objectFit: 'contain',
  objectPosition: 'left center',
  width: 'auto',
}

export const ADMIN_BRAND_ICON_IMAGE_STYLE: CSSProperties = {
  display: 'block',
  height: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  width: '100%',
}

export function getAdminBrandIconFrameStyle(colors: {
  borderColor: string
  surfaceElevatedColor: string
}): CSSProperties {
  return {
    alignItems: 'center',
    background: colors.surfaceElevatedColor,
    borderRadius: '0.5rem',
    boxShadow: `inset 0 0 0 1px ${colors.borderColor}`,
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    height: '2rem',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0.3125rem',
    width: '2rem',
  }
}

export function getAdminBrandFallbackIconStyle(colors: {
  primaryColor: string
  surfaceElevatedColor: string
}): CSSProperties {
  return {
    alignItems: 'center',
    background: colors.primaryColor,
    borderRadius: '0.5rem',
    color: colors.surfaceElevatedColor,
    display: 'inline-flex',
    fontSize: '0.875rem',
    fontWeight: 700,
    height: '1.75rem',
    justifyContent: 'center',
    lineHeight: 1,
    width: '1.75rem',
  }
}

export function getAdminBrandFallbackLogoStyle(primaryColor: string): CSSProperties {
  return {
    color: primaryColor,
    display: 'inline-flex',
    fontSize: '1.125rem',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  }
}
