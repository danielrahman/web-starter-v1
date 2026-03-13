# Select

The Select component provides a styled dropdown select input built on Headless UI. It supports labels, descriptions, validation errors, disabled states, custom layouts, and controlled usage.

## Basic Standalone Select

A standalone select with an `aria-label` for accessibility when no visible label is present.

```jsx
import { Select } from '@/components/select'

function Example() {
  return (
    <Select aria-label="Project status" name="status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  )
}
```

## With Label

Wrap the select in a `Field` with a `Label` for automatic ID generation and accessibility association.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'

function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  )
}
```

## With Description

Add a `Description` component to provide additional context below the label.

```jsx
import { Description, Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'

function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Description>This will be visible to clients on the project.</Description>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  )
}
```

## Disabled State

Set `disabled` on the `Field` component to disable the entire field including label and select.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'

function Example() {
  return (
    <Field disabled>
      <Label>Project status</Label>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  )
}
```

## Validation Errors

Use the `invalid` prop to indicate validation errors and `ErrorMessage` for feedback text.

```jsx
import { ErrorMessage, Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'

function Example({ errors }) {
  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status" defaultValue="" invalid={errors.has('status')}>
        <option value="" disabled>Select a status…</option>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
      {errors.has('status') && <ErrorMessage>{errors.get('status')}</ErrorMessage>}
    </Field>
  )
}
```

## Width Constraint

Use the `className` prop to constrain the width of the select.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'

function Example() {
  return (
    <Field>
      <Label>Day of the week</Label>
      <Select className="max-w-40" name="day_of_the_week">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </Select>
    </Field>
  )
}
```

## Custom Layout

Use the unstyled Headless UI `Field` directly for custom layouts like inline label/select pairs.

```jsx
import { Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Field className="flex items-baseline justify-center gap-6">
      <Label>Project status</Label>
      <Select name="status" className="max-w-48">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Headless.Field>
  )
}
```

## Controlled Component

Use `value` and `onChange` for controlled state management.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import { useState } from 'react'

function Example() {
  let [status, setStatus] = useState('active')

  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  )
}
```

## Props

### Select

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables the select |
| `invalid` | `boolean` | `false` | Indicates a validation error |
| `name` | `string` | — | Form submission name |
| `defaultValue` | `string` | — | Initial selected value |
| `value` | `string` | — | Controlled component value |
| `onChange` | `function` | — | Handler for value changes |

Extends Headless UI `<Select>` component.

### Field

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables entire field group |

Extends Headless UI `<Field>` component.

### Label

No component-specific props. Extends Headless UI `<Label>` component.

### Description

No component-specific props. Extends Headless UI `<Description>` component.

### ErrorMessage

No component-specific props. Extends Headless UI `<Description>` component (used for validation feedback).
