import type { BrandFontPreset, SiteConfig } from '@/lib/content/models'

export const BRAND_FONT_OPTIONS: Array<{ label: string; value: BrandFontPreset }> = [
  { label: 'Sora', value: 'sora' },
  { label: 'Manrope', value: 'manrope' },
  { label: 'System Sans', value: 'systemSans' },
  { label: 'System Serif', value: 'systemSerif' },
]

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
  heading: 'sora' as BrandFontPreset,
  body: 'manrope' as BrandFontPreset,
}

const FONT_STACKS: Record<BrandFontPreset, string> = {
  sora: 'var(--font-heading), ui-sans-serif, system-ui, sans-serif',
  manrope: 'var(--font-body), ui-sans-serif, system-ui, sans-serif',
  systemSans:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  systemSerif: 'ui-serif, Georgia, Cambria, "Times New Roman", serif',
}

export function resolveBrandTheme(site?: SiteConfig) {
  const theme = site?.brand?.theme

  const colors = {
    primaryColor: theme?.colors?.primaryColor || DEFAULT_COLORS.primaryColor,
    primaryColorStrong: theme?.colors?.primaryColorStrong || DEFAULT_COLORS.primaryColorStrong,
    surfaceColor: theme?.colors?.surfaceColor || DEFAULT_COLORS.surfaceColor,
    surfaceElevatedColor: theme?.colors?.surfaceElevatedColor || DEFAULT_COLORS.surfaceElevatedColor,
    textColor: theme?.colors?.textColor || DEFAULT_COLORS.textColor,
    textMutedColor: theme?.colors?.textMutedColor || DEFAULT_COLORS.textMutedColor,
    borderColor: theme?.colors?.borderColor || DEFAULT_COLORS.borderColor,
  }

  const fonts = {
    heading: theme?.fonts?.heading || DEFAULT_FONTS.heading,
    body: theme?.fonts?.body || DEFAULT_FONTS.body,
  }

  return {
    colors,
    fonts,
  }
}

export function getSiteThemeVariables(site?: SiteConfig): Record<string, string> {
  const theme = resolveBrandTheme(site)

  return {
    '--color-primary': theme.colors.primaryColor,
    '--color-primary-strong': theme.colors.primaryColorStrong,
    '--color-surface': theme.colors.surfaceColor,
    '--color-surface-elevated': theme.colors.surfaceElevatedColor,
    '--color-text': theme.colors.textColor,
    '--color-text-muted': theme.colors.textMutedColor,
    '--color-border': theme.colors.borderColor,
    '--site-font-heading': FONT_STACKS[theme.fonts.heading],
    '--site-font-body': FONT_STACKS[theme.fonts.body],
  }
}

export function validateHexColor(value: null | string | undefined): string | true {
  if (!value) {
    return true
  }

  return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)
    ? true
    : 'Use a HEX color like #0f766e.'
}
