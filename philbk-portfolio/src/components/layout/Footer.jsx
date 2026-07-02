import Container from './Container'
import { siteContent } from '../../content/site'

function Footer() {
  const content = siteContent.pages.footer

  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{content.copyright}</p>
        <p>{content.technology}</p>
      </Container>
    </footer>
  )
}

export default Footer
