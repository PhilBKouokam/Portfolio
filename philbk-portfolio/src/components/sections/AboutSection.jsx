import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { aboutContent } from '../../content/about'
import { sectionAnchors } from '../../content/navigation'

function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id={sectionAnchors.about} aria-labelledby="about-heading" className="border-t border-border/60 py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.heading}
            headingLevel="h2"
            headingId="about-heading"
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <div className="max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-8">
            {[...aboutContent.paragraphs, aboutContent.philosophy].map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'text-foreground' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutSection
