# Sidebar

The Sidebar component provides vertical navigation for application layouts. It supports logos, icons, active states, sticky headers/footers, section headings, dividers, spacers, and dropdown menus.

## Basic Example

A simple sidebar with navigation links.

```jsx
import { Sidebar, SidebarBody, SidebarItem, SidebarSection } from '@/components/sidebar'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">Home</SidebarItem>
          <SidebarItem href="/events">Events</SidebarItem>
          <SidebarItem href="/orders">Orders</SidebarItem>
          <SidebarItem href="/broadcasts">Broadcasts</SidebarItem>
          <SidebarItem href="/settings">Settings</SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Logo

Add a logo above the navigation items.

```jsx
import { Link } from '@/components/link'
import { Sidebar, SidebarBody, SidebarItem, SidebarSection } from '@/components/sidebar'
import { Logo } from './logo'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <div className="mb-2 flex">
          <Link href="#" aria-label="Home">
            <Logo />
          </Link>
        </div>
        <SidebarSection>
          <SidebarItem href="/">Home</SidebarItem>
          <SidebarItem href="/events">Events</SidebarItem>
          <SidebarItem href="/orders">Orders</SidebarItem>
          <SidebarItem href="/broadcasts">Broadcasts</SidebarItem>
          <SidebarItem href="/settings">Settings</SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Icons

Use `SidebarLabel` alongside icon components for labeled icon navigation. The SidebarItem component works best with 20x20 icons.

```jsx
import { Sidebar, SidebarBody, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import { Cog6ToothIcon, HomeIcon, MegaphoneIcon, Square2StackIcon, TicketIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Active State

Use the `current` prop on `SidebarItem` to indicate the active navigation item.

```jsx
import { Sidebar, SidebarBody, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import { Cog6ToothIcon, HomeIcon, MegaphoneIcon, Square2StackIcon, TicketIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/" current>
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Sticky Header

Use `SidebarHeader` to create a sticky section at the top of the sidebar.

```jsx
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarSection>
          <SidebarItem href="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Sticky Footer

Use `SidebarFooter` to create a sticky section at the bottom, commonly for user profile items.

```jsx
import { Avatar } from '@/components/avatar'
import { Sidebar, SidebarBody, SidebarFooter, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Cog6ToothIcon, HomeIcon, MegaphoneIcon, Square2StackIcon, TicketIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <SidebarSection>
          <SidebarItem>
            <Avatar src="/profile-photo.jpg" />
            <SidebarLabel>Erica</SidebarLabel>
            <ChevronRightIcon />
          </SidebarItem>
        </SidebarSection>
      </SidebarFooter>
    </Sidebar>
  )
}
```

## With Section Headings

Use `SidebarHeading` to add labeled section headers within the sidebar.

```jsx
import { Sidebar, SidebarBody, SidebarHeading, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import {
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection>
          <SidebarHeading>Resources</SidebarHeading>
          <SidebarItem href="/resources">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/changelog">
            <SparklesIcon />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Space Between Sections

Use `SidebarSpacer` to push a section to the bottom of the sidebar body.

```jsx
import { Sidebar, SidebarBody, SidebarItem, SidebarLabel, SidebarSection, SidebarSpacer } from '@/components/sidebar'
import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/logout">
            <ArrowRightStartOnRectangleIcon />
            <SidebarLabel>Sign out</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Divider

Use `SidebarDivider` to visually separate sections with a horizontal rule.

```jsx
import { Sidebar, SidebarBody, SidebarDivider, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import {
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarDivider />
        <SidebarSection>
          <SidebarItem href="/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/changelog">
            <SparklesIcon />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## With Dropdown

Combine with the Dropdown component for team switching or account menus in the sidebar header.

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
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import { ChevronDownIcon, Cog8ToothIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Cog6ToothIcon, HomeIcon, MegaphoneIcon, Square2StackIcon, TicketIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <Avatar src="/tailwind-logo.svg" />
            <SidebarLabel>Tailwind Labs</SidebarLabel>
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
              <DropdownLabel>New team&hellip;</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
```

## Props

### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. |

### SidebarHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Sticky header section. Extends JSX `<div>` element. |

### SidebarBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Scrollable body section. Extends JSX `<nav>` element. |

### SidebarFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Sticky footer section. Extends JSX `<div>` element. |

### SidebarSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Groups sidebar items together. Extends JSX `<div>` element. |

### SidebarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `boolean` | — | Indicates the active navigation item |
| `href` | `string` | — | Target URL when used as a link |

Extends Headless UI `Button` or `Link` component.

### SidebarLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Text label for sidebar items. Extends JSX `<span>` element. |

### SidebarHeading

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Section heading text. Extends JSX `<div>` element. |

### SidebarDivider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Horizontal rule separator. Extends JSX `<hr>` element. |

### SidebarSpacer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Pushes subsequent content to the bottom. Extends JSX `<div>` element. |

## Key Notes

- Custom icons require the `data-slot="icon"` prop for proper styling.
- The `SidebarItem` component is designed to work best with 20x20 icons.
