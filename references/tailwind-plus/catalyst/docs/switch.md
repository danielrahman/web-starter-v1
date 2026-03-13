# Switch

The Switch component is a toggle control built on Headless UI's Switch component. It supports labels, descriptions, color variants, controlled and uncontrolled usage, disabled states, and grouping multiple switches together.

## Basic Standalone Switch

A standalone switch with an `aria-label` for accessibility.

```jsx
import { Switch } from '@/components/switch'

function Example() {
  return <Switch aria-label="Allow embedding" name="allow_embedding" />
}
```

## With Label

Wrap the switch in a `SwitchField` with a `Label` for automatic association.

```jsx
import { Label } from '@/components/fieldset'
import { Switch, SwitchField } from '@/components/switch'

function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  )
}
```

## With Description

Add a `Description` component for additional context about the switch.

```jsx
import { Description, Label } from '@/components/fieldset'
import { Switch, SwitchField } from '@/components/switch'

function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Description>Allow others to embed your event details on their own site.</Description>
      <Switch name="allow_embedding" />
    </SwitchField>
  )
}
```

## Custom Layout

Use the unstyled Headless UI `Field` for custom layouts like inline placement.

```jsx
import { Label } from '@/components/fieldset'
import { Switch } from '@/components/switch'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Field className="flex items-center gap-4">
      <Switch name="allow_embedding" />
      <Label>Allow embedding</Label>
    </Headless.Field>
  )
}
```

## Custom Color Variant

Use the `color` prop to change the accent color of the switch when toggled on.

```jsx
import { Switch } from '@/components/switch'

function Example() {
  return <Switch color="sky" defaultChecked />
}
```

## Custom Form Value

Use the `value` prop to set a custom form submission value.

```jsx
import { Switch } from '@/components/switch'

function Example() {
  return <Switch name="embed" value="allow" />
}
```

## Default Checked State

Use `defaultChecked` to set the initial state of an uncontrolled switch.

```jsx
import { Switch } from '@/components/switch'

function Example() {
  return <Switch defaultChecked />
}
```

## Controlled Component

Use `checked` and `onChange` for controlled state management.

```jsx
import { Switch } from '@/components/switch'
import { useState } from 'react'

function Example() {
  let [checked, setChecked] = useState(true)
  return <Switch checked={checked} onChange={setChecked} />
}
```

## Multiple Switches

Use `SwitchGroup` to group related switches together.

```jsx
import { Description, Label } from '@/components/fieldset'
import { Switch, SwitchField, SwitchGroup } from '@/components/switch'

function Example() {
  return (
    <SwitchGroup>
      <SwitchField>
        <Label>Show on events page</Label>
        <Description>Make this event visible on your profile.</Description>
        <Switch name="show_on_events_page" defaultChecked />
      </SwitchField>
      <SwitchField>
        <Label>Allow embedding</Label>
        <Description>Allow others to embed your event details on their own site.</Description>
        <Switch name="allow_embedding" />
      </SwitchField>
    </SwitchGroup>
  )
}
```

## With Fieldset

Wrap switch groups in a `Fieldset` with `Legend` and `Text` for a complete form section.

```jsx
import { Description, Fieldset, Label, Legend } from '@/components/fieldset'
import { Switch, SwitchField, SwitchGroup } from '@/components/switch'
import { Text } from '@/components/text'

function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <SwitchGroup>
        <SwitchField>
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
          <Switch name="show_on_events_page" defaultChecked />
        </SwitchField>
        <SwitchField>
          <Label>Allow embedding</Label>
          <Description>Allow others to embed your event details on their own site.</Description>
          <Switch name="allow_embedding" />
        </SwitchField>
      </SwitchGroup>
    </Fieldset>
  )
}
```

## Disabled State

Use the `disabled` prop on `SwitchField` to disable individual switches.

```jsx
import { Description, Fieldset, Label, Legend } from '@/components/fieldset'
import { Switch, SwitchField, SwitchGroup } from '@/components/switch'
import { Text } from '@/components/text'

function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <SwitchGroup>
        <SwitchField>
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
          <Switch name="discoverability" value="show_on_events_page" />
        </SwitchField>
        <SwitchField disabled>
          <Label>Allow embedding</Label>
          <Description>Allow others to embed your event details on their own site.</Description>
          <Switch name="discoverability" value="allow_embedding" />
        </SwitchField>
      </SwitchGroup>
    </Fieldset>
  )
}
```

## Color Variants

The `Switch` component supports a `color` prop with the following options:

**Adaptive colors** (change between light/dark modes):
- `dark/zinc` (default)
- `dark/white`

**Solid colors:**
`dark`, `zinc`, `white`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## Props

### Switch

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `"dark/zinc"` | Color variant for the switch |
| `disabled` | `boolean` | `false` | Disables the switch |
| `name` | `string` | — | Name for HTML form submission |
| `value` | `string` | — | Value for HTML form submission |
| `defaultChecked` | `boolean` | — | Initial uncontrolled state |
| `checked` | `boolean` | — | Controlled state value |
| `onChange` | `function` | — | State change handler |

Extends Headless UI `<Switch>` component.

### SwitchField

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables entire field |

Extends Headless UI `<Field>` component.

### SwitchGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. Extends JSX `<div>` element. |

### Label

No component-specific props. Extends Headless UI `<Label>` component.

### Description

No component-specific props. Extends Headless UI `<Description>` component.
