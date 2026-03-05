import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
    },
    {
      name: 'submitLabel',
      type: 'text',
      defaultValue: 'Submit',
    },
  ],
}
