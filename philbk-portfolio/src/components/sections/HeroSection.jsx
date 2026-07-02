import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, BriefcaseBusiness, Code2, Download, FileText, Mail } from 'lucide-react'
import Container from '../layout/Container'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { heroContent } from '../../content/hero'
import { sectionAnchors } from '../../content/navigation'
import { siteContent } from '../../content/site'

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const entrance = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  })
  const socialIcons = {
    code: Code2,
    briefcase: BriefcaseBusiness,
    mail: Mail,
    file: FileText,
  }

  return (
    <section
      id={sectionAnchors.top}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(148_163_184/0.045)_1px,transparent_1px)] bg-[size:5rem_100%] mask-[linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      />
      <Container className="py-14 sm:py-16 lg:py-14 xl:py-20">
        <div className="max-w-[72rem] text-center lg:text-left">
          <motion.div
            {...entrance(0.05)}
            className="flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {heroContent.badges.map((badge) => (
              <Badge
                key={badge.id}
                className={badge.emphasized ? 'border-success/30 text-foreground' : ''}
              >
                {badge.emphasized ? (
                  <span
                    aria-hidden="true"
                    className="mr-2 size-1.5 rounded-full bg-success"
                  />
                ) : null}
                {badge.label}
              </Badge>
            ))}
          </motion.div>

          <h1
            id="hero-heading"
            className="mt-6 max-w-6xl text-[clamp(2.75rem,5.6vw,5.75rem)] leading-[0.99] font-semibold tracking-[-0.055em] text-balance text-foreground"
          >
            {heroContent.headline}
          </h1>

          <motion.div
            {...entrance(0.19)}
            className="mx-auto mt-6 max-w-3xl space-y-1 text-base leading-7 text-pretty text-muted sm:text-lg sm:leading-8 lg:mx-0"
          >
            {heroContent.subheadline.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            {...entrance(0.26)}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <Button href={`#${sectionAnchors.projects}`} size="lg" className="sm:px-8">
              {heroContent.actions.primary.label}
              <ArrowDownRight aria-hidden="true" size={18} />
            </Button>
            <Button
              href={siteContent.links.resume}
              variant="secondary"
              size="lg"
              download={siteContent.resume.filename}
            >
              <Download aria-hidden="true" size={17} />
              {heroContent.actions.secondary.label}
            </Button>
          </motion.div>

          <motion.nav
            {...entrance(0.31)}
            aria-label={heroContent.professionalLinksLabel}
            className="mt-5"
          >
            <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {siteContent.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon]
                const isExternal = link.href.startsWith('http')

                return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={`${link.label}${isExternal ? ' (opens in a new tab)' : ''}`}
                    title={link.label}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    download={link.id === 'resume' ? siteContent.resume.filename : undefined}
                    className="grid size-10 place-items-center rounded-full text-muted transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
                  >
                    <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  </a>
                </li>
                )
              })}
            </ul>
          </motion.nav>

          <motion.ul
            {...entrance(0.36)}
            aria-label={heroContent.trustIndicatorsLabel}
            className="mt-7 flex flex-col items-center justify-center gap-3 border-t border-border/70 pt-5 text-xs font-medium tracking-wide text-muted sm:flex-row sm:flex-wrap sm:gap-0 lg:justify-start"
          >
            {heroContent.trustIndicators.map((indicator) => (
              <li
                key={indicator}
                className="sm:not-first:ml-4 sm:not-first:border-l sm:not-first:border-border sm:not-first:pl-4"
              >
                {indicator}
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
