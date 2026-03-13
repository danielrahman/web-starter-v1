# List Containers

Tailwind UI blocks — 7 components.

## 1. Simple with dividers

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-white/10">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}

```

---

## 2. Card with dividers

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-0 dark:outline-white/10">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-white/10">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}

```

---

## 3. Card with dividers, full-width on mobile

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-md dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-white/10">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}

```

---

## 4. Separate cards

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}

```

---

## 5. Separate cards, full-width on mobile

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-6 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}

```

---

## 6. Flat card with dividers

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white dark:border-white/10 dark:bg-gray-900">
      <ul role="list" className="divide-y divide-gray-300 dark:divide-white/10">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}

```

---

## 7. Simple with dividers, full-width on mobile

- **Dark mode:** Yes
- **Language:** jsx

```jsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-white/10">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}

```

---

