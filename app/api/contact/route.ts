import { NextResponse } from 'next/server'

import { getContentSource } from '@/lib/content/get-content-source'
import { contactSubmissionSchema } from '@/lib/content/schemas'
import { cmsEnabled } from '@/lib/env'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
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

  const input = {
    ...parsed.data,
    company: parsed.data.company || undefined,
    pageUrl: parsed.data.pageUrl || undefined,
  }

  if (input.honey) {
    return NextResponse.json({ ok: true })
  }

  const source = getContentSource()

  try {
    const submission = await source.createContactSubmission(input)

    let emailed = false
    try {
      emailed = await sendContactEmail(submission)
    } catch (error) {
      console.error('Failed to send contact email:', error)
    }

    if (!cmsEnabled && !emailed) {
      console.info('Contact submission received (email not configured):', submission)
    }

    return NextResponse.json({ ok: true, emailed, persisted: cmsEnabled })
  } catch (error) {
    console.error('Contact submission failed:', error)
    return NextResponse.json({ error: 'Unable to process submission' }, { status: 500 })
  }
}
