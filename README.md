# Marketing Website Starter (Next.js + Optional Payload CMS)

Reusable starter for high-volume marketing site delivery with one frontend and two runtime content modes.

## Stack

- Next.js App Router
- TypeScript (strict)
- Tailwind CSS v4
- Payload CMS (optional via `CMS_ENABLED`)
- Turso/libSQL (`@payloadcms/db-sqlite`)
- Cloudflare R2 (S3-compatible via `@payloadcms/storage-s3`)
- Zod
- Resend (optional)

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run test:integration` (seed idempotence + fallback policy integration checks)
- `npm run verify:cms` (validates CMS env + Turso/libSQL query + R2 endpoint/public URL)
- `npm run payload:seed` (imports file content from `/content` into Payload globals/collections)
- `npm run payload:create-admin` (creates first Payload admin user)

## Exact Setup

### 1) Install

```bash
npm install
cp .env.example .env
```

### 2) Mode A: File Content (`CMS_ENABLED=false`)

Set `.env`:

```bash
CMS_ENABLED=false
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run:

```bash
npm run dev
```

Verify:

- `http://localhost:3000/` renders file content from `/content`
- `http://localhost:3000/services` renders file page
- `http://localhost:3000/admin` returns 404 (CMS disabled)
- Payload API routes (for example `/api/graphql` and `/api/graphql-playground`) return not found behavior
- When `CMS_ENABLED=false`, Payload services must not initialize for `/admin` or Payload API requests

### 3) Mode B: Payload CMS (`CMS_ENABLED=true`)

Set `.env`:

```bash
CMS_ENABLED=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
PAYLOAD_SECRET=replace-with-long-random-secret
DATABASE_URL=libsql://<db-name>-<org>.turso.io
TURSO_AUTH_TOKEN=<turso-token>
S3_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
S3_BUCKET=<r2-bucket-name>
S3_ACCESS_KEY_ID=<r2-access-key-id>
S3_SECRET_ACCESS_KEY=<r2-secret-access-key>
S3_PUBLIC_BASE_URL=https://<your-public-media-domain>
```

Local-only CMS dev fallback (if you do not want remote Turso while developing):

```bash
DATABASE_URL=file:./payload.db
TURSO_AUTH_TOKEN=local-dev-token
```

Validate CMS config and DB connectivity:

```bash
npm run verify:cms
```

Seed Payload from file content:

```bash
npm run payload:seed
```

`payload:seed` reads `/content` and upserts:

- globals: `siteSettings`, `navigation`, `footer`
- collections: `pages`, `caseStudies`, `faqs`

Create the first admin user:

```bash
npm run payload:create-admin -- --password "replace-with-strong-password"
```

Default admin email is `rahman.daniel3@gmail.com`.  
Override via `--email` or `PAYLOAD_ADMIN_EMAIL`.

Run:

```bash
npm run dev
```

Verify:

- `http://localhost:3000/admin` opens Payload admin/login
- `http://localhost:3000/api/contact` persists submissions into `submissions`
- media collection uses R2 S3-compatible storage adapter

## Build and Type Safety

```bash
npm run typecheck
npm run lint
npm run build
```

## Content Adapter Architecture

Frontend only consumes normalized domain models:

- `SiteConfig`
- `Navigation`
- `Footer`
- `Page`
- `SectionBlock`
- `CaseStudy`
- `FAQItem`
- `ContactSubmission`

Adapter layer:

- [`/Users/danielrahman/Desktop/web-starter-v1/lib/content/content-source.ts`](/Users/danielrahman/Desktop/web-starter-v1/lib/content/content-source.ts)
- [`/Users/danielrahman/Desktop/web-starter-v1/lib/content/file-content-source.ts`](/Users/danielrahman/Desktop/web-starter-v1/lib/content/file-content-source.ts)
- [`/Users/danielrahman/Desktop/web-starter-v1/lib/content/payload-content-source.ts`](/Users/danielrahman/Desktop/web-starter-v1/lib/content/payload-content-source.ts)
- [`/Users/danielrahman/Desktop/web-starter-v1/lib/content/get-content-source.ts`](/Users/danielrahman/Desktop/web-starter-v1/lib/content/get-content-source.ts)

`getContentSource()` switches implementation by `CMS_ENABLED`, so sections/pages are source-agnostic.

## Payload Fallback Policy

Payload mode can read from file content when CMS data is empty, controlled by `CMS_FILE_FALLBACK_MODE`:

- `always` (default in development): fallback for empty initial state and runtime Payload errors
- `bootstrap` (default in production): fallback only for empty initial state, never for runtime Payload errors
- `never`: no fallback to `/content` in Payload mode

Recommended production setting is `bootstrap` or `never`. Do not allow runtime DB errors to be hidden by fallback.

## Section System

`SectionBlock` discriminated union supports:

- `hero`
- `proofStrip`
- `features`
- `services`
- `richText`
- `caseStudiesTeaser`
- `testimonials`
- `stats`
- `faq`
- `cta`
- `contactForm`

Dynamic renderer:

- [`/Users/danielrahman/Desktop/web-starter-v1/components/sections/section-renderer.tsx`](/Users/danielrahman/Desktop/web-starter-v1/components/sections/section-renderer.tsx)

The following are page-level layout sections (not part of `SectionBlock`):

- [`/Users/danielrahman/Desktop/web-starter-v1/components/sections/simple-page-header-section.tsx`](/Users/danielrahman/Desktop/web-starter-v1/components/sections/simple-page-header-section.tsx)
- [`/Users/danielrahman/Desktop/web-starter-v1/components/sections/listing-teaser-section.tsx`](/Users/danielrahman/Desktop/web-starter-v1/components/sections/listing-teaser-section.tsx)
- [`/Users/danielrahman/Desktop/web-starter-v1/components/sections/card-grid-section.tsx`](/Users/danielrahman/Desktop/web-starter-v1/components/sections/card-grid-section.tsx)

## Payload Configuration

- Globals: `siteSettings`, `navigation`, `footer`
- Collections: `pages`, `caseStudies`, `faqs`, `media`, `submissions`
- Auth collection: `users`

Config entry:

- [`/Users/danielrahman/Desktop/web-starter-v1/payload.config.ts`](/Users/danielrahman/Desktop/web-starter-v1/payload.config.ts)

R2 public URL generation is configured on the `media` collection via `generateFileURL`, using `S3_PUBLIC_BASE_URL`.

## Contact Form Behavior

Route:

- [`/Users/danielrahman/Desktop/web-starter-v1/app/api/contact/route.ts`](/Users/danielrahman/Desktop/web-starter-v1/app/api/contact/route.ts)

Features:

- Zod validation
- honeypot field
- Mode A: optional Resend, else logs submission
- Mode B: persists to Payload `submissions`, optional Resend

## Repository Layout

```text
app/
components/
  sections/
  ui/
content/
  pages/
  collections/
lib/
  content/
  payload/
payload/
  blocks/
  collections/
  fields/
  globals/
public/
scripts/
styles/
sections/
ui/
site.config.ts
payload.config.ts
.env.example
README.md
```
