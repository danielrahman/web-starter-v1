import { NextResponse } from 'next/server'

import { cmsEnabledFromEnv } from '@/lib/env'

export async function POST(request: Request) {
  if (!cmsEnabledFromEnv()) {
    return NextResponse.json({ error: 'CMS is disabled' }, { status: 404 })
  }

  const [{ default: config }, { GRAPHQL_POST }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/routes'),
  ])

  return GRAPHQL_POST(config)(request)
}
