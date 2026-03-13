# Listbox

A painstakingly re-engineered select menu, just so you can put a flag in it or have a placeholder.

## Basic Example

Use the `Listbox`, `ListboxOption`, and `ListboxLabel` components with `aria-label` for accessibility.

```jsx
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Listbox name="status" defaultValue="active" aria-label="Project status">
      <ListboxOption value="active">
        <ListboxLabel>Active</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="paused">
        <ListboxLabel>Paused</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="delayed">
        <ListboxLabel>Delayed</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="canceled">
        <ListboxLabel>Canceled</ListboxLabel>
      </ListboxOption>
    </Listbox>
  )
}
```

## With Label

Wrap `Label` and `Listbox` within a `Field` for automatic ID association.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Listbox name="status" defaultValue="active">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## With Description

Use the `Description` component for helper text below the label.

```jsx
import { Description, Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Description>This will be visible to clients on the project.</Description>
      <Listbox name="status" defaultValue="active">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## With Placeholder

Use the `placeholder` prop to display text when no option is selected.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Field>
      <Label>Project status</Label>
      <Listbox name="status" placeholder="Select status...">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## With Avatars

Insert `Avatar` component before `ListboxLabel` within options.

```jsx
import { Avatar } from '@/components/avatar'
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example({ users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Listbox name="user">
        {users.map((user) => (
          <ListboxOption key={user.id} value={user}>
            <Avatar src={user.avatarUrl} initials={user.initials}
              className="bg-purple-500 text-white" alt="" />
            <ListboxLabel>{user.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  )
}
```

## With Icons

Place icon components before `ListboxLabel` inside options. Works best with 16x16 icons.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3Icon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Field>
      <Label>Alignment</Label>
      <Listbox name="alignment" defaultValue="left">
        <ListboxOption value="left">
          <Bars3BottomLeftIcon />
          <ListboxLabel>Left</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="right">
          <Bars3BottomRightIcon />
          <ListboxLabel>Right</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="justified">
          <Bars3Icon />
          <ListboxLabel>Justified</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## With Flags

Place flag icons before `ListboxLabel`. Flag icons recommended: 16x12 from Flagpack.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'
import { Flag } from '@/flags'

function Example({ currentCountry, countries }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Listbox name="user" defaultValue={currentCountry}>
        {countries.map((country) => (
          <ListboxOption value={country.code} key={country.code}>
            <Flag className="w-5 sm:w-4" code={country.code} />
            <ListboxLabel>{country.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  )
}
```

## With Secondary Text

Use `ListboxDescription` for additional option details.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxDescription, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example({ users }) {
  return (
    <Field>
      <Label>User</Label>
      <Listbox name="user">
        {users.map((user) => (
          <ListboxOption key={user.id} value={user}>
            <ListboxLabel>{user.name}</ListboxLabel>
            <ListboxDescription>@{user.handle}</ListboxDescription>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  )
}
```

## Disabled State

Add the `disabled` prop to the `Field` component to disable the entire field.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Field disabled>
      <Label>Project status</Label>
      <Listbox name="status" defaultValue="delayed">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## Validation Errors

Set the `invalid` prop on `Listbox` and use `ErrorMessage` to display validation errors.

```jsx
import { ErrorMessage, Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example({ errors }) {
  return (
    <Field invalid>
      <Label>Project status</Label>
      <Listbox name="status" placeholder="Select status..."
        invalid={errors.has('status')}>
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
      {errors.has('status') &&
        <ErrorMessage>{errors.get('status')}</ErrorMessage>}
    </Field>
  )
}
```

## Constraining Width

Use `className` with a max-width utility to constrain the listbox width.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'

function Example() {
  return (
    <Field>
      <Label>Day of the week</Label>
      <Listbox className="max-w-40" name="day_of_the_week"
        defaultValue="Monday">
        <ListboxOption value="Monday">
          <ListboxLabel>Monday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Tuesday">
          <ListboxLabel>Tuesday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Wednesday">
          <ListboxLabel>Wednesday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Thursday">
          <ListboxLabel>Thursday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Friday">
          <ListboxLabel>Friday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Saturday">
          <ListboxLabel>Saturday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Sunday">
          <ListboxLabel>Sunday</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## With Custom Layout

Use the unstyled `Field` component from `@headlessui/react` directly for a fully custom layout.

```jsx
import { Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'
import * as Headless from '@headlessui/react'

function Example() {
  return (
    <Headless.Field className="flex items-baseline justify-center gap-6">
      <Label>Project status</Label>
      <Listbox name="status" defaultValue="active" className="max-w-48">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Headless.Field>
  )
}
```

## Controlled Component

Manage the listbox state via `value` and `onChange` props using `useState`.

```jsx
import { Field, Label } from '@/components/fieldset'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'
import { useState } from 'react'

function Example() {
  let [status, setStatus] = useState('active')

  return (
    <Field>
      <Label>Project status</Label>
      <Listbox name="status" value={status} onChange={setStatus}>
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  )
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Listbox` | Headless UI `<Listbox>` | `disabled` (default: `false`), `invalid` (default: `false`), `name`, `defaultValue`, `value`, `onChange`, `placeholder` |
| `ListboxOption` | Headless UI `<ListboxOption>` | `value` |
| `ListboxLabel` | `<span>` | No component-specific props |
| `ListboxDescription` | `<span>` | No component-specific props |
| `Field` | Headless UI `<Field>` | `disabled` (default: `false`) |
| `Label` | Headless UI `<Label>` | No component-specific props |
| `Description` | Headless UI `<Description>` | No component-specific props |
| `ErrorMessage` | Headless UI `<Description>` | No component-specific props |
