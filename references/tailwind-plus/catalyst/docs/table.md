# Table

The Table component provides a styled, composable table system for displaying tabular data. It supports full-width bleed, dense spacing, grid lines, striped rows, linked rows, and integration with other Catalyst components like Avatar, Badge, Dropdown, and Pagination.

## Basic Example

A simple table with head, body, and rows.

```jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

function Example({ users }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## Responsive Tables

Set the CSS `--gutter` variable to match the padding of the containing element to prevent cropping on small screens.

```jsx
<Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Handle</TableHeader>
      <TableHeader>Role</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Access</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>@{user.handle}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Full-Width (Bleed) Tables

Use the `bleed` prop to make the table extend into the gutter area for a full-width appearance.

```jsx
<Table bleed className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Rows as Links

Add an `href` prop to `TableRow` to make entire rows clickable links with hover styles.

```jsx
<Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle} href={user.url}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Dense Spacing

Use the `dense` prop for condensed row heights, ideal for data-heavy tables.

```jsx
<Table dense className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Rank</TableHeader>
      <TableHeader>Player</TableHeader>
      <TableHeader className="text-right">Pos</TableHeader>
      <TableHeader className="text-right">GP</TableHeader>
      <TableHeader className="text-right">G</TableHeader>
      <TableHeader className="text-right">A</TableHeader>
      <TableHeader className="text-right">P</TableHeader>
      <TableHeader className="text-right">+/-</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {players.map((player) => (
      <TableRow key={player.rank}>
        <TableCell className="tabular-nums">{player.rank}</TableCell>
        <TableCell className="font-medium">{player.name}</TableCell>
        <TableCell className="text-right">{player.position}</TableCell>
        <TableCell className="text-right tabular-nums">{player.gamesPlayed}</TableCell>
        <TableCell className="text-right tabular-nums">{player.goals}</TableCell>
        <TableCell className="text-right tabular-nums">{player.assists}</TableCell>
        <TableCell className="text-right tabular-nums">{player.points}</TableCell>
        <TableCell className="text-right tabular-nums">{player.plusMinus}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Grid Lines

Use the `grid` prop to display vertical grid lines between columns.

```jsx
<Table grid className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Striped Rows

Use the `striped` prop to alternate row background colors.

```jsx
<Table striped className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Custom Heading Color

Override header text color using Tailwind classes on the `TableRow` within `TableHead`.

```jsx
<Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
  <TableHead>
    <TableRow className="text-zinc-950 dark:text-white">
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.handle}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-zinc-500">{user.access}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Complex Content with Avatar and Badge

Combine with Avatar and Badge components for rich cell content.

```jsx
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

export function ComplexExample({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell>
              <div className="flex items-center gap-4">
                <Avatar src={user.avatarUrl} className="size-12" />
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-zinc-500">
                    <a href="#" className="hover:text-zinc-700">
                      {user.email}
                    </a>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
            <TableCell>
              {user.online ? <Badge color="lime">Online</Badge> : <Badge color="zinc">Offline</Badge>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## With Pagination

Combine with the Pagination component for paginated table views.

```jsx
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

function Example({ users }) {
  return (
    <>
      <h1 className="mb-6 text-base font-semibold">Users</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-6">
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
    </>
  )
}
```

## With Dropdowns

Add action menus per row using the Dropdown component. Use negative margins to avoid increasing cell size.

```jsx
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'

function Example({ users }) {
  return (
    <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Access</TableHeader>
          <TableHeader className="relative w-0">
            <span className="sr-only">Actions</span>
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
            <TableCell>
              <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                <Dropdown>
                  <DropdownButton plain aria-label="More options">
                    <EllipsisHorizontalIcon />
                  </DropdownButton>
                  <DropdownMenu anchor="bottom end">
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## In Dialog

Tables inside dialogs automatically have `--gutter` set to match the dialog padding.

```jsx
import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { useState } from 'react'

function Example({ users }) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Show users
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="3xl">
        <DialogTitle>Users</DialogTitle>
        <DialogDescription>The follow users have access to your account.</DialogDescription>
        <DialogBody>
          <Table bleed compact>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.handle}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-zinc-500">{user.access}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogBody>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
```

## Props

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bleed` | `boolean` | `false` | Whether the table should bleed into the gutter |
| `dense` | `boolean` | `false` | Whether the table should use condensed spacing |
| `grid` | `boolean` | `false` | Whether to display vertical grid lines |
| `striped` | `boolean` | `false` | Whether to display striped table rows |

Extends JSX `<table>` element.

### TableHead

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. Extends JSX `<thead>` element. |

### TableBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. Extends JSX `<tbody>` element. |

### TableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | The URL for the row when used as a link |
| `target` | `string` | — | The target for the row when used as a link |
| `title` | `string` | — | The title for the row when used as a link |

Extends JSX `<tr>` element.

### TableHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. Extends JSX `<th>` element. |

### TableCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No component-specific props. Extends JSX `<td>` element. |
