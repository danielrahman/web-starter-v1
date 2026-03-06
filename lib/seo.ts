import type { Metadata } from 'next'

import { siteConfig } from '@/site.config'
import { absoluteUrl } from '@/lib/utils'
import type { Page, SeoMeta, SiteConfig } from '@/lib/content/models'
import { siteUrl } from '@/lib/env'
import { getPagePath } from '@/lib/site-paths'

export function buildMetadataFromPage(page: Page, site: SiteConfig): Metadata {
  const seo = page.seo
  const title = seo?.title || `${page.title} | ${site.defaultTitle}`
  const description = seo?.description || page.description || site.defaultDescription
  const canonicalPath = seo?.canonicalPath || normalizeCanonicalPath(page.slug)

  return buildMetadata({
    title,
    description,
    canonicalPath,
    seo,
    site,
  })
}

export function buildSiteMetadata(site: SiteConfig): Metadata {
  return buildMetadata({
    title: site.defaultTitle,
    description: site.defaultDescription,
    canonicalPath: '/',
    site,
  })
}

type MetadataArgs = {
  title: string
  description: string
  canonicalPath: string
  seo?: SeoMeta
  site?: SiteConfig
}

export function buildMetadata({ title, description, canonicalPath, seo, site }: MetadataArgs): Metadata {
  const canonical = absoluteUrl(canonicalPath, siteUrl)
  const ogImage = resolveImageUrl(seo?.ogImage || site?.brand?.socialImage?.url || siteConfig.ogImagePath)
  const favicon = resolveImageUrl(site?.brand?.favicon?.url)
  const openGraphImages = ogImage ? [{ url: ogImage }] : undefined
  const twitterImages = ogImage ? [ogImage] : undefined

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
    },
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      images: openGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: twitterImages,
    },
    icons: favicon
      ? {
          icon: [{ url: favicon }],
          shortcut: [{ url: favicon }],
          apple: [{ url: favicon }],
        }
      : undefined,
  }
}

function normalizeCanonicalPath(slug: string): string {
  return getPagePath(slug)
}

function resolveImageUrl(pathname?: string): string | undefined {
  if (!pathname) {
    return undefined
  }

  if (/^https?:\/\//.test(pathname)) {
    return pathname
  }

  return absoluteUrl(pathname, siteUrl)
}
