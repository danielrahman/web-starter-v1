# Tailwind Plus Catalog

This directory is a vendored reference vault for future project work. It is intentionally present in the starter so agents and developers can pull from paid Tailwind Plus patterns without rebuilding common UI from nothing.

## Usage Rules

- This folder is non-runtime reference material.
- Do not import from `references/tailwind-plus` in production app code.
- Adapt snippets and components into `components/ui`, `components/site`, or `components/app`.
- Replace hardcoded Tailwind Plus brand colors, typography, and shadows with local tokens from `styles/theme.css`.
- Promote only the variants a project actually needs.

## Inventory

### Marketing

- Path: `references/tailwind-plus/marketing`
- File count: 20
- Best for: heroes, headers, footers, feature sections, testimonials, FAQ, pricing, content sections, contact sections, newsletters, logo clouds
- Common starting files:
  - `heroes.md`
  - `headers.md`
  - `feature-sections.md`
  - `testimonials.md`
  - `faq-sections.md`
  - `footers.md`
  - `contact-sections.md`

### Application UI

- Path: `references/tailwind-plus/application-ui`
- File count: 49
- Best for: dashboards, sidebars, navbars, page headers, settings screens, detail screens, tables, empty states, forms, dropdowns, dialogs
- Common starting files:
  - `sidebar-navigation.md`
  - `navbars.md`
  - `page-headings.md`
  - `tables.md`
  - `stats.md`
  - `empty-states.md`
  - `settings-screens.md`
  - `form-layouts.md`

### Ecommerce

- Path: `references/tailwind-plus/ecommerce`
- File count: 21
- Best for: product pages, category pages, carts, checkout, order history, promos, reviews, storefronts
- Common starting files:
  - `storefront-pages.md`
  - `product-pages.md`
  - `category-pages.md`
  - `shopping-carts.md`
  - `checkout-pages.md`
  - `promo-sections.md`

### Catalyst

- Paths:
  - `references/tailwind-plus/catalyst/components`
  - `references/tailwind-plus/catalyst/docs`
- File counts:
  - components: 27
  - docs: 27
- Best for: starter-owned primitives and app shell components promoted into runtime code
- Useful entry points:
  - `docs/getting-started.md`
  - `components/button.tsx`
  - `components/input.tsx`
  - `components/dialog.tsx`
  - `components/dropdown.tsx`
  - `components/sidebar-layout.tsx`
  - `components/table.tsx`

## Recommended Promotion Path

### Marketing work

Promote adapted components into `components/site`.

Examples:

- header or nav
- hero
- feature grid
- proof strip
- testimonials
- FAQ
- CTA
- footer

### Dashboard or app work

Promote adapted components into `components/app`.

Examples:

- app shell
- sidebar
- top bar
- page header
- stats cards
- tables
- filters
- forms
- dialogs
- empty states

### Shared primitives

Promote shared building blocks into `components/ui`.

Examples:

- button
- badge
- card
- container
- input
- textarea
- select
- dropdown

## Working Conventions

- Prefer adapting from the smallest suitable source instead of pasting entire pages.
- Preserve responsive behavior from the reference implementation.
- Normalize class names and props to match the starter's conventions.
- If a promoted component becomes generally useful, keep it generic and reusable.
- Leave the reference files untouched unless you are intentionally refreshing the vendored source.
