import '@payloadcms/next/css'
import './admin-overrides.css'

import type { ReactNode } from 'react'

import { cmsEnabled } from '@/lib/env'

import { payloadServerFunction } from './serverFunction'

type PayloadLayoutProps = {
  children: ReactNode
}

export default async function PayloadLayout({ children }: PayloadLayoutProps) {
  if (!cmsEnabled) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }

  const [{ default: config }, { RootLayout }, { importMap }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/layouts'),
    import('./admin/importMap'),
  ])

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={payloadServerFunction}>
      {children}
    </RootLayout>
  )
}
