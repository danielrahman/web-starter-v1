# Input Groups

Tailwind UI blocks — 21 components.

## 1. Input with label

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
    </div>
  )
}

```

---

## 2. Input with label and help text

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="email-description"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
      <p id="email-description" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        We'll only use this for spam.
      </p>
    </div>
  )
}

```

---

## 3. Input with validation error

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { ExclamationCircleIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          defaultValue="adamwathan"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid="true"
          aria-describedby="email-error"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6 dark:bg-white/5 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400"
        />
        <ExclamationCircleIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4 dark:text-red-400"
        />
      </div>
      <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
        Not a valid email address.
      </p>
    </div>
  )
}

```

---

## 4. Input with disabled state

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <div className="mt-2">
        <input
          defaultValue="you@example.com"
          id="email"
          name="email"
          type="email"
          disabled
          placeholder="you@example.com"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200 sm:text-sm/6 dark:bg-white/5 dark:text-gray-300 dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500 dark:disabled:bg-white/10 dark:disabled:text-gray-500 dark:disabled:outline-white/5"
        />
      </div>
    </div>
  )
}

```

---

## 5. Input with hidden label

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        aria-label="Email"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
      />
    </div>
  )
}

```

---

## 6. Input with corner hint

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <span id="email-optional" className="text-sm/6 text-gray-500 dark:text-gray-400">
          Optional
        </span>
      </div>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="email-optional"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
    </div>
  )
}

```

---

## 7. Input with leading icon

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { EnvelopeIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
        <EnvelopeIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4 dark:text-gray-500"
        />
      </div>
    </div>
  )
}

```

---

## 8. Input with trailing icon

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Account number
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="account-number"
          name="account-number"
          type="text"
          placeholder="000-00-0000"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
        <QuestionMarkCircleIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4 dark:text-gray-500"
        />
      </div>
    </div>
  )
}

```

---

## 9. Input with add-on

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Company website
      </label>
      <div className="mt-2 flex">
        <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6 dark:bg-white/5 dark:text-gray-400 dark:outline-gray-700">
          https://
        </div>
        <input
          id="company-website"
          name="company-website"
          type="text"
          placeholder="www.example.com"
          className="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
    </div>
  )
}

```

---

## 10. Input with inline add-on

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Company website
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 dark:text-gray-400">https://</div>
          <input
            id="company-website"
            name="company-website"
            type="text"
            placeholder="www.example.com"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:text-white dark:placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}

```

---

## 11. Input with inline leading and trailing add-ons

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 dark:text-gray-400">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
          />
          <div
            id="price-currency"
            className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 dark:text-gray-400"
          >
            USD
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 12. Input with inline leading dropdown

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Phone number
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="country"
              name="country"
              autoComplete="country"
              aria-label="Country"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
          <input
            id="phone-number"
            name="phone-number"
            type="text"
            placeholder="123-456-7890"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}

```

---

## 13. Input with inline leading add-on and trailing dropdown

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-gray-600 dark:has-[input:focus-within]:outline-indigo-500">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 dark:text-gray-400">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-gray-800 dark:text-gray-400 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 14. Input with leading icon and trailing button

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="query" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Search candidates
      </label>
      <div className="mt-2 flex">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="John Smith"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
          />
          <UsersIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4 dark:text-gray-500"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/10 dark:text-white dark:outline-gray-700 dark:hover:bg-white/20 dark:focus:outline-indigo-500"
        >
          <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 size-4 text-gray-400" />
          Sort
        </button>
      </div>
    </div>
  )
}

```

---

## 15. Inputs with shared borders

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm/6 font-medium text-gray-900 dark:text-white">Card details</legend>
        <div className="mt-2 grid grid-cols-2">
          <div className="col-span-2">
            <input
              id="card-number"
              name="card-number"
              type="text"
              placeholder="Card number"
              aria-label="Card number"
              className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </div>
          <div className="-mt-px -mr-px">
            <input
              id="card-expiration-date"
              name="card-expiration-date"
              type="text"
              placeholder="MM / YY"
              aria-label="Expiration date"
              className="block w-full rounded-bl-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </div>
          <div className="-mt-px">
            <input
              id="card-cvc"
              name="card-cvc"
              type="text"
              placeholder="CVC"
              aria-label="CVC"
              className="block w-full rounded-br-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <legend className="block text-sm/6 font-medium text-gray-900 dark:text-white">Billing address</legend>
        <div className="mt-2">
          <div className="grid grid-cols-1 focus-within:relative">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              aria-label="Country"
              className="col-start-1 row-start-1 w-full appearance-none rounded-t-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
          <div className="-mt-px">
            <input
              id="postal-code"
              name="postal-code"
              type="text"
              placeholder="ZIP / Postal code"
              autoComplete="postal-code"
              aria-label="ZIP / Postal code"
              className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}

```

---

## 16. Input with inset label

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="rounded-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900 dark:text-gray-200">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
      />
    </div>
  )
}

```

---

## 17. Inputs with inset labels and shared borders

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="-space-y-px">
      <div className="rounded-t-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-gray-700 dark:focus-within:outline-indigo-500">
        <label htmlFor="name" className="block text-xs font-medium text-gray-900 dark:text-gray-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
        />
      </div>
      <div className="rounded-b-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-gray-700 dark:focus-within:outline-indigo-500">
        <label htmlFor="job-title" className="block text-xs font-medium text-gray-900 dark:text-gray-200">
          Job title
        </label>
        <input
          id="job-title"
          name="job-title"
          type="text"
          placeholder="Head of Tomfoolery"
          className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
        />
      </div>
    </div>
  )
}

```

---

## 18. Input with overlapping label

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-gray-900 dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
      />
    </div>
  )
}

```

---

## 19. Input with pill shape

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm/6 font-medium text-gray-900 dark:text-white">
        Name
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
    </div>
  )
}

```

---

## 20. Input with gray background and bottom border

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Name
      </label>
      <div className="relative mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600 dark:border-white/20 dark:peer-focus:border-indigo-500"
        />
      </div>
    </div>
  )
}

```

---

## 21. Input with keyboard shortcut

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div>
      <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Quick search
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-1 dark:-outline-offset-1 dark:outline-white/10 dark:focus-within:outline-indigo-500">
          <input
            id="search"
            name="search"
            type="text"
            className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
          />
          <div className="flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400 dark:border-white/10">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

