# Alert

The Alert component is a modal dialog for confirming important actions. It extends Headless UI's Dialog component and is built for Tailwind CSS.

## Core Components

The Alert system includes these composable parts:

- `Alert` - Main container (extends `<Dialog>`)
- `AlertTitle` - Header text (extends `<DialogTitle>`)
- `AlertDescription` - Body text (extends `<Description>`)
- `AlertBody` - Custom content area (extends `<div>`)
- `AlertActions` - Button container (extends `<div>`)

## Basic Alert

```jsx
function Example() {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Alert open={isOpen} onClose={setIsOpen}>
        <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
        <AlertDescription>
          The refund will be reflected in the customer's bank account 2 to 3 business days after processing.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </AlertActions>
      </Alert>
    </>
  )
}
```

## With Custom Content (AlertBody)

```jsx
<Alert open={isOpen} onClose={setIsOpen} size="sm">
  <AlertTitle>Verification required</AlertTitle>
  <AlertDescription>To continue, please enter your password.</AlertDescription>
  <AlertBody>
    <Input name="password" type="password" aria-label="Password" placeholder="*******" />
  </AlertBody>
  <AlertActions>
    <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button onClick={() => setIsOpen(false)}>Continue</Button>
  </AlertActions>
</Alert>
```

## Auto-Focus Feature

Add the `autoFocus` prop to any form element or button to automatically focus it when the alert opens.

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `open` | -- | Controls alert visibility state |
| `onClose` | -- | Callback triggered when alert dismisses |
| `size` | `md` | Max-width of alert dialog. Available sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl` |
