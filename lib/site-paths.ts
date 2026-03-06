export function getPagePath(slug: string): string {
  const normalizedSlug = slug.trim()

  if (!normalizedSlug || normalizedSlug === 'home') {
    return '/'
  }

  return `/${normalizedSlug}`
}

export function getCaseStudyPath(slug: string): string {
  return `/case-studies/${slug.trim()}`
}

export function getCollectionDocumentPath(collection: string, slug: string): string | undefined {
  const normalizedSlug = slug.trim()

  if (!normalizedSlug) {
    return undefined
  }

  switch (collection) {
    case 'pages':
      return getPagePath(normalizedSlug)
    case 'caseStudies':
      return getCaseStudyPath(normalizedSlug)
    default:
      return undefined
  }
}
