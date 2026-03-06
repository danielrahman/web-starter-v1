import type {
  BrandColors,
  BrandConfig,
  BrandFontPreset,
  BrandTheme,
  CaseStudy,
  FAQGroup,
  Footer,
  ImageAsset,
  Navigation,
  NavigationLogoSource,
  Page,
  SiteConfig,
} from '@/lib/content/models'
import { pageSchema } from '@/lib/content/schemas'

import { normalizeBlock } from './block-mapper'
import { asArray, asBoolean, asObject, asString, optionalString } from './coerce'
import { normalizePayloadSeo } from './seo'

const EMPTY_SITE_CONFIG: SiteConfig = {
  name: 'Marketing Site',
  tagline: 'Reusable marketing starter',
  description: 'Fallback configuration while CMS content is empty.',
  defaultTitle: 'Marketing Site',
  defaultDescription: 'Reusable marketing starter.',
}

const EMPTY_NAVIGATION: Navigation = {
  logoSource: 'siteBrand',
  items: [],
}

const BRAND_FONT_PRESETS: BrandFontPreset[] = ['sora', 'manrope', 'systemSans', 'systemSerif']
const NAVIGATION_LOGO_SOURCES: NavigationLogoSource[] = ['siteBrand', 'custom']

const EMPTY_FOOTER: Footer = {
  blurb: '',
  columns: [],
  legalLinks: [],
  copyright: '',
}

export function normalizeSiteSettingsGlobal(rawGlobal: unknown): { value: SiteConfig; isEmpty: boolean } {
  const global = asObject(rawGlobal)
  const brand = normalizeBrandConfig(global.brand)

  return {
    value: {
      name: asString(global.name, EMPTY_SITE_CONFIG.name),
      tagline: asString(global.tagline, EMPTY_SITE_CONFIG.tagline),
      description: asString(global.description, EMPTY_SITE_CONFIG.description),
      defaultTitle: asString(global.defaultTitle, EMPTY_SITE_CONFIG.defaultTitle),
      defaultDescription: asString(global.defaultDescription, EMPTY_SITE_CONFIG.defaultDescription),
      contactEmail: optionalString(global.contactEmail),
      brand,
    },
    isEmpty:
      !asString(global.name, '').trim() &&
      !asString(global.tagline, '').trim() &&
      !asString(global.defaultTitle, '').trim() &&
      !brand,
  }
}

export function normalizeNavigationGlobal(rawGlobal: unknown): { value: Navigation; isEmpty: boolean } {
  const global = asObject(rawGlobal)
  const items = asArray(global.items).map(normalizeLinkItem).filter(Boolean) as Navigation['items']
  const cta = normalizeLinkItem(global.cta)
  const logo = normalizeImageAsset(global.logo)
  const logoSource = normalizeNavigationLogoSource(global.logoSource)

  return {
    value: {
      logoSource: logoSource || EMPTY_NAVIGATION.logoSource,
      logo,
      items,
      cta: cta || undefined,
    },
    isEmpty: !logoSource && !logo && items.length === 0 && !cta,
  }
}

export function normalizeFooterGlobal(rawGlobal: unknown): { value: Footer; isEmpty: boolean } {
  const global = asObject(rawGlobal)

  const columns = asArray(global.columns).map((column) => {
    const value = asObject(column)

    return {
      title: asString(value.title, 'Column'),
      links: asArray(value.links).map(normalizeLinkItem).filter(Boolean) as Footer['columns'][number]['links'],
    }
  })

  return {
    value: {
      blurb: asString(global.blurb, EMPTY_FOOTER.blurb),
      columns,
      legalLinks: asArray(global.legalLinks)
        .map(normalizeLinkItem)
        .filter(Boolean) as Footer['legalLinks'],
      copyright: asString(global.copyright, EMPTY_FOOTER.copyright),
    },
    isEmpty:
      !asString(global.blurb, '').trim() &&
      columns.length === 0 &&
      asArray(global.legalLinks).length === 0 &&
      !asString(global.copyright, '').trim(),
  }
}

export function normalizePageDocument(input: unknown): Page {
  const value = asObject(input)

  const normalized: Page = {
    slug: asString(value.slug, 'untitled-page'),
    title: asString(value.title, 'Untitled Page'),
    description: optionalString(value.description),
    seo: normalizePayloadSeo(value),
    blocks: asArray(value.blocks)
      .map(normalizeBlock)
      .filter(Boolean) as Page['blocks'],
  }

  return pageSchema.parse(normalized)
}

