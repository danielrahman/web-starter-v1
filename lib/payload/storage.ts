import { s3Storage } from '@payloadcms/storage-s3'
import type { Plugin } from 'payload'

import type { CmsEnv, CmsEnvWithS3 } from '@/lib/env'
import { hasS3StorageConfig } from '@/lib/env'
import { getStoragePrefix } from '@/lib/storage-prefix'

type ResolvePayloadStorageArgs = {
  cmsEnv: CmsEnv
  cwd?: string
  siteUrl?: null | string
}

type PayloadStorageBase = {
  dbURL: string
  plugin: Plugin
  prefix: string
}

export type ResolvedPayloadStorage =
  | (PayloadStorageBase & {
      kind: 'local'
    })
  | (PayloadStorageBase & {
      kind: 's3'
      publicBaseUrl: string
      s3: CmsEnvWithS3
    })

function buildMediaPrefix({ cwd, siteUrl }: Omit<ResolvePayloadStorageArgs, 'cmsEnv'>) {
  return getStoragePrefix({
    cwd,
    siteUrl,
  })
}

export function buildPublicMediaFileUrl({
  filename,
  prefix,
  publicBaseUrl,
  size,
}: {
  filename: string
  prefix?: null | string
  publicBaseUrl: string
  size?: {
    name?: null | string
  }
}) {
  const base = publicBaseUrl.replace(/\/+$/, '')
  const prefixPath = prefix ? `${prefix.replace(/^\/+|\/+$/g, '')}/` : ''
  const sizePrefix = size?.name ? `${size.name}_` : ''

  return `${base}/${prefixPath}${sizePrefix}${filename}`
}

function buildS3StoragePlugin({ prefix, s3 }: { prefix: string; s3: CmsEnvWithS3 }): Plugin {
  return s3Storage({
    alwaysInsertFields: true,
    bucket: s3.S3_BUCKET,
    collections: {
      media: {
        generateFileURL: ({ filename, prefix, size }) =>
          buildPublicMediaFileUrl({
            filename,
            prefix,
            publicBaseUrl: s3.S3_PUBLIC_BASE_URL,
            size,
          }),
        prefix,
      },
    },
    config: {
      credentials: {
        accessKeyId: s3.S3_ACCESS_KEY_ID,
        secretAccessKey: s3.S3_SECRET_ACCESS_KEY,
      },
      endpoint: s3.S3_ENDPOINT,
      region: 'auto',
    },
    enabled: true,
  })
}

function buildLocalStoragePlugin({ prefix }: { prefix: string }): Plugin {
  return s3Storage({
    alwaysInsertFields: true,
    bucket: 'local-media-disabled',
    collections: {
      media: {
        prefix,
      },
    },
    config: {
      credentials: {
        accessKeyId: 'local-media-disabled',
        secretAccessKey: 'local-media-disabled',
      },
      endpoint: 'https://example.invalid',
      region: 'auto',
    },
    enabled: false,
  })
}

export function resolvePayloadStorage(args: ResolvePayloadStorageArgs): ResolvedPayloadStorage {
  const prefix = buildMediaPrefix(args)
  const dbURL = args.cmsEnv.DATABASE_URL

  if (hasS3StorageConfig(args.cmsEnv)) {
    return {
      dbURL,
      kind: 's3',
      plugin: buildS3StoragePlugin({
        prefix,
        s3: args.cmsEnv,
      }),
      prefix,
      publicBaseUrl: args.cmsEnv.S3_PUBLIC_BASE_URL,
      s3: args.cmsEnv,
    }
  }

  return {
    dbURL,
    kind: 'local',
    plugin: buildLocalStoragePlugin({ prefix }),
    prefix,
  }
}
