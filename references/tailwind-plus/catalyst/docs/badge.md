# Badge

The Badge component provides visual labels for categorization and status indication.

## Components

- **Badge** - Extends the JSX `<span>` element
- **BadgeButton** - Extends Headless UI Button component or Link component

## Basic Badge

```jsx
import { Badge } from '@/components/badge'

function Example() {
  return (
    <div className="flex gap-3">
      <Badge color="lime">documentation</Badge>
      <Badge color="purple">help wanted</Badge>
      <Badge color="rose">bug</Badge>
    </div>
  )
}
```

## Badge as Button

```jsx
import { BadgeButton } from '@/components/badge'

function Example() {
  return <BadgeButton>documentation</BadgeButton>
}
```

## Badge as Link

```jsx
import { BadgeButton } from '@/components/badge'

function Example() {
  return <BadgeButton href="#">documentation</BadgeButton>
}
```

## Available Colors (18 variants)

All colors automatically adjust between light and dark modes for consistent contrast.

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
- `zinc` (default)

## Props

### Badge

| Prop | Default | Description |
|------|---------|-------------|
| `color` | `zinc` | Sets the badge appearance color |

### BadgeButton

| Prop | Default | Description |
|------|---------|-------------|
| `color` | `zinc` | Sets the badge appearance color |
| `href` | -- | Target URL when rendering as a link |