export function normalizeCaseStudyDocument(input: unknown): CaseStudy {
  const value = asObject(input)

  return {
    slug: asString(value.slug, 'case-study'),
    title: asString(value.title, 'Case Study'),
    summary: asString(value.summary, ''),
    challenge: asString(value.challenge, ''),
    solution: asString(value.solution, ''),
    outcome: asString(value.outcome, ''),
    stats: asArray(value.stats).map((item) => {
      const stat = asObject(item)
      return {
        label: asString(stat.label, 'Metric'),
        value: asString(stat.value, 'N/A'),
        description: optionalString(stat.description),
      }
    }),
    testimonial: asObject(value.testimonial).quote
      ? {
          quote: asString(asObject(value.testimonial).quote, ''),
          author: asString(asObject(value.testimonial).author, ''),
          role: optionalString(asObject(value.testimonial).role),
          company: optionalString(asObject(value.testimonial).company),
        }
      : undefined,
    seo: normalizePayloadSeo(value),
  }
}

export function normalizeFAQGroupDocument(input: unknown, fallbackSlug: string): FAQGroup {
  const value = asObject(input)

  return {
    slug: asString(value.slug, fallbackSlug),
    title: asString(value.title, 'FAQ'),
    intro: optionalString(value.intro),
    items: asArray(value.items).map((item) => {
      const faq = asObject(item)
      return {
        question: asString(faq.question, ''),
        answer: asString(faq.answer, ''),
      }
    }),
  }
}

function normalizeLinkItem(input: unknown) {
  const value = asObject(input)
  const label = asString(value.label, '')
  const href = asString(value.href, '')

  if (!label || !href) {
    return null
  }

  return {
    label,
    href,
    external: asBoolean(value.external),
  }
}

function normalizeBrandConfig(input: unknown): BrandConfig | undefined {
  const value = asObject(input)
  const logo = normalizeImageAsset(value.logo)
  const favicon = normalizeImageAsset(value.favicon)
  const socialImage = normalizeImageAsset(value.socialImage)
  const theme = normalizeBrandTheme(value.theme)

  if (!logo && !favicon && !socialImage && !theme) {
    return undefined
  }

  return {
    logo,
    favicon,
    socialImage,
    theme,
  }
}

function normalizeBrandTheme(input: unknown): BrandTheme | undefined {
  const value = asObject(input)
  const colors = normalizeBrandColors(value.colors)
  const fonts = normalizeBrandFonts(value.fonts)

  if (!colors && !fonts) {
    return undefined
  }

  return {
    colors,
    fonts,
  }
}

function normalizeBrandColors(input: unknown): BrandColors | undefined {
  const value = asObject(input)

  const colors: BrandColors = {
    primaryColor: normalizeHexColor(value.primaryColor),
    primaryColorStrong: normalizeHexColor(value.primaryColorStrong),
    surfaceColor: normalizeHexColor(value.surfaceColor),
    surfaceElevatedColor: normalizeHexColor(value.surfaceElevatedColor),
    textColor: normalizeHexColor(value.textColor),
    textMutedColor: normalizeHexColor(value.textMutedColor),
    borderColor: normalizeHexColor(value.borderColor),
  }

  return Object.values(colors).some(Boolean) ? colors : undefined
}

function normalizeBrandFonts(input: unknown): BrandTheme['fonts'] | undefined {
  const value = asObject(input)
  const heading = normalizeBrandFontPreset(value.heading)
  const body = normalizeBrandFontPreset(value.body)

  if (!heading && !body) {
    return undefined
  }

  return {
    heading,
    body,
  }
}

function normalizeImageAsset(input: unknown): ImageAsset | undefined {
  const value = asObject(input)
  const url = optionalString(value.url)
  const alt = optionalString(value.alt)

  if (!url || !alt) {
    return undefined
  }

  return {
    url,
    alt,
  }
}

function normalizeHexColor(input: unknown): string | undefined {
  const value = optionalString(input)

  if (!value || !/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)) {
    return undefined
  }

  return value
}

function normalizeBrandFontPreset(input: unknown): BrandFontPreset | undefined {
  const value = optionalString(input)

  if (!value || !BRAND_FONT_PRESETS.includes(value as BrandFontPreset)) {
    return undefined
  }

  return value as BrandFontPreset
}

function normalizeNavigationLogoSource(input: unknown): NavigationLogoSource | undefined {
  const value = optionalString(input)

  if (!value || !NAVIGATION_LOGO_SOURCES.includes(value as NavigationLogoSource)) {
    return undefined
  }

  return value as NavigationLogoSource
}
