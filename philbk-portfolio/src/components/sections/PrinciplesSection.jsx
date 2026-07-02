import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { principlesContent } from '../../content/principles'

function PrinciplesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id={sectionAnchors.principles}
      aria-labelledby="principles-heading"
      className="bg-surface/35 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={principlesContent.section.eyebrow}
            title={principlesContent.section.heading}
            description={principlesContent.section.description}
            headingId="principles-heading"
          />

          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:mt-16 md:grid-cols-2">
            {principlesContent.principles.map((principle, index) => (
              <li key={principle.id} className="border-t border-border pt-6 md:min-h-48">
                <span className="font-mono text-xs text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  )
}

export default PrinciplesSection
