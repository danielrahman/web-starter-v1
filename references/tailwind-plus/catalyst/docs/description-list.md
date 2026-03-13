# Description List

For when you need to take the data from just one table row and somehow turn it into its own entire table to keep the page from feeling too empty.

## Basic Example

Use the `DescriptionList`, `DescriptionTerm`, and `DescriptionDetails` components to display key-value pairs.

```jsx
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'

function Example() {
  return (
    <DescriptionList>
      <DescriptionTerm>Customer</DescriptionTerm>
      <DescriptionDetails>Leslie Alexander</DescriptionDetails>

      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>leslie.alexander@example.com</DescriptionDetails>

      <DescriptionTerm>Access</DescriptionTerm>
      <DescriptionDetails>Admin</DescriptionDetails>
    </DescriptionList>
  )
}
```

## With Heading

Use the `Subheading` component alongside `DescriptionList` for a titled description list.

```jsx
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'
import { Subheading } from '@/components/heading'

function Example() {
  return (
    <>
      <Subheading>Order #1011</Subheading>
      <DescriptionList className="mt-4">
        <DescriptionTerm>Customer</DescriptionTerm>
        <DescriptionDetails>Michael Foster</DescriptionDetails>

        <DescriptionTerm>Event</DescriptionTerm>
        <DescriptionDetails>Bear Hug: Live in Concert</DescriptionDetails>

        <DescriptionTerm>Amount</DescriptionTerm>
        <DescriptionDetails>$150.00 USD</DescriptionDetails>

        <DescriptionTerm>Amount after exchange rate</DescriptionTerm>
        <DescriptionDetails>US$150.00 → CA$199.79</DescriptionDetails>

        <DescriptionTerm>Fee</DescriptionTerm>
        <DescriptionDetails>$4.79 USD</DescriptionDetails>

        <DescriptionTerm>Net</DescriptionTerm>
        <DescriptionDetails>$1,955.00</DescriptionDetails>
      </DescriptionList>
    </>
  )
}
```

## Component Props

| Component | Extends | Component-specific Props |
|---|---|---|
| `DescriptionList` | `<dl>` | None |
| `DescriptionTerm` | `<dt>` | None |
| `DescriptionDetails` | `<dd>` | None |
