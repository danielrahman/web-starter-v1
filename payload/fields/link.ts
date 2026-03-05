import type { Field } from 'payload'

export function linkField(name: string, label: string, required = false): Field {
  return {
    name,
    label,
    type: 'group',
    fields: [
      {
        name: 'label',
        type: 'text',
        required,
      },
      {
        name: 'href',
        type: 'text',
        required,
      },
      {
        name: 'external',
        type: 'checkbox',
        defaultValue: false,
      },
    ],
  }
}
