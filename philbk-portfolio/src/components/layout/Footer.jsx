import Container from './Container'
import { siteContent } from '../../content/site'
import { navigationContent, sectionAnchors } from '../../content/navigation'
import { navigateToSection } from '../../utils/navigation'

function Footer() {
  const content = siteContent.pages.footer
  const isHomePage = window.location.pathname === '/'

  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="grid gap-6 text-sm text-muted sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p>{content.copyright}</p>
          <p className="mt-1">{content.technology}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            <li><a className="transition-colors hover:text-foreground" href={siteContent.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="transition-colors hover:text-foreground" href={siteContent.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="transition-colors hover:text-foreground" href={siteContent.links.resume}>Résumé</a></li>
            <li>
              <a
                className="transition-colors hover:text-foreground"
                href={isHomePage ? `#${sectionAnchors.top}` : '/'}
                aria-label={navigationContent.homeLabel}
                onClick={isHomePage ? (event) => navigateToSection(event, `#${sectionAnchors.top}`) : undefined}
              >
                {content.backToTopLabel}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
