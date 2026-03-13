# Navbar

The Navbar is a horizontal navigation menu component from Catalyst UI Kit for Tailwind CSS. It provides a flexible, composable structure for building top navigation bars with support for logos, links, icons, dropdowns, and responsive behavior.

## Basic Example

A simple navbar with navigation links grouped in a section.

```jsx
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'

function Example() {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## With Logo

Add a logo to the navbar using the `Link` component alongside navigation items.

```jsx
import { Link } from '@/components/link'
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'
import { Logo } from './logo'

function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSection>
        <NavbarItem href="/" current>
          Home
        </NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## With Icon Links

Use `NavbarSpacer` to push icon links to the right side. Provide `aria-label` for icon-only items.

```jsx
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Logo } from './logo'

function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## With Divider

Use `NavbarDivider` to visually separate the logo from navigation items.

```jsx
import { Navbar, NavbarDivider, NavbarItem, NavbarSection } from '@/components/navbar'
import { Logo } from './logo'

function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarDivider />
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## With Dropdown

Combine the navbar with a `Dropdown` component for team switching or account menus.

```jsx
import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { ChevronDownIcon, Cog8ToothIcon, PlusIcon } from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} aria-label="Account menu">
          <Avatar src="/tailwind-logo.svg" />
          <NavbarLabel>Tailwind Labs</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu className="min-w-64" anchor="bottom start">
          <DropdownItem href="/teams/1/settings">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/1">
            <Avatar slot="icon" src="/tailwind-logo.svg" />
            <DropdownLabel>Tailwind Labs</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="/teams/2">
            <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
            <DropdownLabel>Workcation</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/create">
            <PlusIcon />
            <DropdownLabel>New team…</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## With Avatar Dropdown

Place an avatar dropdown on the right side for user account menus.

```jsx
import { Avatar } from '@/components/avatar'
import { Dropdown, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSpacer } from '@/components/navbar'
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import { Logo } from './logo'

function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSpacer />
      <Dropdown>
        <DropdownButton as={NavbarItem} aria-label="Account menu">
          <Avatar src="/profile-photo.jpg" square />
        </DropdownButton>
        <DropdownMenu className="min-w-64" anchor="bottom end">
          <DropdownItem href="/my-profile">
            <UserIcon />
            <DropdownLabel>My profile</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="/settings">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/privacy-policy">
            <ShieldCheckIcon />
            <DropdownLabel>Privacy policy</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="/share-feedback">
            <LightBulbIcon />
            <DropdownLabel>Share feedback</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/logout">
            <ArrowRightStartOnRectangleIcon />
            <DropdownLabel>Sign out</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  )
}
```

## Hiding Items on Mobile

Use Tailwind responsive classes like `max-lg:hidden` to hide navigation items on smaller screens.

```jsx
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'
import { Logo } from './logo'

function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}
```

## Props

### Navbar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Extends JSX `<div>` element. No component-specific props. |

### NavbarSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Container for grouping navbar items. Extends JSX `<div>` element. No component-specific props. |

### NavbarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `boolean` | — | Indicates if this is the active navigation item |
| `href` | `string` | — | Target URL when used as a link |

Extends Headless UI `Button` or `Link` component.

### NavbarLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Text label component. Extends JSX `<span>` element. No component-specific props. |

### NavbarDivider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Visual separator. Extends JSX `<div>` element. No component-specific props. |

### NavbarSpacer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Spacing utility that pushes items apart. Extends JSX `<div>` element. No component-specific props. |

## Key Notes

- The `NavbarItem` component works best with 20x20 icons. Custom icons need the `data-slot="icon"` prop for proper styling.
- Recommended logo sizing: 40px on mobile, 32px at `sm` breakpoint and above (`className="size-10 sm:size-8"`).
- Always provide `aria-label` for icon-only items and dropdown triggers for accessibility.
