# Combobox

For when you know exactly what you want, but are too lazy to scroll for it. The Combobox component extends Headless UI's `<Combobox>` with built-in filtering, search input, and option rendering.

## Basic Example

Use the `Combobox`, `ComboboxOption`, and `ComboboxLabel` components with `aria-label` for accessibility.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'

function Example({ currentUser, users }) {
  return (
    <Combobox
      name="user"
      options={users}
      displayValue={(user) => user?.name}
      defaultValue={currentUser}
      aria-label="Assigned to"
    >
      {(user) => (
        <ComboboxOption value={user}>
          <ComboboxLabel>{user.name}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  )
}
```

## With Label

Wrap `Label` and `Combobox` within a `Field` for automatic ID association.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Description

Add a `Description` component for helper text.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Description, Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Description>This user will have full access to the project.</Description>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Placeholder

Use the `placeholder` prop to display text when no option is selected.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} placeholder="Select user...">
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Avatars

Insert `Avatar` component before `ComboboxLabel` within options.

```jsx
import { Avatar } from '@/components/avatar'
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <Avatar src={user.avatarUrl} initials={user.initials} className="bg-purple-500 text-white" alt="" />
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Flags

Place flag icons before `ComboboxLabel`. Flag icons recommended: 16x12 from Flagpack.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'
import { Flag } from '@/flags'

function Example({ currentCountry, countries }) {
  return (
    <Field>
      <Label>Country</Label>
      <Combobox
        name="country"
        options={countries}
        displayValue={(country) => country?.name}
        defaultValue={currentCountry}
      >
        {(country) => (
          <ComboboxOption value={country}>
            <Flag className="w-5 sm:w-4" code={country.code} />
            <ComboboxLabel>{country.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Secondary Text

Use `ComboboxDescription` for additional option details.

```jsx
import { Combobox, ComboboxDescription, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
            <ComboboxDescription>{user.role}</ComboboxDescription>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## Disabled State

Add the `disabled` prop to the `Field` component to disable the entire field.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field disabled>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## Validation Errors

Set the `invalid` prop on `Combobox` and use `ErrorMessage` to display validation errors.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { ErrorMessage, Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox
        invalid
        name="user"
        options={users}
        displayValue={(user) => user?.name}
        placeholder="Select user..."
      >
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
      <ErrorMessage>A user is required.</ErrorMessage>
    </Field>
  )
}
```

## Constraining Width

Use `className` with a max-width utility to constrain the combobox width.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentCurrency, currencies }) {
  return (
    <Field>
      <Label>Currency</Label>
      <Combobox
        className="max-w-40"
        name="currency"
        options={currencies}
        displayValue={(currency) => currency?.code}
        defaultValue={currentCurrency}
      >
        {(currency) => (
          <ComboboxOption value={currency}>
            <ComboboxLabel>{currency.code}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Custom Layout

Use the unstyled `Field` component from `@headlessui/react` directly for a fully custom layout.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Label } from '@/components/fieldset'
import * as Headless from '@headlessui/react'

function Example({ currentUser, users }) {
  return (
    <Headless.Field className="flex grow items-baseline justify-center gap-6">
      <Label>Assigned to</Label>
      <Combobox
        name="user"
        options={users}
        displayValue={(user) => user?.name}
        defaultValue={currentUser}
        className="max-w-48"
      >
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Headless.Field>
  )
}
```

## Controlled Component

Manage the combobox state via `value` and `onChange` props using `useState`.

```jsx
import { Combobox, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'
import { useState } from 'react'

function Example({ currentUser, users }) {
  let [user, setUser] = useState(currentUser)

  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox name="user" options={users} displayValue={(user) => user?.name} value={user} onChange={setUser}>
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## With Custom Filtering

Use the `filter` prop to implement custom filtering logic beyond default name matching.

```jsx
import { Combobox, ComboboxDescription, ComboboxLabel, ComboboxOption } from '@/components/combobox'
import { Field, Label } from '@/components/fieldset'

function Example({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Combobox
        name="user"
        options={users}
        displayValue={(user) => user?.name}
        defaultValue={currentUser}
        filter={(user, query) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          `@${user.handle}`.toLowerCase().includes(query.toLowerCase())
        }
      >
        {(user) => (
          <ComboboxOption value={user}>
            <ComboboxLabel>{user.name}</ComboboxLabel>
            <ComboboxDescription>@{user.handle}</ComboboxDescription>
          </ComboboxOption>
        )}
      </Combobox>
    </Field>
  )
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Combobox` | Headless UI `<Combobox>` | `disabled` (default: `false`), `invalid` (default: `false`), `anchor` (default: `bottom`), `name`, `options`, `filter`, `displayValue`, `defaultValue`, `value`, `onChange`, `placeholder` |
| `ComboboxOption` | Headless UI `<ComboboxOption>` | `value` |
| `ComboboxLabel` | `<span>` | No component-specific props |
| `ComboboxDescription` | `<span>` | No component-specific props |
| `Field` | Headless UI `<Field>` | `disabled` (default: `false`) |
| `Label` | Headless UI `<Label>` | No component-specific props |
| `Description` | Headless UI `<Description>` | No component-specific props |
| `ErrorMessage` | Headless UI `<Description>` | No component-specific props |
