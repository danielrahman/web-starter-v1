import 'server-only'

import { Resend } from 'resend'

import { getResendConfig } from '@/lib/env'

export type ContactEmailPayload = {
  company?: string
  email: string
  message: string
  name: string
  pageUrl?: string
}

export type ContactEmailResult =
  | {
      status: 'disabled'
    }
  | {
      status: 'provider_error'
    }
  | {
      status: 'sent'
    }

export async function sendContactEmail(submission: ContactEmailPayload): Promise<ContactEmailResult> {
  const resendConfig = getResendConfig()

  if (!resendConfig.apiKey || !resendConfig.fromEmail || !resendConfig.toEmail) {
    return { status: 'disabled' }
  }

  const resend = new Resend(resendConfig.apiKey)

  try {
    await resend.emails.send({
      from: resendConfig.fromEmail,
      to: resendConfig.toEmail,
      subject: `New contact form submission from ${submission.name}`,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Company: ${submission.company || 'N/A'}`,
        `Page: ${submission.pageUrl || 'N/A'}`,
        '',
        submission.message,
      ].join('\n'),
    })
  } catch (error) {
    console.error('Contact email delivery failed.', error)
    return { status: 'provider_error' }
  }

  return { status: 'sent' }
}
