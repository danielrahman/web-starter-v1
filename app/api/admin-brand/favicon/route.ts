import { NextResponse } from 'next/server'

import { siteUrl } from '@/lib/env'
import { getCachedSquareIconFromUrl, parseSquareIconSize } from '@/lib/payload/admin-brand-image'
import { getPayloadClient } from '@/lib/payload/get-payload'
import { getAdminBrandIcon, getAdminSiteConfig } from '@/lib/payload/admin-brand'
import { absoluteUrl } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const payload = await getPayloadClient()
    const site = await getAdminSiteConfig(payload)
    const icon = getAdminBrandIcon(site)

    if (!icon?.url) {
      return new NextResponse(null, { status: 204 })
    }

    const targetUrl = /^https?:\/\//.test(icon.url) ? icon.url : absoluteUrl(icon.url, siteUrl)
    const squareSize = parseSquareIconSize(new URL(request.url).searchParams.get('size'))
    const iconBuffer = await getCachedSquareIconFromUrl(targetUrl, squareSize)

    if (!iconBuffer) {
      return new NextResponse(null, { status: 204 })
    }

    const responseBody = new Uint8Array(iconBuffer.byteLength)
    responseBody.set(iconBuffer)

    return new NextResponse(new Blob([responseBody], { type: 'image/png' }), {
      headers: {
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=86400',
        'Content-Type': 'image/png',
      },
    })
  } catch {
    return new NextResponse(null, { status: 204 })
  }
}
