import sharp from 'sharp'
import test from 'node:test'
import assert from 'node:assert/strict'

import { createSquareIconBuffer, parseSquareIconSize } from '@/lib/payload/admin-brand-image'

test('parseSquareIconSize clamps invalid values to a safe square size', () => {
  assert.equal(parseSquareIconSize(undefined), 96)
  assert.equal(parseSquareIconSize('abc'), 96)
  assert.equal(parseSquareIconSize('8'), 16)
  assert.equal(parseSquareIconSize('2048'), 512)
  assert.equal(parseSquareIconSize('128'), 128)
})

test('createSquareIconBuffer renders a rectangular svg into a square png canvas', async () => {
  const rectangleSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60"><rect width="240" height="60" rx="12" fill="#111111" /></svg>'
  )

  const outputBuffer = await createSquareIconBuffer(rectangleSvg, 96)
  const metadata = await sharp(outputBuffer).metadata()

  assert.equal(metadata.format, 'png')
  assert.equal(metadata.width, 96)
  assert.equal(metadata.height, 96)
})
