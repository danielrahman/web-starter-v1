import config from '@payload-config'
import { getPayload } from 'payload'

export function ensureCmsEnabled(actionLabel) {
  if (process.env.CMS_ENABLED !== 'true') {
    console.error(`CMS_ENABLED must be true before ${actionLabel}.`)
    process.exit(1)
  }
}

export function readFlagValue(flag, argv = process.argv) {
  const index = argv.findIndex((arg) => arg === flag)

  if (index === -1) {
    return undefined
  }

  const value = argv[index + 1]
  return value && !value.startsWith('--') ? value : undefined
}

export function getDocId(doc) {
  if (!doc || typeof doc !== 'object' || !('id' in doc)) {
    return null
  }

  return doc.id
}

export async function withPayload(run) {
  const payload = await getPayload({ config })

  try {
    return await run(payload)
  } finally {
    await payload.destroy()
  }
}
