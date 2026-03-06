import assert from 'node:assert/strict'
import test from 'node:test'

import { generateAltFromFilename } from '@/payload/collections/media'

test('generateAltFromFilename turns file names into readable alt text', () => {
  assert.equal(generateAltFromFilename('hero-team_photo-2026.png'), 'Hero team photo 2026')
  assert.equal(generateAltFromFilename('icons/brand-mark.svg'), 'Brand mark')
})

test('generateAltFromFilename returns undefined for empty values', () => {
  assert.equal(generateAltFromFilename(''), undefined)
  assert.equal(generateAltFromFilename(undefined), undefined)
})
