import '@payloadcms/next/css'
import './admin-overrides.css'

import type { ReactNode } from 'react'

import { cmsEnabledFromEnv } from '@/lib/env'

import { payloadServerFunction } from './server-function'

type PayloadLayoutProps = {
  children: ReactNode
}

export default async function PayloadLayout({ children }: PayloadLayoutProps) {
  if (!cmsEnabledFromEnv()) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }

  const [{ default: config }, { RootLayout }, { importMap }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/layouts'),
    import('./admin/importMap.js'),
  ])

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={payloadServerFunction}>
      {children}
    </RootLayout>
  )
}
