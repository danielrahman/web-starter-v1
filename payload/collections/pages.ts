import type { CollectionConfig } from 'payload'

import {
  CaseStudiesTeaserBlock,
  ContactFormBlock,
  CTABlock,
  FAQBlock,
  FeaturesBlock,
  HeroBlock,
  ProofStripBlock,
  RichTextBlock,
  ServicesBlock,
  StatsBlock,
  TestimonialsBlock,
} from '@/payload/blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'blocks',
      label: 'Page sections',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock,
        ProofStripBlock,
        FeaturesBlock,
        ServicesBlock,
        RichTextBlock,
        CaseStudiesTeaserBlock,
        TestimonialsBlock,
        StatsBlock,
        FAQBlock,
        CTABlock,
        ContactFormBlock,
      ],
    },
  ],
}
