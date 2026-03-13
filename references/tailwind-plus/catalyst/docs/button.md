# Button

The Button component provides multiple visual styles, color variants, and renders as either a button or link element.

## Basic Button

```jsx
import { Button } from '@/components/button'

function Example() {
  return <Button>Save changes</Button>
}
```

## With Color

```jsx
<Button color="cyan">Save changes</Button>
```

## Outline Style

```jsx
<Button outline>Save draft</Button>
```

## Plain Style

```jsx
<Button plain>Save draft</Button>
```

## Disabled State

```jsx
<Button disabled>Save changes</Button>
```

## With Icon

Icons should be 16x16 pixels. Custom icons require a `data-slot="icon"` attribute.

```jsx
import { PlusIcon } from '@heroicons/react/16/solid'

<Button>
  <PlusIcon />
  Add item
</Button>
```

## As Link

Link buttons do not support the `disabled` prop.

```jsx
<Button href="/get-started">Get started</Button>
```

## Available Colors

### Adaptive Colors (3 variants)

These adjust automatically between light and dark modes:

- `dark/zinc` (default)
- `light`
- `dark/white`

### Solid Colors (20 variants)

- `dark`
- `zinc`
- `white`
- `red`
- `orange`
- `amber`
- `yellow`
- `lime`
- `green`
- `emerald`
- `teal`
- `cyan`
- `sky`
- `blue`
- `indigo`
- `violet`
- `purple`
- `fuchsia`
- `pink`
- `rose`

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `type` | `button` | The button type |
| `color` | `dark/zinc` | Color variant for styling |
| `outline` | `false` | Secondary button style without shadows/background |
| `plain` | `false` | Simple style with no border, shadows, or background |
| `disabled` | `false` | Disables the button and applies disabled styling |
| `href` | -- | URL for rendering as a link (incompatible with `disabled`) |
