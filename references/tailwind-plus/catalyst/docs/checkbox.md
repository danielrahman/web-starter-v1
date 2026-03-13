# Checkbox

The Checkbox component provides customizable checkboxes with support for labels, descriptions, groups, and multiple color variants.

## Core Components

- **Checkbox** - Base component extending Headless UI
- **CheckboxField** - Wrapper for field layout with label
- **CheckboxGroup** - Container for multiple checkboxes
- **Label** - Associated text label
- **Description** - Helper text for the checkbox

## Basic Standalone

```jsx
import { Checkbox } from '@/components/checkbox'

<Checkbox aria-label="Accept terms" />
```

## With Label

```jsx
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Label } from '@/components/fieldset'

<CheckboxField>
  <Checkbox name="remember" />
  <Label>Remember me</Label>
</CheckboxField>
```

## With Description

```jsx
<CheckboxField>
  <Checkbox name="notifications" />
  <Label>Email notifications</Label>
  <Description>Get notified when someone posts a comment.</Description>
</CheckboxField>
```

## Color Customization

```jsx
<Checkbox color="sky" defaultChecked />
```

## Indeterminate State

Used for "select all" patterns supporting partial selection:

```jsx
<Checkbox indeterminate />
```

## Controlled Component

```jsx
function Example() {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={setChecked} />
}
```

## Multiple Checkboxes with CheckboxGroup

```jsx
<CheckboxGroup>
  <CheckboxField>
    <Checkbox name="option1" />
    <Label>Option 1</Label>
  </CheckboxField>
  <CheckboxField>
    <Checkbox name="option2" />
    <Label>Option 2</Label>
  </CheckboxField>
</CheckboxGroup>
```

## With Fieldset

```jsx
import { Fieldset, Legend, Text } from '@/components/fieldset'

<Fieldset>
  <Legend>Notifications</Legend>
  <Text>Choose which notifications you want to receive.</Text>
  <CheckboxGroup>
    <CheckboxField>
      <Checkbox name="email" />
      <Label>Email</Label>
    </CheckboxField>
    <CheckboxField>
      <Checkbox name="sms" />
      <Label>SMS</Label>
    </CheckboxField>
  </CheckboxGroup>
</Fieldset>
```

## Disabled State

```jsx
<Checkbox disabled />
```

## Available Colors

### Adaptive

- `dark/zinc` (default)
- `dark/white`

### Solid (20 variants)

- `dark`
- `zinc`
- `white`
- `red`
- `orange`
- `amber`
- `yellow`
- `lime`
- `green`
- `emerald`
- `teal`
- `cyan`
- `sky`
- `blue`
- `indigo`
- `violet`
- `purple`
- `fuchsia`
- `pink`
- `rose`

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `color` | `dark/zinc` | Visual color variant |
| `disabled` | `false` | Disable interaction |
| `name` | -- | Form submission identifier |
| `value` | -- | Form data value |
| `defaultChecked` | -- | Initial uncontrolled state |
| `checked` | -- | Controlled checked state |
| `onChange` | -- | State change handler |
| `indeterminate` | -- | Partial selection state |
