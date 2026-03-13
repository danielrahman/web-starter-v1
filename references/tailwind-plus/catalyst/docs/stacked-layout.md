# Stacked Layout

The `StackedLayout` component creates a responsive navigation pattern with a navbar for desktop and sidebar for mobile screens. It extends the JSX `<div>` element.

## Basic Usage

```jsx
import { StackedLayout } from '@/components/stacked-layout'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'
import { Avatar } from '@/components/avatar'
import { Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/dropdown'
```

```jsx
function Example({ children }) {
  return (
    <StackedLayout
      navbar={<Navbar>{/* navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* sidebar content */}</Sidebar>}
    >
      {/* page content */}
    </StackedLayout>
  )
}
```

## Styling Recommendation

Add background classes to the `<html>` element to match layout backgrounds during overscroll:

```html
<html class="bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
```

## Key Features

- Responsive design switching between navbar (desktop) and sidebar (mobile)
- Supports dropdowns with team selection
- Integrates avatar components for user/team identification
- Responsive dividers and spacing utilities

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `navbar` | -- | The `Navbar` menu for desktop screen sizes |
| `sidebar` | -- | The `Sidebar` menu for mobile screen sizes |
| `children` | -- | The page content |
