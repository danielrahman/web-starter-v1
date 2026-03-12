import { asObject, readObjectString } from '@/lib/object-utils'
import { optionalTrimmedString } from '@/lib/string-utils'

export type ImageAsset = {
  alt: string
  url: string
}

export type BrandFontPreset = 'sora' | 'manrope' | 'systemSans' | 'systemSerif'

export type BrandColors = {
  primaryColor?: string
  primaryColorStrong?: string
  surfaceColor?: string
  surfaceElevatedColor?: string
  textColor?: string
  textMutedColor?: string
  borderColor?: string
}

export type BrandFonts = {
  body?: BrandFontPreset
  heading?: BrandFontPreset
}

export type BrandTheme = {
  colors?: BrandColors
  fonts?: BrandFonts
}

export type BrandConfig = {
  favicon?: ImageAsset
  logo?: ImageAsset
  socialImage?: ImageAsset
  theme?: BrandTheme
}

export type SiteSettings = {
  brand?: BrandConfig
  contactEmail?: string
  defaultDescription: string
  defaultTitle: string
  description: string
  name: string
  tagline: string
}

const EMPTY_SITE_SETTINGS: SiteSettings = {
  name: 'Payload CMS',
  tagline: 'Content platform',
  description: 'Admin branding fallback.',
  defaultTitle: 'Payload CMS',
  defaultDescription: 'Admin branding fallback.',
}

function normalizeHexColor(input: unknown): string | undefined {
  const value = optionalTrimmedString(input)

  if (!value || !/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)) {
    return undefined
  }

  return value
}

function normalizeImageAsset(input: unknown): ImageAsset | undefined {
  const url = readObjectString(input, 'url')
  const alt = readObjectString(input, 'alt')

  if (!url || !alt) {
    return undefined
  }

  return { alt, url }
}

export function normalizeSiteSettings(input: unknown): SiteSettings {
  const value = asObject(input)
  const brandValue = asObject(value.brand)
  const themeValue = asObject(brandValue.theme)
  const colorsValue = asObject(themeValue.colors)
  const fontsValue = asObject(themeValue.fonts)

  const brand: BrandConfig = {
    favicon: normalizeImageAsset(brandValue.favicon),
    logo: normalizeImageAsset(brandValue.logo),
    socialImage: normalizeImageAsset(brandValue.socialImage),
    theme: {
      colors: {
        primaryColor: normalizeHexColor(colorsValue.primaryColor),
        primaryColorStrong: normalizeHexColor(colorsValue.primaryColorStrong),
        surfaceColor: normalizeHexColor(colorsValue.surfaceColor),
        surfaceElevatedColor: normalizeHexColor(colorsValue.surfaceElevatedColor),
        textColor: normalizeHexColor(colorsValue.textColor),
        textMutedColor: normalizeHexColor(colorsValue.textMutedColor),
        borderColor: normalizeHexColor(colorsValue.borderColor),
      },
      fonts: {
        body: readObjectString(fontsValue, 'body') as BrandFontPreset | undefined,
        heading: readObjectString(fontsValue, 'heading') as BrandFontPreset | undefined,
      },
    },
  }

  const hasBrandData =
    brand.favicon ||
    brand.logo ||
    brand.socialImage ||
    Object.values(brand.theme?.colors || {}).some(Boolean) ||
    Object.values(brand.theme?.fonts || {}).some(Boolean)

  return {
    name: readObjectString(value, 'name') || EMPTY_SITE_SETTINGS.name,
    tagline: readObjectString(value, 'tagline') || EMPTY_SITE_SETTINGS.tagline,
    description: readObjectString(value, 'description') || EMPTY_SITE_SETTINGS.description,
    defaultTitle: readObjectString(value, 'defaultTitle') || EMPTY_SITE_SETTINGS.defaultTitle,
    defaultDescription: readObjectString(value, 'defaultDescription') || EMPTY_SITE_SETTINGS.defaultDescription,
    contactEmail: readObjectString(value, 'contactEmail'),
    brand: hasBrandData ? brand : undefined,
  }
}
