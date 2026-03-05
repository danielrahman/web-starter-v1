import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import assert from 'node:assert/strict'
import test from 'node:test'

const ROOT_DIR = path.resolve(path.join(import.meta.dirname, '..', '..'))

type CommandResult = {
  code: number | null
  output: string
}

function runSeedCommand(env: Record<string, string>): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    const child = spawn(cmd, ['run', 'payload:seed'], {
      cwd: ROOT_DIR,
      env: { ...process.env, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let output = ''

    child.stdout.on('data', (chunk) => {
      output += String(chunk)
    })

    child.stderr.on('data', (chunk) => {
      output += String(chunk)
    })

    child.on('error', reject)
    child.on('close', (code) => {
      resolve({
        code,
        output,
      })
    })
  })
}

function parseSeedSummary(label: string, output: string): { created: number; updated: number } {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`- ${escapedLabel}: (\\d+) created, (\\d+) updated`)
  const match = output.match(regex)

  assert.ok(match, `Seed output is missing summary line for "${label}".\nOutput:\n${output}`)

  return {
    created: Number(match[1]),
    updated: Number(match[2]),
  }
}

test('payload:seed is idempotent for pages, case studies, and faq groups', { timeout: 120000 }, async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'payload-seed-test-'))
  const dbPath = path.join(tempDir, 'seed.sqlite')

  const env = {
    CMS_ENABLED: 'true',
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    PAYLOAD_SECRET: 'integration-seed-secret',
    DATABASE_URL: `file:${dbPath}`,
    TURSO_AUTH_TOKEN: 'integration-token',
    S3_ENDPOINT: 'https://example-account.r2.cloudflarestorage.com',
    S3_BUCKET: 'integration-bucket',
    S3_ACCESS_KEY_ID: 'integration-key',
    S3_SECRET_ACCESS_KEY: 'integration-secret',
    S3_PUBLIC_BASE_URL: 'https://cdn.example.com',
  }

  try {
    const firstRun = await runSeedCommand(env)
    assert.equal(firstRun.code, 0, `First seed run failed.\nOutput:\n${firstRun.output}`)

    const firstPages = parseSeedSummary('Pages', firstRun.output)
    const firstCaseStudies = parseSeedSummary('Case studies', firstRun.output)
    const firstFaqs = parseSeedSummary('FAQ groups', firstRun.output)

    assert.ok(firstPages.created > 0, 'First seed run should create at least one page.')
    assert.equal(firstPages.updated, 0, 'First seed run should not update existing pages.')
    assert.ok(firstCaseStudies.created > 0, 'First seed run should create at least one case study.')
    assert.equal(firstCaseStudies.updated, 0, 'First seed run should not update existing case studies.')
    assert.ok(firstFaqs.created > 0, 'First seed run should create at least one FAQ group.')
    assert.equal(firstFaqs.updated, 0, 'First seed run should not update existing FAQ groups.')

    const secondRun = await runSeedCommand(env)
    assert.equal(secondRun.code, 0, `Second seed run failed.\nOutput:\n${secondRun.output}`)

    const secondPages = parseSeedSummary('Pages', secondRun.output)
    const secondCaseStudies = parseSeedSummary('Case studies', secondRun.output)
    const secondFaqs = parseSeedSummary('FAQ groups', secondRun.output)

    assert.equal(secondPages.created, 0, 'Second seed run should not create duplicate pages.')
    assert.ok(secondPages.updated > 0, 'Second seed run should update existing pages.')
    assert.equal(secondCaseStudies.created, 0, 'Second seed run should not create duplicate case studies.')
    assert.ok(secondCaseStudies.updated > 0, 'Second seed run should update existing case studies.')
    assert.equal(secondFaqs.created, 0, 'Second seed run should not create duplicate FAQ groups.')
    assert.ok(secondFaqs.updated > 0, 'Second seed run should update existing FAQ groups.')
  } finally {
    await rm(tempDir, { recursive: true, force: true })
  }
})
