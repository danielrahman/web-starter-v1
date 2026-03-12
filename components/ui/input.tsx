import type { InputHTMLAttributes } from 'react'

import { getFormControlClassName } from './form-control-styles'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={getFormControlClassName(className, 'h-11')} {...props} />
}
