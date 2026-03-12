import type { BrandFontPreset, SiteSettings } from '@/lib/site-settings'

const DEFAULT_COLORS = {
  primaryColor: '#0f766e',
  primaryColorStrong: '#0b5f58',
  surfaceColor: '#f7f8f6',
  surfaceElevatedColor: '#ffffff',
  textColor: '#0f172a',
  textMutedColor: '#475569',
  borderColor: '#dbe3ea',
}

const DEFAULT_FONTS = {
  heading: 'systemSans',
  body: 'systemSans',
} satisfies Record<'body' | 'heading', BrandFontPreset>

const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

export const BRAND_FONT_OPTIONS: Array<{ label: string; value: BrandFontPreset }> = [
  { label: 'Sora', value: 'sora' },
  { label: 'Manrope', value: 'manrope' },
  { label: 'System Sans', value: 'systemSans' },
  { label: 'System Serif', value: 'systemSerif' },
]

export function validateHexColor(value: null | string | undefined): string | true {
  if (!value) {
    return true
  }

  return HEX_COLOR_PATTERN.test(value.trim()) ? true : 'Enter a valid hex color like #0f766e.'
}

export function resolveBrandTheme(site?: SiteSettings) {
  return {
    colors: {
      ...DEFAULT_COLORS,
      ...site?.brand?.theme?.colors,
    },
    fonts: {
      ...DEFAULT_FONTS,
      ...site?.brand?.theme?.fonts,
    },
  }
}
