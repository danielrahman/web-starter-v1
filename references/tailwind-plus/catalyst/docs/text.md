# Text

The Text component provides styled typography primitives for body text, links, bold/strong text, and inline code. These components ensure consistent text styling across your application.

## Basic Usage

Use `Text` for body paragraphs, `Strong` for bold emphasis, and `TextLink` for inline links.

```jsx
import { Strong, Text, TextLink } from '@/components/text'

function Example() {
  return (
    <Text>
      This feature is only available to users on the <Strong>Business Plan</Strong>.
      To upgrade, visit your <TextLink href="#">billing settings</TextLink>.
    </Text>
  )
}
```

## Text with Link

Use `TextLink` to render styled inline links within text content.

```jsx
import { Text, TextLink } from '@/components/text'

function Example() {
  return (
    <Text>
      Deleting your account is permanent, and your data will not be able to be
      recovered. If you still want to use this account in the future, learn about
      <TextLink href="#">pausing your subscription</TextLink> instead.
    </Text>
  )
}
```

## Text with Strong Emphasis

Use `Strong` to bold important words or phrases within text.

```jsx
import { Strong, Text } from '@/components/text'

function Example() {
  return (
    <Text>
      Deleting your account is permanent, and <Strong>your account data cannot
      be recovered</Strong>.
    </Text>
  )
}
```

## Text with Code

Use `Code` to render inline code snippets within text content.

```jsx
import { Code, Text } from '@/components/text'

function Example() {
  return (
    <Text>
      Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token
      somewhere safe as it will only be displayed once.
    </Text>
  )
}
```

## Props

### Text

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | The text content to render |

Extends JSX `<p>` element.

### TextLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | The URL for the link |
| `children` | `ReactNode` | — | The link text to render |

Extends the `<Link>` component.

### Strong

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | The text to render in bold |

Extends JSX `<strong>` element.

### Code

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | The inline code to render |

Extends JSX `<code>` element.
