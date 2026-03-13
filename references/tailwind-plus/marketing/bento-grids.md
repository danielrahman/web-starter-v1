# Bento Grids

Tailwind UI marketing blocks — 3 components.

## 1. Three column bento grid

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl dark:text-white">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl dark:shadow-none dark:outline dark:outline-white/20">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs dark:hidden"
                />
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full not-dark:hidden max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover dark:hidden"
                />
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover not-dark:hidden"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60 dark:shadow-none">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

## 2. Two row bento grid

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-releases.png"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">Releases</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Push to deploy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                  egestas sem pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-integrations.png"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">Integrations</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-security.png"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">Security</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Advanced access control
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-performance.png"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">Performance</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                  augue sed elit dictum vulputate.
                </p>
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

## 3. Two row bento grid with three column second row

- **Dark mode:** Yes
- **Language:** jsx

```jsx
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl dark:text-white">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-performance.png"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">Performance</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                  egestas sem pellentesque.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-releases.png"
                className="h-80 object-cover object-left not-dark:hidden lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">Releases</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">Push to deploy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae
                  odio.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-speed.png"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">Speed</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  Built for power users
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-integrations.png"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">Integrations</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-network.png"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">Network</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                  Globally distributed CDN
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                  Aenean vulputate justo commodo auctor vehicula in malesuada semper.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  )
}

```

---

