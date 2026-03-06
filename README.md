# Marketing Website Starter (Next.js + Optional Payload CMS)

Reusable starter for high-volume marketing site delivery with one frontend and two runtime content modes.

## Stack

- Next.js App Router
- TypeScript (strict)
- Tailwind CSS v4
- Payload CMS (optional via `CMS_ENABLED`)
- Payload SEO plugin
- Payload Redirects plugin
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
- `npm run verify:cms` (validates CMS env + libSQL/SQLite query + active media storage mode)
- `npm run payload:seed` (imports file content from `/content` into Payload globals/collections)
- `npm run payload:create-admin` (creates first Payload admin user)
- `npm run payload:push-local-to-remote` (copies local Payload DB content to Turso and uploads local media files to S3/R2)

## Exact Setup

### 1) Install

```bash
npm install
cp .env.example .env
```

`.env.example` uses `DATABASE_URL=file:./payload.db` by default, so the fastest local CMS setup does not require Turso or S3/R2.

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
DATABASE_URL=file:./payload.db
PAYLOAD_LOCAL_MEDIA_DIR=media
```

That setup stores:

- structured CMS data in local SQLite
- uploaded media files on disk in `./media`

If you want Turso + S3/R2:

```bash
DATABASE_URL=libsql://<db-name>-<org>.turso.io
TURSO_AUTH_TOKEN=<turso-token>
S3_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
S3_BUCKET=<r2-bucket-name>
S3_ACCESS_KEY_ID=<r2-access-key-id>
S3_SECRET_ACCESS_KEY=<r2-secret-access-key>
S3_PUBLIC_BASE_URL=https://<your-public-media-domain>
```

Optional env vars:

```bash
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
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
npm run payload:create-admin -- --email "admin@example.com" --password "replace-with-strong-password"
```

If `--email` is omitted, the script defaults to `admin@example.com`.

Run:

```bash
npm run dev
```

Verify:

- `http://localhost:3000/admin` opens Payload admin/login
- `POST http://localhost:3000/api/contact` persists submissions into `submissions`, for example:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "content-type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Hello from README verification",
    "honey": ""
  }'
```

- media collection stores files in `./media` when S3 env vars are empty
- media collection switches to the R2 S3-compatible storage adapter when all `S3_*` vars are set

### 4) Push Local CMS Data To Turso + S3/R2

Once you have been working locally with:

- `DATABASE_URL=file:./payload.db`
- `PAYLOAD_LOCAL_MEDIA_DIR=media`

and you are ready to move that data into Turso + S3/R2, update `.env` to the remote values above and run:

```bash
npm run payload:push-local-to-remote
```

Defaults:

- source database: `file:./payload.db`
- source media directory: `./media`

Optional flags:

```bash
npm run payload:push-local-to-remote -- --source-db file:./payload-local.db
npm run payload:push-local-to-remote -- --source-media-dir ./media
npm run payload:push-local-to-remote -- --media-prefix my-site
```

What the script does:

- uploads local files from the source media directory into the configured S3/R2 bucket
- copies Payload tables from the source SQLite DB into the target Turso DB
- preserves media filenames and existing `prefix` values when present

The target bootstrap skips ephemeral admin/session tables and is intended for initial remote population, not ongoing two-way sync.

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

- [lib/content/content-source.ts](./lib/content/content-source.ts)
- [lib/content/file-content-source.ts](./lib/content/file-content-source.ts)
- [lib/content/payload-content-source.ts](./lib/content/payload-content-source.ts)
- [lib/content/get-content-source.ts](./lib/content/get-content-source.ts)

`getContentSource()` switches implementation by `CMS_ENABLED`, so sections/pages are source-agnostic.

## Payload Fallback Behavior

Payload mode still falls back to file content when the CMS is empty:

- development: fallback for empty state and runtime errors
- production: fallback only for empty initial state

That behavior is now internal, not environment-driven.

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

- [components/sections/section-renderer.tsx](./components/sections/section-renderer.tsx)

The following are page-level layout sections (not part of `SectionBlock`):

- [components/sections/simple-page-header-section.tsx](./components/sections/simple-page-header-section.tsx)
- [components/sections/listing-teaser-section.tsx](./components/sections/listing-teaser-section.tsx)
- [components/sections/card-grid-section.tsx](./components/sections/card-grid-section.tsx)

## Payload Configuration

- Globals: `siteSettings`, `navigation`, `footer`
- Collections: `pages`, `caseStudies`, `faqs`, `media`, `submissions`, `redirects`
- Auth collection: `users`

Config entry:

- [payload.config.ts](./payload.config.ts)

R2 public URL generation is configured on the `media` collection via `generateFileURL`, using `S3_PUBLIC_BASE_URL`.

Uploads are automatically namespaced by project hostname or folder name, so shared R2 buckets still show per-project directories without extra env setup.

When S3 is not configured, the same `media` collection falls back to Payload local disk storage via `PAYLOAD_LOCAL_MEDIA_DIR` (default `media`).

The official SEO plugin adds an SEO tab to `pages` and `caseStudies`, and the official Redirects plugin stores redirects in the `redirects` collection. Frontend redirects are applied through [`middleware.ts`](./middleware.ts).

## Contact Form Behavior

Route:

- [app/api/contact/route.ts](./app/api/contact/route.ts)

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
