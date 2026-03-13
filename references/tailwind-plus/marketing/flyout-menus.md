# Flyout Menus

Tailwind UI marketing blocks — 7 components.

## 1. Stacked with footer actions

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="p-4">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
              >
                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 2. Full-width two-columns

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

const engagement = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: UsersIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookOpenIcon },
  { name: 'Webinars', href: '#', icon: VideoCameraIcon },
]
const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]

export default function Example() {
  return (
    <Popover className="relative isolate z-50 shadow-sm">
      <div className="bg-white py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
            Solutions
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 bg-white transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-900"
      >
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:shadow-none dark:ring-white/10"
        />
        <div className="relative bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Engagement</h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {engagement.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900 dark:text-white"
                      >
                        <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400 dark:text-gray-500" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Resources</h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900 dark:text-white"
                      >
                        <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400 dark:text-gray-500" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Recent posts</h3>
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto dark:bg-gray-800"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time dateTime={post.datetime} className="text-sm/6 text-gray-600 dark:text-gray-400">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="mt-2 text-sm/6 font-semibold text-gray-900 dark:text-white">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 3. Stacked with footer list

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, CalendarDaysIcon, LifebuoyIcon } from '@heroicons/react/24/outline'

const resources = [
  { name: 'Help center', description: 'Get all of your questions answered', href: '#', icon: LifebuoyIcon },
  { name: 'Guides', description: 'Learn how to maximize our platform', href: '#', icon: BookmarkSquareIcon },
  { name: 'Events', description: 'See meet-ups and other events near you', href: '#', icon: CalendarDaysIcon },
]
const recentPosts = [
  { id: 1, title: 'Boost your conversion rate', href: '#', date: 'Mar 5, 2023', datetime: '2023-03-05' },
  {
    id: 2,
    title: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    date: 'Feb 25, 2023',
    datetime: '2023-02-25',
  },
  { id: 3, title: 'Improve your customer experience', href: '#', date: 'Feb 21, 2023', datetime: '2023-02-21' },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
        <span>Resources</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-900 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="p-4">
            {resources.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-8 dark:bg-gray-800/50">
            <div className="flex justify-between">
              <h3 className="text-sm/6 font-semibold text-gray-500 dark:text-gray-400">Recent posts</h3>
              <a href="#" className="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">
                See all <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <ul role="list" className="mt-6 space-y-6">
              {recentPosts.map((post) => (
                <li key={post.id} className="relative">
                  <time dateTime={post.datetime} className="block text-xs/6 text-gray-600 dark:text-gray-400">
                    {post.date}
                  </time>
                  <a href={post.href} className="block truncate text-sm/6 font-semibold text-gray-900 dark:text-white">
                    {post.title}
                    <span className="absolute inset-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 4. Full-width

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function Example() {
  return (
    <Popover className="relative isolate z-50 shadow-sm">
      <div className="bg-white py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
            Solutions
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 bg-white transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-900"
      >
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:shadow-none dark:ring-white/15"
        />
        <div className="relative bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                  />
                </div>
                <a href={item.href} className="mt-6 block font-semibold text-gray-900 dark:text-white">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5 dark:divide-white/5 dark:border-white/10">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 5. Simple with descriptions

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Blog', description: 'Learn about tips, product updates and company culture', href: '#' },
  {
    name: 'Help center',
    description: 'Get all of your questions answered in our forums of contact support',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it', href: '#' },
  { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously', href: '#' },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          {solutions.map((item) => (
            <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5">
              <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 6. Two-column

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools and find out expectations',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  {
    name: 'Reports',
    description: 'Edit, manage and create newly informed decisions',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 lg:max-w-3xl dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 px-8 py-6 dark:bg-gray-700/50">
            <div className="flex items-center gap-x-3">
              <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Enterprise</h3>
              <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
                New
              </p>
            </div>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Empower your entire team with even more advanced tools.
            </p>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

## 7. Simple

- **Dark mode:** Yes
- **Language:** jsx

```jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Analytics', href: '#' },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Automations', href: '#' },
  { name: 'Reports', href: '#' },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:text-white dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
          {solutions.map((item) => (
            <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}

```

---

