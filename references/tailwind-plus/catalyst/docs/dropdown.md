# Dropdown

Use the Dropdown component to create accessible dropdown menus with support for icons, descriptions, keyboard shortcuts, sections, headers, and various trigger styles.

## Basic Example

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example() {
  function deleteUser() {
    if (confirm('Are you sure you want to delete this user?')) {
      // ...
    }
  }

  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## Button Style

Use the `color` prop on `DropdownButton` to change the button style.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Dropdown>
      <DropdownButton color="cyan">
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#">View</DropdownItem>
        <DropdownItem href="#">Edit</DropdownItem>
        <DropdownItem href="#">Export as CSV...</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## Menu Placement

Use the `anchor` prop on `DropdownMenu` to position the dropdown menu.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronUpIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronUpIcon />
      </DropdownButton>
      <DropdownMenu anchor="top start">
        <DropdownItem href="#">View</DropdownItem>
        <DropdownItem href="#">Edit</DropdownItem>
        <DropdownItem href="#">Export as CSV...</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## Disabled Items

Use the `disabled` prop on individual `DropdownItem` components.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href={url}>Open</DropdownItem>
        <DropdownItem onClick={() => renameFile()} disabled>
          Rename
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Sections

Use `DropdownSection`, `DropdownHeading`, and `DropdownDivider` to organize items into groups.

```jsx
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeading,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownSection aria-label="Account">
          <DropdownItem href="/account">Account</DropdownItem>
          <DropdownItem href="/notifications">Notifications</DropdownItem>
          <DropdownItem href="/billing">Billing</DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownHeading>My events</DropdownHeading>
          <DropdownItem href="/upcoming-events">Upcoming events</DropdownItem>
          <DropdownItem href="/past-events">Past events</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Descriptions

Use `DropdownLabel` and `DropdownDescription` inside a `DropdownItem` for items with secondary text.

```jsx
import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href={url} target="_blank">
          <DropdownLabel>Open</DropdownLabel>
          <DropdownDescription>Open the file in a new tab.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownDescription>Rename the file.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownDescription>Move the file to the trash.</DropdownDescription>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Icons

Place icon components before `DropdownLabel` inside a `DropdownItem`.

```jsx
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  InformationCircleIcon,
  MoonIcon,
  UserIcon,
} from '@heroicons/react/16/solid'

function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu anchor="bottom">
        <DropdownItem href="#">
          <UserIcon />
          <DropdownLabel>Account</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="#">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="#">
          <InformationCircleIcon />
          <DropdownLabel>Help center</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <MoonIcon />
          <DropdownLabel>Dark mode</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <ArrowRightStartOnRectangleIcon />
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Keyboard Shortcuts

Use `DropdownShortcut` with the `keys` prop to display keyboard shortcuts.

```jsx
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownShortcut,
} from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu anchor="bottom start">
        <DropdownItem href={url}>
          <DropdownLabel>Open</DropdownLabel>
          <DropdownShortcut keys="⌘O" />
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownShortcut keys="⌘R" />
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownShortcut keys="⇧⌘⌫" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Header

Use `DropdownHeader` for non-interactive content at the top of the menu.

```jsx
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
} from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example({ signOut }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownHeader>
          <div className="pr-6">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Signed in as Tom Cook</div>
            <div className="text-sm/7 font-semibold text-zinc-800 dark:text-white">tom@example.com</div>
          </div>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownItem href="/my-profile">My profile</DropdownItem>
        <DropdownItem href="/notifications">Notifications</DropdownItem>
        <DropdownItem href="/security">Security</DropdownItem>
        <DropdownItem href="/billing">Billing</DropdownItem>
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Disabled Button

Use the `disabled` prop on `DropdownButton` to disable the entire dropdown trigger.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example({ deleteUser }) {
  return (
    <Dropdown>
      <DropdownButton outline disabled>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Icon Trigger

Use a `plain` button with an icon for a minimal trigger style.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'

function Example({ deleteUser }) {
  return (
    <Dropdown>
      <DropdownButton plain aria-label="More options">
        <EllipsisHorizontalIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/users/1">View</DropdownItem>
        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
        <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Avatar Trigger

Use `AvatarButton` as the trigger via the `as` prop on `DropdownButton`.

```jsx
import { AvatarButton } from '@/components/avatar'
import { Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownMenu } from '@/components/dropdown'

function Example({ currentUser, signOut }) {
  return (
    <Dropdown>
      <DropdownButton className="size-8" as={AvatarButton} src={currentUser.avatarUrl} aria-label="Account options" />
      <DropdownMenu placement="bottom">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Custom Trigger

Use the unstyled `Headless.MenuButton` for a fully custom trigger.

```jsx
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu } from '@/components/dropdown'
import * as Headless from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

function Example({ currentUser, signOut }) {
  return (
    <Dropdown>
      <Headless.MenuButton
        className="flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-active:border-zinc-200 data-hover:border-zinc-200 dark:data-active:border-zinc-700 dark:data-hover:border-zinc-700"
        aria-label="Account options"
      >
        <img className="size-10 rounded-lg" src={currentUser.avatarUrl} alt="" />
        <span className="block text-left">
          <span className="block text-sm/5 font-medium">{currentUser.name}</span>
          <span className="block text-xs/5 text-zinc-500">{currentUser.role}</span>
        </span>
        <ChevronUpDownIcon className="mr-1 ml-auto size-4 shrink-0 stroke-zinc-400" />
      </Headless.MenuButton>
      <DropdownMenu className="min-w-(--button-width)">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## With Custom Menu Width

Use `className` on `DropdownMenu` to set a custom minimum width.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-48">
        <DropdownItem href="/account">Account</DropdownItem>
        <DropdownItem href="/notifications">Notifications</DropdownItem>
        <DropdownItem href="/billing">Billing</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Dropdown` | Headless UI `<Menu>` | No component-specific props |
| `DropdownButton` | `<Button>` | `color` (default: `dark/zinc`), `outline` (default: `false`), `plain` (default: `false`), `disabled` (default: `false`) |
| `DropdownMenu` | Headless UI `<MenuItems>` | `anchor` (default: `bottom`) |
| `DropdownItem` | Headless UI `<MenuItem>` | `href`, `onClick`, `disabled` |
| `DropdownSection` | Headless UI `<MenuSection>` | No component-specific props |
| `DropdownHeading` | Headless UI `<MenuHeading>` | No component-specific props |
| `DropdownDivider` | Headless UI `<MenuSeparator>` | No component-specific props |
| `DropdownLabel` | Headless UI `<Label>` | No component-specific props |
| `DropdownDescription` | Headless UI `<Description>` | No component-specific props |
| `DropdownShortcut` | Headless UI `<Description>` | `keys` - keyboard shortcut string |
| `DropdownHeader` | `<div>` | No component-specific props |
