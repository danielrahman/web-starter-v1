# Contact Sections

Tailwind UI marketing blocks — 7 components.

## 1. Centered

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          Contact sales
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
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
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10 dark:outline-indigo-500 dark:has-checked:bg-indigo-500">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600 dark:text-gray-400">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

```

---

## 2. Side-by-side grid

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-8 sm:py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none dark:divide-white/10">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                Get in touch
              </h2>
              <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Press</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:press@example.com" className="font-semibold text-indigo-600 dark:text-indigo-400">
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Join our team</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:hello@example.com" className="font-semibold text-indigo-600 dark:text-indigo-400">
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                Locations
              </h2>
              <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Los Angeles</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">New York</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Toronto</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Chicago</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 3. Split with pattern

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative isolate bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2 dark:bg-gray-900 dark:ring-white/10">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} className="fill-white dark:fill-gray-900" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))] dark:block"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10 dark:opacity-20"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900 dark:hover:text-white">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900 dark:hover:text-white">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

```

---

## 4. Simple four-column

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Our offices
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
              Los Angeles
            </h3>
            <address className="border-l border-gray-200 pt-2 pl-6 text-gray-600 not-italic dark:border-white/10 dark:text-gray-400">
              <p>4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
              New York
            </h3>
            <address className="border-l border-gray-200 pt-2 pl-6 text-gray-600 not-italic dark:border-white/10 dark:text-gray-400">
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
              Toronto
            </h3>
            <address className="border-l border-gray-200 pt-2 pl-6 text-gray-600 not-italic dark:border-white/10 dark:text-gray-400">
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900 dark:border-indigo-500 dark:text-white">
              London
            </h3>
            <address className="border-l border-gray-200 pt-2 pl-6 text-gray-600 not-italic dark:border-white/10 dark:text-gray-400">
              <p>114 Cobble Lane</p>
              <p>London N1 2EF</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 5. Simple centered

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          Contact sales
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Sales support</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel
              iaculis porttitor.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <BugAntIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Bug reports</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              Expedita qui non ut quia ipsum voluptatum ipsam pariatur. Culpa vitae ipsum minus eius vero quo quibusdam.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Report a bug <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <ComputerDesktopIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Technical support</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              Sint aut modi porro consequatur architecto commodi qui consequatur. Dignissimos adipisci minima.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Join our Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 6. With testimonial

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50 dark:fill-gray-800/40">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          Let’s talk about your project
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          We help companies and individuals build out their brand guidelines.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-gray-500 dark:text-gray-400">
              By submitting this form, I agree to the{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400">
                privacy policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
              className="h-12 w-auto dark:hidden"
            />
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-500.svg"
              className="h-12 w-auto not-dark:hidden"
            />
            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-gray-900 dark:text-white">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">Brenna Goyette</div>
                  <div className="text-sm/6 text-gray-600 dark:text-gray-400">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 7. Split with image

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full dark:bg-gray-800"
        />
      </div>
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Let's work together
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
              Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-gray-900 dark:text-white">
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400 dark:text-gray-500">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400 dark:text-gray-500">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                    Expected budget
                  </legend>
                  <div className="mt-4 space-y-4 text-sm/6 text-gray-600 dark:text-gray-400">
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="under_25k"
                        defaultChecked
                        id="budget-under-25k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-600 dark:before:bg-white dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/10 dark:disabled:bg-gray-800/50 dark:disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-under-25k">Less than $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="25k-50k"
                        id="budget-25k-50k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-600 dark:before:bg-white dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/10 dark:disabled:bg-gray-800/50 dark:disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="50k-100k"
                        id="budget-50k-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-600 dark:before:bg-white dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/10 dark:disabled:bg-gray-800/50 dark:disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="over_100k"
                        id="budget-over-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-600 dark:before:bg-white dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/10 dark:disabled:bg-gray-800/50 dark:disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-over-100k">$100K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8 dark:border-white/10">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

