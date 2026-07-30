export function navigateToSection(event, href) {
  if (!href?.startsWith('#')) return

  const scrollTarget = document.querySelector(href)
  if (!scrollTarget) return
  const focusTarget = scrollTarget.querySelector('[data-section-heading]') || scrollTarget

  event?.preventDefault()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  focusTarget.focus({ preventScroll: true })
  scrollTarget.scrollIntoView({
    behavior: reducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
  window.history.replaceState(null, '', href)
}
