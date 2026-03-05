import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { cmsEnabled } from '@/lib/env'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export async function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  if (!cmsEnabled) {
    return { title: 'Not found' }
  }

  const [{ default: config }, { generatePageMetadata }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/views'),
  ])

  return generatePageMetadata({ config, params, searchParams })
}

export default async function PayloadAdminPage({ params, searchParams }: Args) {
  if (!cmsEnabled) {
    notFound()
  }

  const [{ default: config }, { RootPage }, { importMap }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/views'),
    import('../importMap'),
  ])

  return RootPage({ config, params, searchParams, importMap })
}
