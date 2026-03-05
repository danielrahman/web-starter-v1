import type { Metadata } from 'next'

import { siteConfig } from '@/site.config'
import { absoluteUrl } from '@/lib/utils'
import type { Page, SeoMeta, SiteConfig } from '@/lib/content/models'
import { siteUrl } from '@/lib/env'

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
  })
}

export function buildSiteMetadata(site: SiteConfig): Metadata {
  return buildMetadata({
    title: site.defaultTitle,
    description: site.defaultDescription,
    canonicalPath: '/',
  })
}

type MetadataArgs = {
  title: string
  description: string
  canonicalPath: string
  seo?: SeoMeta
}

export function buildMetadata({ title, description, canonicalPath, seo }: MetadataArgs): Metadata {
  const canonical = absoluteUrl(canonicalPath, siteUrl)
  const ogImage = seo?.ogImage || absoluteUrl(siteConfig.ogImagePath, siteUrl)

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
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

function normalizeCanonicalPath(slug: string): string {
  return slug === 'home' ? '/' : `/${slug}`
}
