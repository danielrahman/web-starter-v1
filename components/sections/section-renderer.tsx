import type { ContentSource } from '@/lib/content/content-source'
import type { SectionBlock } from '@/lib/content/models'
import { getContentSource } from '@/lib/content/get-content-source'

import { CTASection } from './cta-section'
import { CaseStudiesTeaserSection } from './case-studies-teaser-section'
import { ContactFormSection } from './contact-form-section'
import { FAQSection } from './faq-section'
import { FeatureGridSection } from './feature-grid-section'
import { HeroSection } from './hero-section'
import { NarrativeSection } from './narrative-section'
import { ProofStripSection } from './proof-strip-section'
import { ServicesSection } from './services-section'
import { StatsSection } from './stats-section'
import { TestimonialsSection } from './testimonials-section'

type SectionRendererProps = {
  blocks: SectionBlock[]
}

type RendererContext = {
  contentSource: ContentSource
}

type BlockRenderer<K extends SectionBlock['type']> = (
  block: Extract<SectionBlock, { type: K }>,
  context: RendererContext,
) => Promise<React.ReactNode> | React.ReactNode

type RendererRegistry = {
  [K in SectionBlock['type']]: BlockRenderer<K>
}

const blockRenderers: RendererRegistry = {
  hero: (block) => <HeroSection block={block} key={block.id} />,
  proofStrip: (block) => <ProofStripSection block={block} key={block.id} />,
  features: (block) => <FeatureGridSection block={block} key={block.id} />,
  services: (block) => <ServicesSection block={block} key={block.id} />,
  richText: (block) => <NarrativeSection block={block} key={block.id} />,
  caseStudiesTeaser: async (block, context) => {
    const caseStudies = await context.contentSource.getCaseStudies(block.limit)
    return <CaseStudiesTeaserSection block={block} caseStudies={caseStudies} key={block.id} />
  },
  testimonials: (block) => <TestimonialsSection block={block} key={block.id} />,
  stats: (block) => <StatsSection block={block} key={block.id} />,
  faq: async (block, context) => {
    const fallbackItems = block.items || []
    const faqGroup = block.groupSlug ? await context.contentSource.getFAQGroup(block.groupSlug) : null
    const items = faqGroup?.items || fallbackItems
    const title = block.title || faqGroup?.title
    return <FAQSection items={items} key={block.id} title={title} />
  },
  cta: (block) => <CTASection block={block} key={block.id} />,
  contactForm: (block) => (
    <ContactFormSection body={block.body} id={block.id} key={block.id} submitLabel={block.submitLabel} title={block.title} />
  ),
}

async function renderBlock(block: SectionBlock, context: RendererContext): Promise<React.ReactNode> {
  const renderer = blockRenderers[block.type] as (block: SectionBlock, context: RendererContext) => Promise<React.ReactNode> | React.ReactNode
  return renderer(block, context)
}

export async function SectionRenderer({ blocks }: SectionRendererProps) {
  const contentSource = getContentSource()

  const nodes = await Promise.all(blocks.map((block) => renderBlock(block, { contentSource })))

  return <>{nodes}</>
}
