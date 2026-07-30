import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Download } from 'lucide-react'
import Container from '../layout/Container'
import Button from '../ui/Button'
import { heroContent } from '../../content/hero'
import { sectionAnchors } from '../../content/navigation'
import { siteContent } from '../../content/site'
import { navigateToSection } from '../../utils/navigation'

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const entrance = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  })
  return (
    <section
      id={sectionAnchors.top}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(148_163_184/0.04)_1px,transparent_1px)] bg-[size:5rem_100%] mask-[linear-gradient(to_bottom,transparent,black_14%,black_84%,transparent)]"
      />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[76rem]">
          <motion.p
            {...entrance(0.05)}
            className="text-sm font-semibold tracking-[0.16em] text-primary uppercase"
          >
            {heroContent.eyebrow}
          </motion.p>

          <h1
            id="hero-heading"
            tabIndex="-1"
            data-section-heading
            className="mt-7 max-w-6xl text-[clamp(2.8rem,6.2vw,6.5rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-foreground"
          >
            <span className="block">{heroContent.headline[0]}</span>
            {' '}
            <span className="mt-2 block text-muted sm:mt-3">{heroContent.headline[1]}</span>
          </h1>

          <motion.p
            {...entrance(0.19)}
            className="mt-7 max-w-3xl text-base leading-7 text-pretty text-muted sm:mt-8 sm:text-lg sm:leading-8"
          >
            {heroContent.supportingParagraph}
          </motion.p>

          <motion.div
            {...entrance(0.26)}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href={`#${sectionAnchors.products}`}
              onClick={(event) => navigateToSection(event, `#${sectionAnchors.products}`)}
              size="lg"
              className="sm:px-8"
            >
              {heroContent.actions.primary.label}
              <ArrowDownRight aria-hidden="true" size={18} />
            </Button>
            <Button
              href={siteContent.links.resume}
              variant="secondary"
              size="lg"
            >
              <Download aria-hidden="true" size={17} />
              {heroContent.actions.secondary.label}
            </Button>
          </motion.div>

          <motion.div {...entrance(0.34)} className="mt-12 border-t border-border/70 pt-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              {heroContent.workflowLabel}
            </p>
            <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-foreground sm:gap-x-4">
              {heroContent.workflow.map((stage, index) => (
                <li key={stage} className="flex items-center gap-2 sm:gap-4">
                  <span>{stage}</span>
                  {index < heroContent.workflow.length - 1 ? (
                    <span aria-hidden="true" className="text-primary">→</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
