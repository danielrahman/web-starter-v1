import assert from 'node:assert/strict'
import test from 'node:test'

import {
  normalizeOptionalTestimonial,
  normalizeTestimonialItem,
} from '@/lib/content/payload/testimonial'

test('normalizeTestimonialItem normalizes required and optional fields', () => {
  assert.deepEqual(
    normalizeTestimonialItem({
      quote: 'Great work.',
      author: 'Alex',
      role: '  ',
      company: 'Northstar',
    }),
    {
      quote: 'Great work.',
      author: 'Alex',
      role: undefined,
      company: 'Northstar',
    },
  )
})

test('normalizeOptionalTestimonial returns undefined when quote is missing', () => {
  assert.equal(
    normalizeOptionalTestimonial({
      author: 'Alex',
    }),
    undefined,
  )
})

test('normalizeOptionalTestimonial returns normalized value when quote exists', () => {
  assert.deepEqual(
    normalizeOptionalTestimonial({
      quote: 'Great work.',
      author: 'Alex',
      role: 'Founder',
      company: 'Northstar',
    }),
    {
      quote: 'Great work.',
      author: 'Alex',
      role: 'Founder',
      company: 'Northstar',
    },
  )
})
