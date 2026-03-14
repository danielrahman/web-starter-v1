import { NextResponse } from 'next/server'
import { z } from 'zod'

import { cmsEnabledFromEnv } from '@/lib/env'
import { sendContactEmail } from '@/lib/email'
import { getPayloadClient } from '@/lib/payload/get-payload'

const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  company: z.string().trim().optional().or(z.literal('')),
  message: z.string().trim().min(1),
  pageUrl: z.string().trim().optional().or(z.literal('')),
  honey: z.string().optional().default(''),
})

export async function POST(request: Request) {
  const cmsEnabled = cmsEnabledFromEnv()
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const parsed = contactSubmissionSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Invalid form data',
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    )
  }

  const submission = {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || undefined,
    message: parsed.data.message,
    pageUrl: parsed.data.pageUrl || undefined,
  }

  if (parsed.data.honey) {
    return NextResponse.json({ ok: true })
  }

  let persisted = false
  let persistenceFailed = false
  let emailStatus: 'disabled' | 'provider_error' | 'sent' = 'disabled'

  try {
    if (cmsEnabled) {
      try {
        const payload = await getPayloadClient()

        await payload.create({
          collection: 'submissions',
          data: {
            ...submission,
            submittedAt: new Date().toISOString(),
          },
          overrideAccess: true,
        })

        persisted = true
      } catch (error) {
        persistenceFailed = true
        console.error('Failed to persist contact submission.', error)
      }
    }

    emailStatus = (await sendContactEmail(submission)).status

    if (!persisted && emailStatus !== 'sent') {
      console.error('Contact submission was not durably handled.', {
        emailStatus,
        persistenceFailed,
      })
      return NextResponse.json({ error: 'Unable to process submission' }, { status: 503 })
    }

    return NextResponse.json({
      ok: true,
      emailed: emailStatus === 'sent',
      persisted,
    })
  } catch (error) {
    console.error('Contact submission failed:', error)
    return NextResponse.json({ error: 'Unable to process submission' }, { status: 500 })
  }
}
