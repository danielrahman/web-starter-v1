import type {
  CaseStudy,
  ContactSubmission,
  ContactSubmissionInput,
  FAQGroup,
  Footer,
  Navigation,
  Page,
  SiteConfig,
} from './models'

export interface ContentSource {
  getSiteConfig(): Promise<SiteConfig>
  getNavigation(): Promise<Navigation>
  getFooter(): Promise<Footer>
  getPages(): Promise<Page[]>
  getPageBySlug(slug: string): Promise<Page | null>
  getCaseStudies(limit?: number): Promise<CaseStudy[]>
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | null>
  getFAQGroup(slug: string): Promise<FAQGroup | null>
  createContactSubmission(input: ContactSubmissionInput): Promise<ContactSubmission>
}
