'use client'

import { FieldLabel, useField } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'

const swatchStyle = {
  appearance: 'none',
  background: 'transparent',
  border: '1px solid var(--theme-elevation-150)',
  borderRadius: '0.75rem',
  cursor: 'pointer',
  height: '2.75rem',
  overflow: 'hidden',
  padding: '0.25rem',
  width: '3.5rem',
} as const

export const ColorPickerField: TextFieldClientComponent = ({ field, path, readOnly }) => {
  const { errorMessage, setValue, showError, value } = useField<string>({ path })
  const description = typeof field.admin?.description === 'string' ? field.admin.description : undefined
  const inputId = `field-${path.replaceAll('.', '__')}`
  const disabled = readOnly || field.admin?.disabled
  const textValue = typeof value === 'string' ? value : ''
  const swatchValue = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(textValue) ? textValue : '#0f766e'

  return (
    <div style={{ display: 'grid', gap: '0.5rem' }}>
      <FieldLabel htmlFor={inputId} label={field.label} required={field.required} />
      <div style={{ alignItems: 'center', display: 'grid', gap: '0.75rem', gridTemplateColumns: 'auto 1fr' }}>
        <input
          aria-label={typeof field.label === 'string' ? field.label : 'Color picker'}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value.toLowerCase())}
          style={swatchStyle}
          type="color"
          value={swatchValue}
        />
        <input
          disabled={disabled}
          id={inputId}
          onChange={(event) => setValue(event.target.value)}
          placeholder="#0f766e"
          style={{
            background: 'var(--theme-input-bg)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '0.75rem',
            color: 'var(--theme-text)',
            font: 'inherit',
            minHeight: '2.75rem',
            padding: '0.75rem 0.875rem',
            width: '100%',
          }}
          type="text"
          value={textValue}
        />
      </div>
      {description ? (
        <p style={{ color: 'var(--theme-elevation-500)', fontSize: '0.8125rem', margin: 0 }}>{description}</p>
      ) : null}
      {showError && errorMessage ? (
        <p style={{ color: 'var(--theme-error-500)', fontSize: '0.8125rem', margin: 0 }}>{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default ColorPickerField
