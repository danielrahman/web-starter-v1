# Logo Clouds

Tailwind UI marketing blocks — 6 components.

## 1. Simple with heading

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
          />
          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}

```

---

## 2. Simple with call-to-action

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
          />
          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 inset-ring inset-ring-gray-900/5 dark:bg-gray-800/75 dark:text-gray-400 dark:inset-ring-white/10">
            <span className="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <span aria-hidden="true" className="absolute inset-0" /> Read our customer stories{' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

```

---

## 3. Simple left-aligned

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg/8 font-semibold text-gray-900 dark:text-white">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:hidden"
            />
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left not-dark:hidden lg:col-span-1"
            />

            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:hidden"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left not-dark:hidden lg:col-span-1"
            />

            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:hidden"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left not-dark:hidden lg:col-span-1"
            />

            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:hidden"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left not-dark:hidden lg:col-span-1"
            />

            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:hidden"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain object-left not-dark:hidden lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 4. Split with logos on right

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Trusted by the most innovative teams
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Create account
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200"
              >
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
              width={105}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg"
              width={105}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />

            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg"
              width={104}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg"
              width={104}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />

            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
              width={140}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg"
              width={140}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />

            <img
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/laravel-logo-gray-900.svg"
              width={136}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/laravel-logo-white.svg"
              width={136}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />

            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />

            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
              width={147}
              height={48}
              className="max-h-12 w-full object-contain object-left dark:hidden"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg"
              width={147}
              height={48}
              className="max-h-12 w-full object-contain object-left not-dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 5. Simple

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
          />
          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
          />

          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
          />
          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}

```

---

## 6. Grid

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400/5 p-8 sm:p-10 dark:bg-white/5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 dark:bg-white/5">
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 dark:bg-white/5">
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 dark:bg-white/5">
            <img
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 dark:bg-white/5">
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 dark:bg-white/5">
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:hidden"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain not-dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

