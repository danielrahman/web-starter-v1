import { NextResponse } from 'next/server'

import { cmsEnabled } from '@/lib/env'

export async function GET(request: Request) {
  if (!cmsEnabled) {
    return NextResponse.json({ error: 'CMS is disabled' }, { status: 404 })
  }

  const [{ default: config }, { GRAPHQL_PLAYGROUND_GET }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/routes'),
  ])

  return GRAPHQL_PLAYGROUND_GET(config)(request)
}
