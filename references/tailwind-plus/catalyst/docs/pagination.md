# Pagination

The Pagination component provides page navigation controls for paginated content. It supports previous/next buttons, numbered page links, gap indicators, and disabled states.

## Basic Example

A full pagination control with previous/next buttons, page numbers, and a gap indicator.

```jsx
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/pagination'

function Example() {
  return (
    <Pagination>
      <PaginationPrevious href="?page=2" />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3" current>3</PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
  )
}
```

## Disabled Links

Omit the `href` prop from `PaginationPrevious` or `PaginationNext` to render them as disabled. This is useful when on the first or last page.

```jsx
function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="?page=1" current>1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3">3</PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=2" />
    </Pagination>
  )
}
```

## Current Page Active State

Use the `current` prop on `PaginationPage` to highlight the active page.

```jsx
function Example() {
  return (
    <Pagination>
      <PaginationPrevious href="?page=1" />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2" current>2</PaginationPage>
        <PaginationPage href="?page=3">3</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=3" />
    </Pagination>
  )
}
```

## Without Page Links

A minimal pagination with only previous/next buttons, useful for cursor-based pagination.

```jsx
function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationNext href="?after=421c1b0" />
    </Pagination>
  )
}
```

## Props

### Pagination

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aria-label` | `string` | `"Page navigation"` | Describes the section for screen readers |
| `className` | `string` | — | External layout classes to apply |

Extends JSX `<nav>` element.

### PaginationPrevious

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | URL to previous page; link is disabled when omitted |
| `children` | `ReactNode` | `"Previous"` | Link text |

Extends JSX `<a>` element.

### PaginationNext

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | URL to next page; link is disabled when omitted |
| `children` | `ReactNode` | `"Next"` | Link text |

Extends JSX `<a>` element.

### PaginationPage

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | URL to the page |
| `children` | `ReactNode` | — | Page number |
| `current` | `boolean` | `false` | Indicates the current/active page |

Extends JSX `<a>` element.

### PaginationList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. |

### PaginationGap

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | Renders an ellipsis indicator. No component-specific props. |
