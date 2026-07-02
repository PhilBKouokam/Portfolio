import { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navigationContent, sectionAnchors } from '../../content/navigation'
import { siteContent } from '../../content/site'
import Button from '../ui/Button'
import Container from './Container'
import MobileNavigation from './MobileNavigation'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuTriggerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/75"
    >
      <Container className="flex h-18 items-center justify-between">
        <a
          href={`#${sectionAnchors.top}`}
          aria-label={navigationContent.homeLabel}
          className="text-xl font-bold tracking-[-0.05em] text-foreground transition-colors hover:text-primary-hover"
        >
          {siteContent.wordmark}
        </a>

        <nav aria-label={navigationContent.desktopLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationContent.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={siteContent.links.resume} size="sm" download={siteContent.resume.filename}>
            {siteContent.resume.label}
          </Button>
        </div>

        <button
          ref={menuTriggerRef}
          type="button"
          aria-label={navigationContent.menuOpenLabel}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
          className="grid size-11 place-items-center rounded-button border border-border text-muted transition-colors hover:border-slate-500 hover:bg-white/5 hover:text-foreground lg:hidden"
        >
          <Menu aria-hidden="true" size={21} strokeWidth={1.8} />
        </button>
      </Container>

      <MobileNavigation
        isOpen={isMenuOpen}
        items={navigationContent.items}
        onClose={closeMenu}
        triggerRef={menuTriggerRef}
      />
    </motion.header>
  )
}

export default Header
