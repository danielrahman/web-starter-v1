import type { SectionBlock } from '@/lib/content/models'
import { sectionBlockSchema } from '@/lib/content/schemas'

import { asArray, asObject, asString, optionalString } from './coerce'
import { normalizeLinkItem } from './link-item'

export function mapSectionBlockToPayload(block: SectionBlock): Record<string, unknown> {
  const payloadBlock: Record<string, unknown> = {
    ...block,
    blockType: block.type,
  }

  delete payloadBlock.type

  if (block.type === 'proofStrip') {
    payloadBlock.items = block.items.map((name) => ({ name }))
  }

  return payloadBlock
}

export function normalizeBlock(raw: unknown): SectionBlock | null {
  const block = asObject(raw)
  const type = asString(block.blockType, asString(block.type, ''))
  const id = asString(block.id, asString(block.blockName, `block-${Math.random().toString(36).slice(2, 8)}`))

  const normalized =
    type === 'hero'
      ? {
          type,
          id,
          eyebrow: optionalString(block.eyebrow),
          headline: asString(block.headline, ''),
          body: asString(block.body, ''),
          primaryCta: normalizeLinkItem(block.primaryCta) || undefined,
          secondaryCta: normalizeLinkItem(block.secondaryCta) || undefined,
        }
      : type === 'proofStrip'
        ? {
            type,
            id,
            title: optionalString(block.title),
            items: asArray(block.items)
              .map((item) => asString(asObject(item).name, asString(item, '')))
              .filter(Boolean),
          }
        : type === 'features'
          ? {
              type,
              id,
              title: asString(block.title, ''),
              intro: optionalString(block.intro),
              items: asArray(block.items).map((item) => {
                const feature = asObject(item)
                return {
                  title: asString(feature.title, ''),
                  description: asString(feature.description, ''),
                  eyebrow: optionalString(feature.eyebrow),
                }
              }),
            }
          : type === 'services'
            ? {
                type,
                id,
                title: asString(block.title, ''),
                intro: optionalString(block.intro),
                items: asArray(block.items).map((item) => {
                  const service = asObject(item)
                  return {
                    title: asString(service.title, ''),
                    description: asString(service.description, ''),
                    href: optionalString(service.href),
                  }
                }),
              }
            : type === 'richText'
              ? {
                  type,
                  id,
                  title: optionalString(block.title),
                  body: asString(block.body, ''),
                }
              : type === 'caseStudiesTeaser'
                ? {
                    type,
                    id,
                    title: asString(block.title, ''),
                    intro: optionalString(block.intro),
                    limit: typeof block.limit === 'number' ? block.limit : undefined,
                    cta: normalizeLinkItem(block.cta) || undefined,
                  }
                : type === 'testimonials'
                  ? {
                      type,
                      id,
                      title: optionalString(block.title),
                      items: asArray(block.items).map((item) => {
                        const testimonial = asObject(item)
                        return {
                          quote: asString(testimonial.quote, ''),
                          author: asString(testimonial.author, ''),
                          role: optionalString(testimonial.role),
                          company: optionalString(testimonial.company),
                        }
                      }),
                    }
                  : type === 'stats'
                    ? {
                        type,
                        id,
                        title: optionalString(block.title),
                        items: asArray(block.items).map((item) => {
                          const stat = asObject(item)
                          return {
                            label: asString(stat.label, ''),
                            value: asString(stat.value, ''),
                            description: optionalString(stat.description),
                          }
                        }),
                      }
                    : type === 'faq'
                      ? {
                          type,
                          id,
                          title: optionalString(block.title),
                          groupSlug: optionalString(block.groupSlug),
                          items: asArray(block.items).map((item) => {
                            const faq = asObject(item)
                            return {
                              question: asString(faq.question, ''),
                              answer: asString(faq.answer, ''),
                            }
                          }),
                        }
                      : type === 'cta'
                        ? {
                            type,
                            id,
                            title: asString(block.title, ''),
                            body: optionalString(block.body),
                            primaryCta: normalizeLinkItem(block.primaryCta) || undefined,
                            secondaryCta: normalizeLinkItem(block.secondaryCta) || undefined,
                          }
                        : type === 'contactForm'
                          ? {
                              type,
                              id,
                              title: asString(block.title, ''),
                              body: optionalString(block.body),
                              submitLabel: optionalString(block.submitLabel),
                            }
                          : null

  if (!normalized) {
    return null
  }

  return sectionBlockSchema.parse(normalized)
}
