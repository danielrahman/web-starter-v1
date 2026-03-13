# Textarea

The Textarea component provides a styled multi-line text input built on Headless UI. It supports labels, descriptions, validation errors, disabled states, custom layouts, controlled usage, and configurable resizing.

## Basic Standalone Textarea

A standalone textarea with an `aria-label` for accessibility when no visible label is present.

```jsx
import { Textarea } from '@/components/textarea'

function Example() {
  return <Textarea aria-label="Description" name="description" />
}
```

## With Label

Wrap the textarea in a `Field` with a `Label` for automatic ID generation and accessibility association.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'

function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  )
}
```

## With Description

Add a `Description` component to provide additional context below the label.

```jsx
import { Description, Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'

function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>This will be shown under the product title.</Description>
      <Textarea name="name" />
    </Field>
  )
}
```

## Disabled State

Set `disabled` on the `Field` component to disable the entire field.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'

function Example() {
  return (
    <Field disabled>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  )
}
```

## Validation Errors

Use the `invalid` prop to indicate validation errors and `ErrorMessage` for feedback text.

```jsx
import { ErrorMessage, Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'

function Example({ errors }) {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" invalid={errors.has('description')} />
      {errors.has('description') && <ErrorMessage>{errors.get('description')}</ErrorMessage>}
    </Field>
  )
}
```

## Custom Layout

Use the unstyled Headless UI `Field` for custom layouts like side-by-side label and textarea.

```jsx
import { Description, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Field className="grid grid-cols-12 gap-6">
      <div className="col-span-5">
        <Label>Description</Label>
        <Description className="mt-1">This will be shown under the product title.</Description>
      </div>
      <div className="col-span-7">
        <Textarea name="description" rows="3" />
      </div>
    </Headless.Field>
  )
}
```

## Controlled Component

Use `value` and `onChange` for controlled state management.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { useState } from 'react'

function Example() {
  let [name, setName] = useState('')

  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" value={name} onChange={(e) => setName(e.target.value)} />
    </Field>
  )
}
```

## Props

### Textarea

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable the textarea input |
| `invalid` | `boolean` | `false` | Indicate a validation error state |
| `resizable` | `boolean` | `true` | Allow vertical resizing |
| `name` | `string` | — | Form submission name attribute |
| `defaultValue` | `string` | — | Initial textarea value |
| `value` | `string` | — | Controlled component value |
| `onChange` | `function` | — | Handler for value changes |
| `rows` | `number` | — | Number of visible text lines |

Extends Headless UI textarea element.

### Field

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable entire field and associated label |

Extends Headless UI `<Field>` component.

### Label

No component-specific props. Extends Headless UI `<Label>` component.

### Description

No component-specific props. Extends Headless UI `<Description>` component.

### ErrorMessage

No component-specific props. Extends Headless UI `<Description>` component (used for validation feedback).
