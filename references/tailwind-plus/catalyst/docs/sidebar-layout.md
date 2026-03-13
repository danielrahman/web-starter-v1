# Sidebar Layout

The `SidebarLayout` component creates a responsive layout with a sidebar for larger screens and a navbar for mobile. It extends the JSX `<div>` element.

## Basic Usage

```jsx
import { SidebarLayout } from '@/components/sidebar-layout'
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarHeading, SidebarItem, SidebarLabel, SidebarSection, SidebarSpacer } from '@/components/sidebar'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownLabel, DropdownDivider } from '@/components/dropdown'
import { Avatar } from '@/components/avatar'
```

Wrap page content with `SidebarLayout`, passing `sidebar` and `navbar` props containing respective menu components and page children.

## Sidebar Structure Components

- **SidebarHeader**: Top section with team/workspace selector
- **SidebarBody**: Main navigation items and sections
- **SidebarFooter**: User profile dropdown
- **SidebarSection**: Grouped navigation items
- **SidebarItem**: Individual navigation links
- **SidebarLabel**: Text labels for items
- **SidebarSpacer**: Vertical spacing/flex divider

## Styling Recommendation

Add background classes to `<html>` to match layout background during overscroll:

```html
<html class="bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
```

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `sidebar` | -- | The `Sidebar` menu for all screen sizes |
| `navbar` | -- | The `Navbar` menu for mobile screen sizes |
| `children` | -- | Page content |
