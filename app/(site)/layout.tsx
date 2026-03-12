import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import '../globals.css'
 
export const metadata: Metadata = {
  title: 'START HERE',
}

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
