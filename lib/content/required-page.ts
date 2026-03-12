import 'server-only'

import { notFound } from 'next/navigation'

import type { Page } from './models'
import { getContentSource } from './get-content-source'

export async function getRequiredPageBySlug(slug: string): Promise<Page> {
  const source = getContentSource()
  const page = await source.getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return page
}
