# Input

If web applications didn't need inputs, computers wouldn't have keyboards. The Input component extends Headless UI's `<Input>` element.

## Basic Example

Use the `Input` component standalone with an `aria-label` for accessibility.

```jsx
import { Input } from '@/components/input'

function Example() {
  return <Input aria-label="Full name" name="full_name" />
}
```

## With Label

Wrap `Label` and `Input` within a `Field` for automatic ID association.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example() {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  )
}
```

## With Description

Add a `Description` component for helper text.

```jsx
import { Description, Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example() {
  return (
    <Field>
      <Label>Product name</Label>
      <Description>Use the name you'd like people to see in their cart.</Description>
      <Input name="product_name" />
    </Field>
  )
}
```

## With Icon

Use `InputGroup` to add an icon to the input. Works best with 16x16 icons. Use `data-slot="icon"` for custom icons.

```jsx
import { Input, InputGroup } from '@/components/input'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input name="search" placeholder="Search..." aria-label="Search" />
    </InputGroup>
  )
}
```

## Setting the Type

Use the `type` prop to set the input type. Supported types: `email`, `number`, `password`, `search`, `tel`, `text`, `url`, `date`, `datetime-local`, `month`, `time`, `week`.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  )
}
```

## Disabled State

Add the `disabled` prop to the `Field` component to disable the entire field, or add `disabled` directly to the `Input`.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  )
}
```

## Validation Errors

Set the `invalid` prop on `Input` and use `ErrorMessage` to display validation errors.

```jsx
import { ErrorMessage, Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example({ errors }) {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" invalid={errors.has('full_name')} />
      {errors.has('full_name') && <ErrorMessage>{errors.get('full_name')}</ErrorMessage>}
    </Field>
  )
}
```

## Constraining Width

Use `className` with a max-width utility to constrain the input width.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'

function Example() {
  return (
    <Field>
      <Label>CVC</Label>
      <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
    </Field>
  )
}
```

## With Custom Layout

Use the unstyled `Field` component from `@headlessui/react` directly for a fully custom layout. This maintains accessibility features like ID generation and `aria-*` attributes.

```jsx
import { Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Field className="flex items-center justify-center gap-6">
      <Label>Full name</Label>
      <Input name="full_name" className="max-w-48" />
    </Headless.Field>
  )
}
```

## Controlled Component

Manage the input state via `value` and `onChange` props using `useState`.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { useState } from 'react'

function Example() {
  let [name, setName] = useState('')

  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" value={name} onChange={(e) => setName(e.target.value)} />
    </Field>
  )
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Input` | Headless UI `<Input>` | `disabled` (default: `false`), `invalid` (default: `false`), `name`, `defaultValue`, `value`, `onChange` |
| `InputGroup` | `<span>` | No component-specific props |
| `Field` | Headless UI `<Field>` | `disabled` (default: `false`) |
| `Label` | Headless UI `<Label>` | No component-specific props |
| `Description` | Headless UI `<Description>` | No component-specific props |
| `ErrorMessage` | Headless UI `<Description>` | No component-specific props |
