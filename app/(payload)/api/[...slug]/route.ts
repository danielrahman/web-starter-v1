import { NextResponse } from 'next/server'

import { cmsEnabled } from '@/lib/env'

type SlugRouteContext = {
  params: Promise<{ slug: string[] }>
}

async function loadPayloadRestHandlers() {
  const [configModule, routeHandlers] = await Promise.all([import('@payload-config'), import('@payloadcms/next/routes')])
  return {
    config: configModule.default,
    routeHandlers,
  }
}

function disabledResponse() {
  return NextResponse.json({ error: 'CMS is disabled' }, { status: 404 })
}

export async function GET(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_GET(config)(request, context)
}

export async function POST(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_POST(config)(request, context)
}

export async function DELETE(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_DELETE(config)(request, context)
}

export async function PATCH(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_PATCH(config)(request, context)
}

export async function PUT(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_PUT(config)(request, context)
}

export async function OPTIONS(request: Request, context: SlugRouteContext) {
  if (!cmsEnabled) return disabledResponse()

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers.REST_OPTIONS(config)(request, context)
}
