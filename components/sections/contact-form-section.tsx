'use client'

import { FormEvent, useState } from 'react'
import { usePathname } from 'next/navigation'

import { Button, Input, Lead, Section, Textarea } from '@/components/ui'

type ContactFormSectionProps = {
  id: string
  title: string
  body?: string
  submitLabel?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactFormSection({ id, title, body, submitLabel = 'Submit' }: ContactFormSectionProps) {
  const pathname = usePathname()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const formData = new FormData(event.currentTarget)

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
      honey: String(formData.get('honey') || ''),
      pageUrl: typeof window !== 'undefined' ? `${window.location.origin}${pathname}` : undefined,
    }

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string }
        throw new Error(data.error || 'Unable to submit form')
      }

      setStatus('success')
      setMessage('Thanks. Your message has been received.')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to submit form')
    }
  }

  return (
    <Section id={id}>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--color-text)] md:text-4xl">{title}</h2>
          {body ? <Lead>{body}</Lead> : null}
        </div>

        <form className="surface-card space-y-4 p-7" onSubmit={onSubmit}>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--color-text)]">Name</span>
            <Input name="name" required />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--color-text)]">Email</span>
            <Input name="email" required type="email" />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--color-text)]">Company</span>
            <Input name="company" />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--color-text)]">Message</span>
            <Textarea name="message" required />
          </label>

          <label className="hidden" htmlFor="honey">
            Leave this field empty
            <input autoComplete="off" id="honey" name="honey" tabIndex={-1} type="text" />
          </label>

          <Button disabled={status === 'submitting'} type="submit">
            {status === 'submitting' ? 'Sending...' : submitLabel}
          </Button>

          {message ? (
            <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-[var(--color-text-muted)]'}`}>{message}</p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
