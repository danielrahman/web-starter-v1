export type LinkItem = {
  label: string
  href: string
  external?: boolean
}

export type ImageAsset = {
  url: string
  alt: string
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
  heading?: BrandFontPreset
  body?: BrandFontPreset
}

export type BrandTheme = {
  colors?: BrandColors
  fonts?: BrandFonts
}

export type BrandConfig = {
  logo?: ImageAsset
  favicon?: ImageAsset
  socialImage?: ImageAsset
  theme?: BrandTheme
}

export type NavigationLogoSource = 'siteBrand' | 'custom'

export type SeoMeta = {
  title?: string
  description?: string
  canonicalPath?: string
  noIndex?: boolean
  ogImage?: string
}

export type SiteConfig = {
  name: string
  tagline: string
  description: string
  defaultTitle: string
  defaultDescription: string
  contactEmail?: string
  brand?: BrandConfig
}

export type Navigation = {
  logoSource?: NavigationLogoSource
  logo?: ImageAsset
  items: LinkItem[]
  cta?: LinkItem
}

export type Footer = {
  blurb: string
  columns: Array<{
    title: string
    links: LinkItem[]
  }>
  legalLinks: LinkItem[]
  copyright: string
}

export type FeatureItem = {
  title: string
  description: string
  eyebrow?: string
}

export type ServiceItem = {
  title: string
  description: string
  href?: string
}

export type TestimonialItem = {
  quote: string
  author: string
  role?: string
  company?: string
}

export type StatItem = {
  label: string
  value: string
  description?: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type FAQGroup = {
  slug: string
  title: string
  intro?: string
  items: FAQItem[]
}

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  challenge: string
  solution: string
  outcome: string
  stats: StatItem[]
  testimonial?: TestimonialItem
  seo?: SeoMeta
}

export type HeroBlock = {
  type: 'hero'
  id: string
  eyebrow?: string
  headline: string
  body: string
  primaryCta?: LinkItem
  secondaryCta?: LinkItem
}

export type ProofStripBlock = {
  type: 'proofStrip'
  id: string
  title?: string
  items: string[]
}

export type FeaturesBlock = {
  type: 'features'
  id: string
  title: string
  intro?: string
  items: FeatureItem[]
}

export type ServicesBlock = {
  type: 'services'
  id: string
  title: string
  intro?: string
  items: ServiceItem[]
}

export type RichTextBlock = {
  type: 'richText'
  id: string
  title?: string
  body: string
}

export type CaseStudiesTeaserBlock = {
  type: 'caseStudiesTeaser'
  id: string
  title: string
  intro?: string
  limit?: number
  cta?: LinkItem
}

export type TestimonialsBlock = {
  type: 'testimonials'
  id: string
  title?: string
  items: TestimonialItem[]
}

export type StatsBlock = {
  type: 'stats'
  id: string
  title?: string
  items: StatItem[]
}

export type FAQBlock = {
  type: 'faq'
  id: string
  title?: string
  groupSlug?: string
  items?: FAQItem[]
}

export type CTABlock = {
  type: 'cta'
  id: string
  title: string
  body?: string
  primaryCta?: LinkItem
  secondaryCta?: LinkItem
}

export type ContactFormBlock = {
  type: 'contactForm'
  id: string
  title: string
  body?: string
  submitLabel?: string
}

export type SectionBlock =
  | HeroBlock
  | ProofStripBlock
  | FeaturesBlock
  | ServicesBlock
  | RichTextBlock
  | CaseStudiesTeaserBlock
  | TestimonialsBlock
  | StatsBlock
  | FAQBlock
  | CTABlock
  | ContactFormBlock

export type Page = {
  slug: string
  title: string
  description?: string
  seo?: SeoMeta
  blocks: SectionBlock[]
}

export type ContactSubmissionInput = {
  name: string
  email: string
  company?: string
  message: string
  pageUrl?: string
  honey: string
}

export type ContactSubmission = {
  id: string
  name: string
  email: string
  company?: string
  message: string
  pageUrl?: string
  createdAt: string
}
