import { siteContent } from '../content/site'

export const defaultMetadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  canonicalUrl: siteContent.seo.url,
  robots: 'index, follow',
}
