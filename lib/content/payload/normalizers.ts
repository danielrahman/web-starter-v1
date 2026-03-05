import type { CaseStudy, FAQGroup, Footer, Navigation, Page, SiteConfig } from '@/lib/content/models'
import { pageSchema } from '@/lib/content/schemas'

import { normalizeBlock } from './block-mapper'
import { asArray, asBoolean, asObject, asString, optionalString } from './coerce'

const EMPTY_SITE_CONFIG: SiteConfig = {
  name: 'Marketing Site',
  tagline: 'Reusable marketing starter',
  description: 'Fallback configuration while CMS content is empty.',
  defaultTitle: 'Marketing Site',
  defaultDescription: 'Reusable marketing starter.',
}

const EMPTY_NAVIGATION: Navigation = {
  logoText: 'Marketing Site',
  items: [],
}

const EMPTY_FOOTER: Footer = {
  blurb: '',
  columns: [],
  legalLinks: [],
  copyright: '',
}

export function normalizeSiteSettingsGlobal(rawGlobal: unknown): { value: SiteConfig; isEmpty: boolean } {
  const global = asObject(rawGlobal)

  return {
    value: {
      name: asString(global.name, EMPTY_SITE_CONFIG.name),
      tagline: asString(global.tagline, EMPTY_SITE_CONFIG.tagline),
      description: asString(global.description, EMPTY_SITE_CONFIG.description),
      defaultTitle: asString(global.defaultTitle, EMPTY_SITE_CONFIG.defaultTitle),
      defaultDescription: asString(global.defaultDescription, EMPTY_SITE_CONFIG.defaultDescription),
      contactEmail: optionalString(global.contactEmail),
    },
    isEmpty:
      !asString(global.name, '').trim() &&
      !asString(global.tagline, '').trim() &&
      !asString(global.defaultTitle, '').trim(),
  }
}

export function normalizeNavigationGlobal(rawGlobal: unknown): { value: Navigation; isEmpty: boolean } {
  const global = asObject(rawGlobal)
  const items = asArray(global.items).map(normalizeLinkItem).filter(Boolean) as Navigation['items']
  const cta = normalizeLinkItem(global.cta)

  return {
    value: {
      logoText: asString(global.logoText, EMPTY_NAVIGATION.logoText),
      items,
      cta: cta || undefined,
    },
    isEmpty: !asString(global.logoText, '').trim() && items.length === 0 && !cta,
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
    seo: {
      title: optionalString(asObject(value.seo).title),
      description: optionalString(asObject(value.seo).description),
      canonicalPath: optionalString(asObject(value.seo).canonicalPath),
      noIndex: asBoolean(asObject(value.seo).noIndex),
      ogImage: optionalString(asObject(value.seo).ogImage),
    },
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
    seo: {
      title: optionalString(asObject(value.seo).title),
      description: optionalString(asObject(value.seo).description),
      canonicalPath: optionalString(asObject(value.seo).canonicalPath),
      noIndex: asBoolean(asObject(value.seo).noIndex),
      ogImage: optionalString(asObject(value.seo).ogImage),
    },
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
