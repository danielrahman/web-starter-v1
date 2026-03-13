# Avatar

The Avatar component displays user profile images with fallback support for initials. It provides circular and square variants, multiple sizes, and group layouts.

## Components

- **Avatar** - Extends JSX `<span>` element
- **AvatarButton** - Extends Headless UI Button component or Link component

## Basic Image Avatar

```jsx
import { Avatar } from '@/components/avatar'

function Example() {
  return <Avatar src="/path/to/image.jpg" className="size-10" />
}
```

## Initials Fallback

Shows text initials in a colored background when no image is provided:

```jsx
<Avatar initials="tw" className="size-10 bg-zinc-900 text-white dark:text-black" />
```

```jsx
<Avatar initials="tw" className="size-10 bg-purple-500 text-white" />
```

## Square Avatars

Use the `square` prop to render rectangular instead of circular:

```jsx
<Avatar src="/path/to/image.jpg" square className="size-10" />
```

## Sizes

The component uses Tailwind's `size-*` utilities:

```jsx
<Avatar src="/path/to/image.jpg" className="size-6" />
<Avatar src="/path/to/image.jpg" className="size-8" />
<Avatar src="/path/to/image.jpg" className="size-10" />
```

## Avatar Groups

Multiple avatars overlapped using negative spacing:

```jsx
<div className="flex -space-x-2">
  <Avatar src="/user1.jpg" className="size-10 ring-2 ring-white dark:ring-zinc-900" />
  <Avatar src="/user2.jpg" className="size-10 ring-2 ring-white dark:ring-zinc-900" />
  <Avatar src="/user3.jpg" className="size-10 ring-2 ring-white dark:ring-zinc-900" />
</div>
```

## Avatar as Button

Clickable avatar using `AvatarButton`:

```jsx
import { AvatarButton } from '@/components/avatar'

function Example() {
  return <AvatarButton src="/path/to/image.jpg" className="size-10" />
}
```

## Avatar as Link

Avatar functioning as a link via `AvatarButton` with `href`:

```jsx
<AvatarButton href="/profile" src="/path/to/image.jpg" className="size-10" />
```

## Styling Classes

- Outline: `outline -outline-offset-1 outline-black/10 dark:outline-white/10`
- Rings for groups: `ring-2 ring-white dark:ring-zinc-900`
- Background colors for initials: `bg-zinc-900`, `bg-purple-500`
- Text colors: `text-white`, `dark:text-black`

## Props

### Avatar

| Prop | Default | Description |
|------|---------|-------------|
| `src` | -- | URL of the avatar image |
| `square` | `false` | Makes avatar square instead of circular |
| `initials` | -- | Fallback text when no image provided |
| `className` | -- | Tailwind CSS classes for styling (use `size-*` for dimensions) |

### AvatarButton

| Prop | Default | Description |
|------|---------|-------------|
| `src` | -- | URL of the avatar image |
| `square` | `false` | Makes avatar square instead of circular |
| `initials` | -- | Fallback text when no image provided |
| `href` | -- | Target URL (renders as link instead of button) |
| `className` | -- | Tailwind CSS classes for styling |
