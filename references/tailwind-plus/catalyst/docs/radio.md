# Radio

Radio buttons allow users to select a single option from a set of mutually exclusive choices. The Catalyst radio components are built on Headless UI and support labels, descriptions, color variants, fieldsets, and disabled states.

## Basic Example

A simple radio group with two options using `RadioField` wrappers for label association.

```jsx
import { Label } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'

function Example() {
  return (
    <RadioGroup name="resale" defaultValue="permit" aria-label="Resale and transfers">
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don't allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  )
}
```

## With Description

Add a `Description` component inside `RadioField` to provide additional context for each option.

```jsx
import { Description, Label } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'

function Example() {
  return (
    <RadioGroup name="resale" defaultValue="permit" aria-label="Resale and transfers">
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
        <Description>Customers can resell or transfer their tickets if they can't make it to the event.</Description>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don't allow tickets to be resold</Label>
        <Description>Tickets cannot be resold or transferred to another person.</Description>
      </RadioField>
    </RadioGroup>
  )
}
```

## With Custom Layout

Use Headless UI primitives directly for custom layouts like a horizontal rating scale.

```jsx
import { Radio } from '@/components/radio'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Fieldset>
      <Headless.Legend className="text-base/6 font-medium sm:text-sm/6">
        How would you rate your experience?
      </Headless.Legend>
      <Headless.RadioGroup name="rating" defaultValue={3} className="mt-4 flex gap-6 sm:gap-8">
        {[1, 2, 3, 4, 5].map((rating) => (
          <Headless.Field key={rating} className="flex items-center gap-2">
            <Radio value={rating} />
            <Headless.Label className="text-base/6 select-none sm:text-sm/6">{rating}</Headless.Label>
          </Headless.Field>
        ))}
      </Headless.RadioGroup>
    </Headless.Fieldset>
  )
}
```

## With Accent Color

Use the `color` prop on `Radio` to change the accent color.

```jsx
import { Label } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'

function Example() {
  return (
    <RadioGroup name="resale" defaultValue="permit" aria-label="Resale and transfers">
      <RadioField>
        <Radio color="sky" value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio color="sky" value="forbid" />
        <Label>Don't allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  )
}
```

## Controlled Component

Use `value` and `onChange` for controlled state management.

```jsx
import { Label } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'
import { useState } from 'react'

function Example() {
  let [selected, setSelected] = useState('permit')

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don't allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  )
}
```

## With Fieldset

Wrap radio groups in a `Fieldset` with `Legend` and `Text` for a complete form section.

```jsx
import { Description, Fieldset, Label, Legend } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'
import { Text } from '@/components/text'

function Example() {
  return (
    <Fieldset>
      <Legend>Resale and transfers</Legend>
      <Text>Decide if people buy tickets from you or from scalpers.</Text>
      <RadioGroup name="resale" defaultValue="permit">
        <RadioField>
          <Radio value="permit" />
          <Label>Allow tickets to be resold</Label>
          <Description>Customers can resell or transfer their tickets if they can't make it to the event.</Description>
        </RadioField>
        <RadioField>
          <Radio value="forbid" />
          <Label>Don't allow tickets to be resold</Label>
          <Description>Tickets cannot be resold or transferred to another person.</Description>
        </RadioField>
      </RadioGroup>
    </Fieldset>
  )
}
```

## Disabled State

Use the `disabled` prop on `RadioField` to disable individual options.

```jsx
import { Description, Fieldset, Label, Legend } from '@/components/fieldset'
import { Radio, RadioField, RadioGroup } from '@/components/radio'
import { Text } from '@/components/text'

function Example() {
  return (
    <Fieldset>
      <Legend>Resale and transfers</Legend>
      <Text>Decide if people buy tickets from you or from scalpers.</Text>
      <RadioGroup name="resale" defaultValue="permit">
        <RadioField>
          <Radio value="permit" />
          <Label>Allow tickets to be resold</Label>
          <Description>Customers can resell or transfer their tickets if they can't make it to the event.</Description>
        </RadioField>
        <RadioField disabled>
          <Radio value="forbid" />
          <Label>Don't allow tickets to be resold</Label>
          <Description>Tickets cannot be resold or transferred to another person.</Description>
        </RadioField>
      </RadioGroup>
    </Fieldset>
  )
}
```

## Color Variants

The `Radio` component supports a `color` prop with the following options:

**Adaptive colors** (change between light/dark modes):
- `dark/zinc` (default)
- `dark/white`

**Solid colors:**
`dark`, `zinc`, `white`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## Props

### RadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether to disable the entire list |
| `name` | `string` | — | The name to use when submitting an HTML form |
| `defaultValue` | `any` | — | The initially selected value |
| `value` | `any` | — | The controlled value of the radio group |
| `onChange` | `function` | — | Handler to call when the state changes |

Extends Headless UI `<RadioGroup>` component.

### Radio

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `"dark/zinc"` | The color variant the radio should use |
| `disabled` | `boolean` | `false` | Whether to disable the radio |
| `value` | `any` | — | The value to use when submitting an HTML form |

Extends Headless UI `<Radio>` component.

### RadioField

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether to disable the entire field |

Extends Headless UI `<Field>` component.

### Label

No component-specific props. Extends Headless UI `<Label>` component.

### Description

No component-specific props. Extends Headless UI `<Description>` component.
