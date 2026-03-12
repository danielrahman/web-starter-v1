import assert from 'node:assert/strict'
import test from 'node:test'

import { normalizeSiteSettings } from '@/lib/site-settings'

test('normalizeSiteSettings trims nested strings and keeps brand data when present', () => {
  const settings = normalizeSiteSettings({
    brand: {
      logo: {
        alt: ' Brand logo ',
        url: ' /logo.svg ',
      },
      theme: {
        fonts: {
          body: ' sora ',
        },
      },
    },
    contactEmail: ' team@example.com ',
    name: ' Demo site ',
  })

  assert.equal(settings.name, 'Demo site')
  assert.equal(settings.contactEmail, 'team@example.com')
  assert.deepEqual(settings.brand?.logo, {
    alt: 'Brand logo',
    url: '/logo.svg',
  })
  assert.equal(settings.brand?.theme?.fonts?.body, 'sora')
})

test('normalizeSiteSettings falls back to defaults when values are blank', () => {
  const settings = normalizeSiteSettings({
    brand: {
      logo: {
        alt: '   ',
        url: '   ',
      },
    },
    defaultDescription: '   ',
    description: '   ',
    name: '   ',
  })

  assert.equal(settings.name, 'Payload CMS')
  assert.equal(settings.description, 'Admin branding fallback.')
  assert.equal(settings.defaultDescription, 'Admin branding fallback.')
  assert.equal(settings.brand, undefined)
})
