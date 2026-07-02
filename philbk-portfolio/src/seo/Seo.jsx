import { useEffect } from 'react'
import { siteContent } from '../content/site'
import { defaultMetadata } from './metadata'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.append(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function updateCanonical(url) {
  const existingCanonical = document.head.querySelector('link[rel="canonical"]')

  if (!url) {
    existingCanonical?.remove()
    return
  }

  const canonical = existingCanonical || document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  canonical.setAttribute('href', url)

  if (!existingCanonical) document.head.append(canonical)
}

function Seo({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  canonicalUrl = defaultMetadata.canonicalUrl,
  robots = defaultMetadata.robots,
}) {
  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteContent.name,
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: siteContent.seo.locale,
    })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: siteContent.seo.socialCard,
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    updateCanonical(canonicalUrl)
  }, [canonicalUrl, description, robots, title])

  return null
}

export default Seo
