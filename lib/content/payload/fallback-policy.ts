import type { CmsFileFallbackMode } from '@/lib/env'

export type PayloadFallbackPolicy = {
  allowEmptyStateFallback: boolean
  allowErrorFallback: boolean
}

export function resolvePayloadFallbackPolicy(mode: CmsFileFallbackMode): PayloadFallbackPolicy {
  if (mode === 'always') {
    return {
      allowEmptyStateFallback: true,
      allowErrorFallback: true,
    }
  }

  if (mode === 'bootstrap') {
    return {
      allowEmptyStateFallback: true,
      allowErrorFallback: false,
    }
  }

  return {
    allowEmptyStateFallback: false,
    allowErrorFallback: false,
  }
}
