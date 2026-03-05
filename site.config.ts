export const siteConfig = {
  name: 'Northstar Systems',
  legalName: 'Northstar Systems Inc.',
  description:
    'A reusable Next.js + Payload starter for modern B2B marketing websites with optional CMS mode.',
  defaultLocale: 'en-US',
  ogImagePath: '/og-default.svg',
  theme: {
    primaryColor: 'var(--color-primary)',
    radius: 'var(--radius-md)',
    shadow: 'var(--shadow-soft)',
  },
}

export type SiteConfiguration = typeof siteConfig
