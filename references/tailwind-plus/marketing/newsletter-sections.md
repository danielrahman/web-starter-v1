# Newsletter Sections

Tailwind UI marketing blocks — 6 components.

## 1. Side-by-side with details

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus:outline-indigo-500"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200 dark:bg-white/5 dark:ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200 dark:bg-white/5 dark:ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-30"
        />
      </div>
    </div>
  )
}

```

---

## 2. Simple side-by-side

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl lg:col-span-7 dark:text-white">
          Want product news and updates? Sign up for our newsletter.
        </h2>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-gray-900 dark:text-gray-300">
            We care about your data. Read our{' '}
            <a
              href="#"
              className="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}

```

---

## 3. Simple side-by-side on brand

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-indigo-700 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:col-span-7">
          Want product news and updates? Sign up for our newsletter.
        </h2>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-gray-300">
            We care about your data. Read our{' '}
            <a href="#" className="font-semibold whitespace-nowrap text-white hover:text-indigo-50">
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}

```

---

## 4. Simple stacked

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl dark:text-white">
          Want product news and updates? Sign up for our newsletter.
        </h2>
        <form className="mt-10 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:focus:outline-indigo-500"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-gray-900 dark:text-gray-300">
            We care about your data. Read our{' '}
            <a
              href="#"
              className="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}

```

---

## 5. Centered card

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get notified when we’re launching
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
            >
              Notify me
            </button>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

```

---

## 6. Side-by-side on card

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl xl:flex-auto">
            Want our product updates? Sign up for our newsletter.
          </h2>
          <form className="w-full max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/90 dark:shadow-none dark:hover:bg-white"
              >
                Notify me
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-gray-300">
              We care about your data. Read our{' '}
              <a
                href="#"
                className="font-semibold whitespace-nowrap text-white hover:text-gray-100 dark:hover:text-gray-200"
              >
                privacy policy
              </a>
              .
            </p>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

```

---

