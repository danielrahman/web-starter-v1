# Dialog

Use the Dialog component to display modal dialogs that overlay the page content.

## Basic Example

Use the `Dialog`, `DialogTitle`, `DialogDescription`, `DialogBody`, and `DialogActions` components to build a modal dialog controlled by React state.

```jsx
import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { useState } from 'react'

function Example() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer's bank account 2 to 3 business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
```

## Dialog Width

Use the `size` prop to control the max-width of the dialog. Available sizes: `xs`, `sm`, `md`, `lg` (default), `xl`, `2xl`, `3xl`, `4xl`, `5xl`.

```jsx
<Dialog size="xl" open={isOpen} onClose={setIsOpen}>
  {/* ... */}
</Dialog>
```

## Opening from Dropdown

Render the `Dialog` outside the `Dropdown` to prevent it from being unmounted when the dropdown menu closes.

```jsx
import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

function Example() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownItem onClick={() => setIsOpen(true)}>Refund</DropdownItem>
          <DropdownItem href="#" disabled>
            Download
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer's bank account 2 to 3 business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
```

## Auto-focus

Add the `autoFocus` prop to an input element to automatically focus it when the dialog opens.

```jsx
<Input name="amount" placeholder="$0.00" autoFocus />
```

## Scrolling Content

Dialogs automatically become scrollable if their content is taller than the viewport. Use `size="xl"` or other sizes with extended `DialogBody` content.

## Component Props

| Component | Extends | Props |
|---|---|---|
| `Dialog` | Headless UI `<Dialog>` | `open` (required), `onClose` (required), `size` (default: `"lg"`, options: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`) |
| `DialogTitle` | Headless UI `<DialogTitle>` | No component-specific props |
| `DialogDescription` | Headless UI `<Description>` | No component-specific props |
| `DialogBody` | `<div>` | No component-specific props |
| `DialogActions` | `<div>` | No component-specific props |
