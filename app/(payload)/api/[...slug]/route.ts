import { NextResponse } from 'next/server'

import { cmsEnabledFromEnv } from '@/lib/env'

type SlugRouteContext = {
  params: Promise<{ slug: string[] }>
}

type RestHandlerName = 'REST_DELETE' | 'REST_GET' | 'REST_OPTIONS' | 'REST_PATCH' | 'REST_POST' | 'REST_PUT'

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

async function runPayloadRestHandler(handlerName: RestHandlerName, request: Request, context: SlugRouteContext) {
  if (!cmsEnabledFromEnv()) {
    return disabledResponse()
  }

  const { config, routeHandlers } = await loadPayloadRestHandlers()
  return routeHandlers[handlerName](config)(request, context)
}

export async function GET(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_GET', request, context)
}

export async function POST(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_POST', request, context)
}

export async function DELETE(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_DELETE', request, context)
}

export async function PATCH(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_PATCH', request, context)
}

export async function PUT(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_PUT', request, context)
}

export async function OPTIONS(request: Request, context: SlugRouteContext) {
  return runPayloadRestHandler('REST_OPTIONS', request, context)
}
