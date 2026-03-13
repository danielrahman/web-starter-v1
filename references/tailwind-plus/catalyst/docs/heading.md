# Heading

You get two -- we're building applications here, not authoring medical journals. Use the Heading and Subheading components for consistent typography across your application.

## Basic Heading

```jsx
import { Heading } from '@/components/heading'

function Example() {
  return <Heading>Recent orders</Heading>
}
```

## Basic Subheading

```jsx
import { Subheading } from '@/components/heading'

function Example() {
  return <Subheading>Recent orders</Subheading>
}
```

## Custom Level

Use the `level` prop to change the rendered HTML element while maintaining the same visual style. By default, `Heading` renders as `h1` and `Subheading` renders as `h2`.

```jsx
import { Heading } from '@/components/heading'

function Example() {
  return <Heading level={2}>Recent orders</Heading>
}
```

## With Actions

Combine the Heading with buttons for a page header with actions.

```jsx
import { Heading } from '@/components/heading'

function Example() {
  return (
    <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
      <Heading>Order #1011</Heading>
      <div className="flex gap-4">
        <Button outline>Refund</Button>
        <Button>Resend invoice</Button>
      </div>
    </div>
  )
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Heading` | `<h1>` (default) | `level` - Changes the rendered heading element (e.g., `level={2}` renders `<h2>`) |
| `Subheading` | `<h2>` (default) | `level` - Changes the rendered heading element |
