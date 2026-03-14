import { z } from 'zod'

const booleanFromEnv = z
  .enum(['true', 'false'])
  .default('false')
  .transform((value) => value === 'true')

const optionalNonEmptyStringFromEnv = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().min(1).optional()
)

const s3EnvKeys = [
  'S3_ENDPOINT',
  'S3_BUCKET',
  'S3_ACCESS_KEY_ID',
  'S3_SECRET_ACCESS_KEY',
  'S3_PUBLIC_BASE_URL',
] as const

type CmsRuntimeEnv = NodeJS.ProcessEnv
type S3EnvKey = (typeof s3EnvKeys)[number]

const cmsEnvSchema = z.object({
  PAYLOAD_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  TURSO_AUTH_TOKEN: optionalNonEmptyStringFromEnv,
  PAYLOAD_LOCAL_MEDIA_DIR: optionalNonEmptyStringFromEnv,
  S3_ENDPOINT: optionalNonEmptyStringFromEnv,
  S3_BUCKET: optionalNonEmptyStringFromEnv,
  S3_ACCESS_KEY_ID: optionalNonEmptyStringFromEnv,
  S3_SECRET_ACCESS_KEY: optionalNonEmptyStringFromEnv,
  S3_PUBLIC_BASE_URL: optionalNonEmptyStringFromEnv,
})

export type CmsEnv = z.infer<typeof cmsEnvSchema>
export type CmsEnvWithS3 = CmsEnv &
  Required<{
    [K in S3EnvKey]: string
  }>

export function cmsEnabledFromEnv(env: CmsRuntimeEnv = process.env) {
  return booleanFromEnv.parse(env.CMS_ENABLED)
}

export function getSiteUrl(env: CmsRuntimeEnv = process.env) {
  return env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export function getLocalMediaDir(env: CmsRuntimeEnv = process.env) {
  return env.PAYLOAD_LOCAL_MEDIA_DIR?.trim() || 'media'
}

export function hasS3StorageConfig(env: CmsEnv): env is CmsEnvWithS3 {
  return s3EnvKeys.every((key) => typeof env[key] === 'string' && env[key].length > 0)
}

export function getCmsEnv(env: CmsRuntimeEnv = process.env) {
  const parsed = cmsEnvSchema.parse(env)

  const usesLibsql = parsed.DATABASE_URL.startsWith('libsql://')
  const usesFileSqlite = parsed.DATABASE_URL.startsWith('file:')

  if (!usesLibsql && !usesFileSqlite) {
    throw new Error('DATABASE_URL must start with "libsql://" (Turso) or "file:" (local SQLite).')
  }

  if (usesLibsql && !parsed.TURSO_AUTH_TOKEN) {
    throw new Error('TURSO_AUTH_TOKEN is required when DATABASE_URL uses "libsql://".')
  }

  const populatedS3Keys = s3EnvKeys.filter((key) => typeof parsed[key] === 'string' && parsed[key].length > 0)

  if (populatedS3Keys.length > 0 && populatedS3Keys.length < s3EnvKeys.length) {
    throw new Error(`S3 storage requires all of: ${s3EnvKeys.join(', ')}.`)
  }

  return parsed
}

export function getResendConfig(env: CmsRuntimeEnv = process.env) {
  return {
    apiKey: optionalNonEmptyStringFromEnv.parse(env.RESEND_API_KEY),
    fromEmail: optionalNonEmptyStringFromEnv.parse(env.CONTACT_FROM_EMAIL),
    toEmail: optionalNonEmptyStringFromEnv.parse(env.CONTACT_TO_EMAIL),
  }
}
