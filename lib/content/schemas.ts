import { z } from 'zod'

export const linkItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
})

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonicalPath: z.string().optional(),
  noIndex: z.boolean().optional(),
  ogImage: z.string().optional(),
})

const hexColorSchema = z.string().regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)

const imageAssetSchema = z.object({
  url: z.string().min(1),
  alt: z.string().min(1),
})

const brandThemeSchema = z.object({
  colors: z
    .object({
      primaryColor: hexColorSchema.optional(),
      primaryColorStrong: hexColorSchema.optional(),
      surfaceColor: hexColorSchema.optional(),
      surfaceElevatedColor: hexColorSchema.optional(),
      textColor: hexColorSchema.optional(),
      textMutedColor: hexColorSchema.optional(),
      borderColor: hexColorSchema.optional(),
    })
    .optional(),
  fonts: z
    .object({
      heading: z.enum(['sora', 'manrope', 'systemSans', 'systemSerif']).optional(),
      body: z.enum(['sora', 'manrope', 'systemSans', 'systemSerif']).optional(),
    })
    .optional(),
})

const brandSchema = z.object({
  logo: imageAssetSchema.optional(),
  favicon: imageAssetSchema.optional(),
  socialImage: imageAssetSchema.optional(),
  theme: brandThemeSchema.optional(),
})

const featureItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  eyebrow: z.string().optional(),
})

const serviceItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().optional(),
})

const testimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().optional(),
  company: z.string().optional(),
})

const statSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  description: z.string().optional(),
})

const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
})

const heroBlockSchema = z.object({
  type: z.literal('hero'),
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  headline: z.string().min(1),
  body: z.string().min(1),
  primaryCta: linkItemSchema.optional(),
  secondaryCta: linkItemSchema.optional(),
})

const proofStripBlockSchema = z.object({
  type: z.literal('proofStrip'),
  id: z.string().min(1),
  title: z.string().optional(),
  items: z.array(z.string().min(1)).min(1),
})

const featuresBlockSchema = z.object({
  type: z.literal('features'),
  id: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  items: z.array(featureItemSchema).min(1),
})

const servicesBlockSchema = z.object({
  type: z.literal('services'),
  id: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  items: z.array(serviceItemSchema).min(1),
})

const richTextBlockSchema = z.object({
  type: z.literal('richText'),
  id: z.string().min(1),
  title: z.string().optional(),
  body: z.string().min(1),
})

const caseStudiesTeaserSchema = z.object({
  type: z.literal('caseStudiesTeaser'),
  id: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  limit: z.number().int().positive().optional(),
  cta: linkItemSchema.optional(),
})

const testimonialsSchema = z.object({
  type: z.literal('testimonials'),
  id: z.string().min(1),
  title: z.string().optional(),
  items: z.array(testimonialSchema).min(1),
})

const statsSchema = z.object({
  type: z.literal('stats'),
  id: z.string().min(1),
  title: z.string().optional(),
  items: z.array(statSchema).min(1),
})

const faqSchema = z.object({
  type: z.literal('faq'),
  id: z.string().min(1),
  title: z.string().optional(),
  groupSlug: z.string().optional(),
  items: z.array(faqItemSchema).optional(),
})

const ctaSchema = z.object({
  type: z.literal('cta'),
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.string().optional(),
  primaryCta: linkItemSchema.optional(),
  secondaryCta: linkItemSchema.optional(),
})

const contactFormSchema = z.object({
  type: z.literal('contactForm'),
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.string().optional(),
  submitLabel: z.string().optional(),
})

export const sectionBlockSchema = z.discriminatedUnion('type', [
  heroBlockSchema,
  proofStripBlockSchema,
  featuresBlockSchema,
  servicesBlockSchema,
  richTextBlockSchema,
  caseStudiesTeaserSchema,
  testimonialsSchema,
  statsSchema,
  faqSchema,
  ctaSchema,
  contactFormSchema,
])

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  defaultTitle: z.string().min(1),
  defaultDescription: z.string().min(1),
  contactEmail: z.string().email().optional(),
  brand: brandSchema.optional(),
})

export const navigationSchema = z.object({
  logoSource: z.enum(['siteBrand', 'custom']).optional(),
  logo: imageAssetSchema.optional(),
  items: z.array(linkItemSchema),
  cta: linkItemSchema.optional(),
})

export const footerSchema = z.object({
  blurb: z.string().min(1),
  columns: z.array(
    z.object({
      title: z.string().min(1),
      links: z.array(linkItemSchema),
    }),
  ),
  legalLinks: z.array(linkItemSchema),
  copyright: z.string().min(1),
})

export const pageSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  seo: seoSchema.optional(),
  blocks: z.array(sectionBlockSchema),
})

export const caseStudySchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  challenge: z.string().min(1),
  solution: z.string().min(1),
  outcome: z.string().min(1),
  stats: z.array(statSchema),
  testimonial: testimonialSchema.optional(),
  seo: seoSchema.optional(),
})

export const caseStudiesCollectionSchema = z.object({
  items: z.array(caseStudySchema),
})

export const faqGroupSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  items: z.array(faqItemSchema),
})

export const faqCollectionSchema = z.object({
  groups: z.array(faqGroupSchema),
})

export const contactSubmissionSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().max(120).optional().or(z.literal('')),
  message: z.string().min(10).max(4000),
  pageUrl: z.string().url().optional().or(z.literal('')),
  honey: z.string().max(0),
})
