import type { TestimonialItem } from '@/lib/content/models'

import { asObject, asString, optionalString } from './coerce'

export function normalizeTestimonialItem(input: unknown): TestimonialItem {
  const testimonial = asObject(input)

  return {
    quote: asString(testimonial.quote, ''),
    author: asString(testimonial.author, ''),
    role: optionalString(testimonial.role),
    company: optionalString(testimonial.company),
  }
}

export function normalizeOptionalTestimonial(input: unknown): TestimonialItem | undefined {
  const testimonial = asObject(input)

  if (!testimonial.quote) {
    return undefined
  }

  return normalizeTestimonialItem(testimonial)
}
