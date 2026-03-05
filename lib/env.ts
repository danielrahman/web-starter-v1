import { z } from 'zod'

const booleanFromEnv = z
  .enum(['true', 'false'])
  .default('false')
  .transform((value) => value === 'true')

const cmsFileFallbackModeFromEnv = z.preprocess(
  (value) => {
    if (typeof value !== 'string') return value

    const normalizedValue = value.trim()
    return normalizedValue.length === 0 ? undefined : normalizedValue
  },
  z.enum(['always', 'bootstrap', 'never']).optional()
)

const optionalNonEmptyStringFromEnv = z.preprocess(
  (value) => {
    if (typeof value !== 'string') return value

    const normalizedValue = value.trim()
    return normalizedValue.length === 0 ? undefined : normalizedValue
  },
  z.string().min(1).optional()
)

export const cmsEnabled = booleanFromEnv.parse(process.env.CMS_ENABLED)

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export type CmsFileFallbackMode = 'always' | 'bootstrap' | 'never'

const defaultCmsFileFallbackMode: CmsFileFallbackMode = process.env.NODE_ENV === 'production' ? 'bootstrap' : 'always'

export const cmsFileFallbackMode: CmsFileFallbackMode =
  cmsFileFallbackModeFromEnv.parse(process.env.CMS_FILE_FALLBACK_MODE) || defaultCmsFileFallbackMode

const cmsEnvSchema = z.object({
  PAYLOAD_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  TURSO_AUTH_TOKEN: optionalNonEmptyStringFromEnv,
  S3_ENDPOINT: z.string().min(1),
  S3_BUCKET: z.string().min(1),
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_PUBLIC_BASE_URL: z.string().min(1),
})

export function getCmsEnv() {
  const parsed = cmsEnvSchema.parse(process.env)

  const usesLibsql = parsed.DATABASE_URL.startsWith('libsql://')
  const usesFileSqlite = parsed.DATABASE_URL.startsWith('file:')

  if (!usesLibsql && !usesFileSqlite) {
    throw new Error('DATABASE_URL must start with "libsql://" (Turso) or "file:" (local SQLite).')
  }

  if (usesLibsql && !parsed.TURSO_AUTH_TOKEN) {
    throw new Error('TURSO_AUTH_TOKEN is required when DATABASE_URL uses "libsql://".')
  }

  return parsed
}

export const resendConfig = {
  apiKey: process.env.RESEND_API_KEY,
  fromEmail: process.env.CONTACT_FROM_EMAIL,
  toEmail: process.env.CONTACT_TO_EMAIL,
}
