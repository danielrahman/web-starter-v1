import type { Block } from 'payload'

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
  ],
}
