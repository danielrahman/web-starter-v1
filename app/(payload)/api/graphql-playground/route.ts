import { NextResponse } from 'next/server'

import { cmsEnabledFromEnv } from '@/lib/env'

export async function GET(request: Request) {
  if (!cmsEnabledFromEnv() || process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const [{ default: config }, { GRAPHQL_PLAYGROUND_GET }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/routes'),
  ])

  return GRAPHQL_PLAYGROUND_GET(config)(request)
}
