import { optionalTrimmedString } from '@/lib/string-utils'

export function asObject(input: unknown): Record<string, unknown> {
  return input && typeof input === 'object' ? (input as Record<string, unknown>) : {}
}

export function readObjectString(input: unknown, key: string): string | undefined {
  return optionalTrimmedString(asObject(input)[key])
}
