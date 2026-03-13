## Purpose

This repository is a starter. It includes a vendored Tailwind Plus reference library under `references/tailwind-plus` so future projects can reuse proven marketing, application, ecommerce, and Catalyst patterns without starting from scratch.

## Runtime vs Reference

- `components/ui`: starter-owned shared primitives.
- `components/site`: starter-owned marketing and public site components.
- `components/app`: starter-owned app and dashboard components.
- `references/tailwind-plus`: non-runtime source vault. Do not import these files directly into app routes or production components.

## Relevance Gate

Only use the Tailwind Plus workflow when the task is clearly about UI composition, UI implementation, layout, sections, navigation, dashboards, forms, design polish, or promoting new reusable frontend components.

Ignore `references/tailwind-plus` entirely when the task is unrelated, including:

- backend or API work
- Payload config or collection modeling
- data fetching, business logic, or utilities
- tests, CI, scripts, or tooling
- bug fixes that do not require new UI composition
- refactors unrelated to frontend components

## Agent Workflow

When asked to build or refine UI:

1. Check `components/ui`, `components/site`, and `components/app` first.
2. If no suitable runtime component exists, consult `references/tailwind-plus/CATALOG.md`.
3. Adapt the relevant Tailwind Plus source into a starter-owned component under `components/site` or `components/app`.
4. Replace raw Tailwind Plus branding choices with local tokens from `styles/theme.css`.
5. Keep the promoted component responsive, accessible, and easy to reuse.

## Promotion Rules

- Never wire runtime pages directly to files in `references/tailwind-plus`.
- Treat `references/tailwind-plus` as source material only.
- Promote only the variants the project actually needs.
- If a new component is broadly reusable, keep its API generic and data-driven.
- Prefer a small curated runtime library over a large pile of imported variants.

## Tailwind Plus Notes

- Marketing patterns live under `references/tailwind-plus/marketing`.
- Dashboard and app patterns live under `references/tailwind-plus/application-ui`.
- Ecommerce patterns live under `references/tailwind-plus/ecommerce`.
- Catalyst primitives and docs live under `references/tailwind-plus/catalyst`.

Catalyst components may require dependencies such as `@headlessui/react`, `@heroicons/react`, and `motion` when promoted into runtime code.
