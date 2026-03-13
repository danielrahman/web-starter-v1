# Getting Started

Catalyst is a starter kit for building your own component systems with React and Tailwind CSS -- designed and developed by the Tailwind CSS team.

## Prerequisites

Before beginning, ensure you have a Tailwind CSS project configured. Catalyst works with Next.js, Remix, Inertia, or any React project. The kit relies on Tailwind's default theme configuration.

Catalyst depends on Tailwind CSS v4.0 or later. The kit uses Tailwind's default theme; significant customizations require component adjustments. All components are production-ready and fully customizable.

## Download Components

Download the latest version from your Tailwind Plus account, then unzip `catalyst-ui-kit.zip` and copy component files from either the `javascript` or `typescript` folders into your project's components directory.

## Install Dependencies

```bash
npm install @headlessui/react motion clsx
```

Update Tailwind CSS to the latest version:

```bash
npm install tailwindcss@latest
```

## Configure Link Component

Update your `link.tsx` or `link.jsx` to use your framework's routing library. The default component renders a plain HTML anchor element.

### Next.js

```typescript
import * as Headless from '@headlessui/react'
import NextLink, { type LinkProps } from 'next/link'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <NextLink {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})
```

### Remix

```typescript
import * as Headless from '@headlessui/react'
import { Link as RemixLink, type LinkProps } from '@remix-run/react'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: { href: string | LinkProps['to'] } & Omit<LinkProps, 'to'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <RemixLink {...props} to={props.href} ref={ref} />
    </Headless.DataInteractive>
  )
})
```

### Inertia.js

```typescript
import * as Headless from '@headlessui/react'
import { Link as InertiaLink, type InertiaLinkProps } from '@inertiajs/react'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(props: InertiaLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  return (
    <Headless.DataInteractive>
      <InertiaLink {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})
```

## Optional: Inter Font Setup

Add the Inter font link in your HTML:

```html
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
```

Then update your Tailwind theme configuration:

```css
@theme {
  --font-sans: Inter, sans-serif;
  --font-sans--font-feature-settings: 'cv11';
}
```

## Optional: Heroicons Installation

```bash
npm install @heroicons/react
```

Import 16x16 icons for most components:

```typescript
import { Button } from '@/components/button'
import { PlusIcon } from '@heroicons/react/16/solid'

function Example() {
  return (
    <Button>
      <PlusIcon />
      Add item
    </Button>
  )
}
```

For `NavbarItem` and `SidebarItem`, use 20x20 icons:

```typescript
import { SidebarItem, SidebarLabel } from '@/components/sidebar'
import { HomeIcon } from '@heroicons/react/20/solid'

function Example() {
  return (
    <SidebarItem href="/home">
      <HomeIcon />
      <SidebarLabel>Home</SidebarLabel>
    </SidebarItem>
  )
}
```
