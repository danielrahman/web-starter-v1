import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import type { CSSProperties, ReactNode } from 'react'

import '../globals.css'

import { FooterSection, HeaderSection } from '@/components/sections'
import { getSiteThemeVariables } from '@/lib/brand/theme'
import { getContentSource } from '@/lib/content/get-content-source'
import { buildSiteMetadata } from '@/lib/seo'

const headingFont = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

export async function generateMetadata(): Promise<Metadata> {
  const source = getContentSource()
  const site = await source.getSiteConfig()
  return buildSiteMetadata(site)
}

export default async function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  const source = getContentSource()
  const [site, navigation, footer] = await Promise.all([
    source.getSiteConfig(),
    source.getNavigation(),
    source.getFooter(),
  ])
  const themeVariables = getSiteThemeVariables(site)

  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-surface)] text-[var(--color-text)] antialiased`}
        style={themeVariables as CSSProperties}
      >
        <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2" href="#main-content">
          Skip to content
        </a>
        <HeaderSection navigation={navigation} site={site} />
        <main id="main-content">{children}</main>
        <FooterSection footer={footer} />
      </body>
    </html>
  )
}
