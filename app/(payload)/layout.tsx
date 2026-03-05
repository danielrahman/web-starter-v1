import '@payloadcms/next/css'

import type { ReactNode } from 'react'
import type { ServerFunctionClient } from 'payload'

import { cmsEnabled } from '@/lib/env'

type PayloadLayoutProps = {
  children: ReactNode
}

export default async function PayloadLayout({ children }: PayloadLayoutProps) {
  if (!cmsEnabled) {
    return <>{children}</>
  }

  const [{ default: config }, { handleServerFunctions, RootLayout }, { importMap }] = await Promise.all([
    import('@payload-config'),
    import('@payloadcms/next/layouts'),
    import('./admin/importMap'),
  ])

  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'

    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
