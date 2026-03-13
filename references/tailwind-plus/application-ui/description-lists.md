# Description Lists

Tailwind UI blocks — 6 components.

## 1. Left-aligned

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-white/10">
        <dl className="divide-y divide-gray-100 dark:divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              margotfoster@example.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-white">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

```

---

## 2. Left-aligned in card

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-300">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-100 dark:border-white/5">
        <dl className="divide-y divide-gray-100 dark:divide-white/5">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              margotfoster@example.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-100">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-gray-100">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-gray-100">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

```

---

## 3. Left-aligned striped

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-white/5">
        <dl className="divide-y divide-gray-100 dark:divide-white/5">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">Margot Foster</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-900">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">Backend Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              margotfoster@example.com
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-900">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">$120,000</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-900">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-white">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

```

---

## 4. Two-column

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2 dark:text-gray-400">Margot Foster</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2 dark:text-gray-400">Backend Developer</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2 dark:text-gray-400">margotfoster@example.com</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2 dark:text-gray-400">$120,000</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2 dark:text-gray-400">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0 dark:border-white/10">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 dark:text-white">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

```

---

## 5. Left-aligned with inline actions

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-white/10">
        <dl className="divide-y divide-gray-100 dark:divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Full name</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <span className="grow">Margot Foster</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Application for</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <span className="grow">Backend Developer</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Email address</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <span className="grow">margotfoster@example.com</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Salary expectation</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <span className="grow">$120,000</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">About</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <span className="grow">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">Attachments</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-200 dark:text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800 dark:bg-transparent dark:text-gray-400 dark:hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-gray-900 dark:text-white">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-200 dark:text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800 dark:bg-transparent dark:text-gray-400 dark:hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </>
  )
}

```

---

## 6. Narrow with hidden labels

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-xs outline-1 outline-gray-900/5 dark:bg-gray-800/50 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <dl className="flex flex-wrap">
          <div className="flex-auto pt-6 pl-6">
            <dt className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">Amount</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">$10,560.00</dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-500/15 dark:text-green-400 dark:inset-ring-green-500/20">
              Paid
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6 dark:border-white/5">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 font-medium text-gray-900 dark:text-white">Alex Curren</dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 text-gray-500 dark:text-gray-300">
              <time dateTime="2023-01-31">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 text-gray-500 dark:text-gray-300">Paid with MasterCard</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6 dark:border-white/5">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Download receipt <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

```

---

