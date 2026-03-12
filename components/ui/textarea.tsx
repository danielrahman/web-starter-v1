import type { TextareaHTMLAttributes } from 'react'

import { getFormControlClassName } from './form-control-styles'

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={getFormControlClassName(className, 'min-h-36 py-2')} {...props} />
}
