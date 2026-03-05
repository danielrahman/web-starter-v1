import 'server-only'

import { Resend } from 'resend'

import { resendConfig } from '@/lib/env'
import type { ContactSubmission } from '@/lib/content/models'

export async function sendContactEmail(submission: ContactSubmission): Promise<boolean> {
  if (!resendConfig.apiKey || !resendConfig.fromEmail || !resendConfig.toEmail) {
    return false
  }

  const resend = new Resend(resendConfig.apiKey)

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

  return true
}
