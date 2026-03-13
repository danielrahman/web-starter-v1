# Auth Layout

The `AuthLayout` component is a wrapper component designed for centered authentication pages. It extends the JSX `<main>` element.

## Basic Usage

```jsx
<AuthLayout>
  {/* Your page content */}
</AuthLayout>
```

## Login Page

```jsx
<AuthLayout>
  <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
    <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
    <Heading>Sign in to your account</Heading>
    <Field>
      <Label>Email</Label>
      <Input type="email" name="email" />
    </Field>
    <Field>
      <Label>Password</Label>
      <Input type="password" name="password" />
    </Field>
    <div className="flex items-center justify-between">
      <CheckboxField>
        <Checkbox name="remember" />
        <Label>Remember me</Label>
      </CheckboxField>
      <Text>
        <TextLink href="#">
          <Strong>Forgot password?</Strong>
        </TextLink>
      </Text>
    </div>
    <Button type="submit" className="w-full">
      Login
    </Button>
    <Text>
      Don't have an account?{' '}
      <TextLink href="#">
        <Strong>Sign up</Strong>
      </TextLink>
    </Text>
  </form>
</AuthLayout>
```

## Registration Page

```jsx
<AuthLayout>
  <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
    <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
    <Heading>Create your account</Heading>
    <Field>
      <Label>Email</Label>
      <Input type="email" name="email" />
    </Field>
    <Field>
      <Label>Full name</Label>
      <Input name="name" />
    </Field>
    <Field>
      <Label>Password</Label>
      <Input type="password" name="password" autoComplete="new-password" />
    </Field>
    <Field>
      <Label>Country</Label>
      <Select name="country">
        <option>Canada</option>
        <option>Mexico</option>
        <option>United States</option>
      </Select>
    </Field>
    <CheckboxField>
      <Checkbox name="remember" />
      <Label>Get emails about product updates and news.</Label>
    </CheckboxField>
    <Button type="submit" className="w-full">
      Create account
    </Button>
    <Text>
      Already have an account?{' '}
      <TextLink href="#">
        <Strong>Sign in</Strong>
      </TextLink>
    </Text>
  </form>
</AuthLayout>
```

## Password Reset Page

```jsx
<AuthLayout>
  <form action="" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
    <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
    <Heading>Reset your password</Heading>
    <Text>Enter your email and we'll send you a link to reset your password.</Text>
    <Field>
      <Label>Email</Label>
      <Input type="email" name="email" />
    </Field>
    <Button type="submit" className="w-full">
      Reset password
    </Button>
    <Text>
      Don't have an account?{' '}
      <TextLink href="/demos/auth/register">
        <Strong>Sign up</Strong>
      </TextLink>
    </Text>
  </form>
</AuthLayout>
```

## Key Characteristics

- Provides consistent centering for authentication interfaces
- Compatible with dark mode styling
- Supports accessible form components (Fieldset, Label, Input, Checkbox, Select)
- Integrates with typography components (Heading, Text, TextLink, Strong)
- Uses Tailwind CSS utilities for responsive spacing and sizing

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `children` | -- | The page content |
