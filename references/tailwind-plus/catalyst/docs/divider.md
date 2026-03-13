# Divider

It's a line. A simple horizontal rule component.

## Basic Example

Use the `Divider` component to add a horizontal rule between items.

```jsx
import { Divider } from '@/components/divider'

function Example() {
  return <Divider />
}
```

## With Reduced Contrast

Use the `soft` prop for secondary dividers with a softer color.

```jsx
import { Divider } from '@/components/divider'

function Example() {
  return <Divider soft />
}
```

## With Spacing

Use utility classes like `my-*` to control the vertical spacing around a divider.

```jsx
import { Divider } from '@/components/divider'

function Example() {
  return <Divider className="my-6" />
}
```

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Divider` | `<hr>` | `soft` (default: `false`) - Whether the divider should use a softer color |
