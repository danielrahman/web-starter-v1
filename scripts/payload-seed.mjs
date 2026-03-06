import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import {
  caseStudiesCollectionSchema,
  faqCollectionSchema,
  footerSchema,
  navigationSchema,
  pageSchema,
  siteConfigSchema,
} from '@/lib/content/schemas'
import { mapSeoToPayloadMeta } from '@/lib/content/payload/seo'
import { mapSectionBlockToPayload } from '@/lib/content/payload/block-mapper'
import { ensureCmsEnabled, getDocId, withPayload } from './_shared/payload-cli-utils.mjs'

ensureCmsEnabled('running payload seed')

async function readJSON(relativePath, schema) {
  const fullPath = path.join(process.cwd(), relativePath)
  const raw = await readFile(fullPath, 'utf8')
  const parsed = JSON.parse(raw)
  return schema.parse(parsed)
}

async function readPages() {
  const pagesDir = path.join(process.cwd(), 'content', 'pages')
  const files = await collectJSONFiles(pagesDir)
  const pages = await Promise.all(files.map((filePath) => readJSON(path.relative(process.cwd(), filePath), pageSchema)))

  return pages.sort((a, b) => a.slug.localeCompare(b.slug))
}

async function collectJSONFiles(directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await collectJSONFiles(entryPath)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.json')) {
      files.push(entryPath)
    }
  }

  return files
}

async function upsertBySlug(payload, collection, slug, data) {
  const existing = await payload.find({
    collection,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })

  const doc = Array.isArray(existing.docs) ? existing.docs[0] : null
  const docId = getDocId(doc)

  if (docId) {
    await payload.update({
      collection,
      id: docId,
      data,
      overrideAccess: true,
      draft: false,
    })

    return 'updated'
  }

  await payload.create({
    collection,
    data,
    overrideAccess: true,
    draft: false,
  })

  return 'created'
}

await withPayload(async (payload) => {
  const [siteSettings, navigation, footer, pages, caseStudiesData, faqData] = await Promise.all([
    readJSON(path.join('content', 'site.json'), siteConfigSchema),
    readJSON(path.join('content', 'navigation.json'), navigationSchema),
    readJSON(path.join('content', 'footer.json'), footerSchema),
    readPages(),
    readJSON(path.join('content', 'collections', 'case-studies.json'), caseStudiesCollectionSchema),
    readJSON(path.join('content', 'collections', 'faq.json'), faqCollectionSchema),
  ])

  const caseStudies = caseStudiesData.items
  const faqGroups = faqData.groups

  await payload.updateGlobal({
    slug: 'siteSettings',
    data: {
      name: siteSettings.name,
      tagline: siteSettings.tagline,
      description: siteSettings.description,
      defaultTitle: siteSettings.defaultTitle,
      defaultDescription: siteSettings.defaultDescription,
      contactEmail: siteSettings.contactEmail,
      ...(siteSettings.brand ? { brand: siteSettings.brand } : {}),
    },
    overrideAccess: true,
  })
  await payload.updateGlobal({
    slug: 'navigation',
    data: {
      ...(navigation.logoSource ? { logoSource: navigation.logoSource } : {}),
      ...(navigation.logo ? { logo: navigation.logo } : {}),
      items: navigation.items,
      cta: navigation.cta || null,
    },
    overrideAccess: true,
  })
  await payload.updateGlobal({
    slug: 'footer',
    data: footer,
    overrideAccess: true,
  })

  const results = {
    pages: { created: 0, updated: 0 },
    caseStudies: { created: 0, updated: 0 },
    faqs: { created: 0, updated: 0 },
  }

  for (const page of pages) {
    const action = await upsertBySlug(payload, 'pages', page.slug, {
      title: page.title,
      slug: page.slug,
      description: page.description,
      meta: mapSeoToPayloadMeta(page.seo),
      blocks: page.blocks.map((block) => mapSectionBlockToPayload(block)),
    })
    results.pages[action] += 1
  }

  for (const study of caseStudies) {
    const action = await upsertBySlug(payload, 'caseStudies', study.slug, {
      title: study.title,
      slug: study.slug,
      summary: study.summary,
      challenge: study.challenge,
      solution: study.solution,
      outcome: study.outcome,
      stats: study.stats,
      testimonial: study.testimonial || {},
      meta: mapSeoToPayloadMeta(study.seo),
    })
    results.caseStudies[action] += 1
  }

  for (const group of faqGroups) {
    const action = await upsertBySlug(payload, 'faqs', group.slug, {
      title: group.title,
      slug: group.slug,
      intro: group.intro,
      items: group.items,
    })
    results.faqs[action] += 1
  }

  console.log('Payload seed completed.')
  console.log(
    `- Pages: ${results.pages.created} created, ${results.pages.updated} updated (${pages.length} total from /content)`,
  )
  console.log(
    `- Case studies: ${results.caseStudies.created} created, ${results.caseStudies.updated} updated (${caseStudies.length} total from /content)`,
  )
  console.log(
    `- FAQ groups: ${results.faqs.created} created, ${results.faqs.updated} updated (${faqGroups.length} total from /content)`,
  )
  console.log('- Globals updated: siteSettings, navigation, footer')
})
