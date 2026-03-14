import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { cmsEnabledFromEnv } from '@/lib/env'

export type PayloadAdminViewArgs = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

type PayloadAdminViewName = 'NotFoundPage' | 'RootPage'

export async function generatePayloadAdminMetadata(args: PayloadAdminViewArgs): Promise<Metadata> {
  if (!cmsEnabledFromEnv()) {
    return { title: 'Not found' }
  }

  const [{ default: config }, { generatePageMetadata }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/views'),
  ])

  return generatePageMetadata({ config, ...args })
}

export async function renderPayloadAdminView(viewName: PayloadAdminViewName, args: PayloadAdminViewArgs) {
  if (!cmsEnabledFromEnv()) {
    notFound()
  }

  const [{ default: config }, views, { importMap }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/views'),
    import('../importMap.js'),
  ])

  const view = viewName === 'RootPage' ? views.RootPage : views.NotFoundPage

  return view({ config, importMap, ...args })
}
