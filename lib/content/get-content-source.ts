import 'server-only'

import { cmsEnabled } from '@/lib/env'

import type { ContentSource } from './content-source'
import { FileContentSource } from './file-content-source'
import { PayloadContentSource } from './payload-content-source'

let contentSource: ContentSource | null = null

export function getContentSource(): ContentSource {
  if (!contentSource) {
    contentSource = cmsEnabled ? new PayloadContentSource() : new FileContentSource()
  }

  return contentSource
}
