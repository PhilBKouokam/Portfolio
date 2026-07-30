import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Button from '../ui/Button'
import { navigationContent, sectionAnchors } from '../../content/navigation'
import { siteContent } from '../../content/site'
import { navigateToSection } from '../../utils/navigation'

function MobileNavigation({ isOpen, items, onClose, triggerRef }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const shouldRestoreTriggerFocusRef = useRef(true)

  useEffect(() => {
    if (!isOpen) return undefined

    const dialog = dialogRef.current
    const menuTrigger = triggerRef.current
    shouldRestoreTriggerFocusRef.current = true
    dialog.showModal()
    closeButtonRef.current?.focus()

    return () => {
      if (dialog.open) dialog.close()
      if (shouldRestoreTriggerFocusRef.current) menuTrigger?.focus()
    }
  }, [isOpen, triggerRef])

  if (!isOpen) return null
  const isHomePage = window.location.pathname === '/'
  const navigateAfterClose = (event, href) => {
    event.preventDefault()
    shouldRestoreTriggerFocusRef.current = false
    onClose()
    window.requestAnimationFrame(() => navigateToSection(null, href))
  }

  return (
    <dialog
      id="mobile-navigation"
      ref={dialogRef}
      aria-label={navigationContent.mobileLabel}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0 text-inherit backdrop:bg-background/80 backdrop:backdrop-blur-sm lg:hidden"
    >
      <div
        className="absolute inset-x-3 top-3 rounded-card border border-border bg-surface p-5 shadow-card sm:inset-x-6"
      >
        <div className="flex items-center justify-between border-b border-border/70 pb-5">
          <a
            href={isHomePage ? `#${sectionAnchors.top}` : '/'}
            onClick={(event) => {
              if (isHomePage) navigateAfterClose(event, `#${sectionAnchors.top}`)
              else onClose()
            }}
            className="text-lg font-bold tracking-[-0.04em] text-foreground"
          >
            {siteContent.wordmark}
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={navigationContent.menuCloseLabel}
            className="grid size-11 place-items-center rounded-button text-muted transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <X aria-hidden="true" size={21} strokeWidth={1.8} />
          </button>
        </div>

        <nav aria-label={navigationContent.mobileLabel} className="py-4">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={(event) => {
                    if (isHomePage) navigateAfterClose(event, item.href)
                    else onClose()
                  }}
                  className="block rounded-lg px-3 py-3.5 text-lg font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={siteContent.links.resume}
          className="w-full"
          onClick={onClose}
        >
          {siteContent.resume.label}
        </Button>
      </div>
    </dialog>
  )
}

export default MobileNavigation
