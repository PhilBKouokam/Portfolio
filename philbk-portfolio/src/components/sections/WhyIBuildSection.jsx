import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { aboutContent } from '../../content/about'
import { sectionAnchors } from '../../content/navigation'

function WhyIBuildSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id={sectionAnchors.why} aria-labelledby="why-heading" className="border-t border-border/60 py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-24"
        >
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.heading}
            headingLevel="h2"
            headingId="why-heading"
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <div className="max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-8">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'text-foreground' : ''}>
                {paragraph}
              </p>
            ))}
            <blockquote className="mt-10 border-l-2 border-primary pl-6 sm:pl-8">
              <p className="text-2xl leading-9 font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-10">
                {aboutContent.closingStatement}
              </p>
            </blockquote>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default WhyIBuildSection
