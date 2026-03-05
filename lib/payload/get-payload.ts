import 'server-only'

import { cmsEnabled } from '@/lib/env'

let payloadPromise: Promise<import('payload').Payload> | null = null

export async function getPayloadClient() {
  if (!cmsEnabled) {
    throw new Error('Payload client requested while CMS mode is disabled.')
  }

  if (!payloadPromise) {
    payloadPromise = (async () => {
      const [{ getPayload }, configModule] = await Promise.all([import('payload'), import('@payload-config')])
      return getPayload({ config: configModule.default })
    })()
  }

  return payloadPromise
}
