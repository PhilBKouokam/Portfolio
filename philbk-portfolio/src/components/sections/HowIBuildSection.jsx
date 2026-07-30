import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import ProcessStep from '../portfolio/ProcessStep'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { processContent } from '../../content/process'

function HowIBuildSection() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.45, ease: 'easeOut' },
  }

  return (
    <section
      id={sectionAnchors.how}
      aria-labelledby="how-heading"
      className="border-t border-border/60 bg-surface/30 py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <motion.div {...reveal}>
          <SectionHeading
            eyebrow={processContent.section.eyebrow}
            title={processContent.section.heading}
            description={processContent.section.description}
            headingId="how-heading"
          />
        </motion.div>

        <motion.ol
          {...reveal}
          className="relative mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-5"
        >
          {processContent.steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}

export default HowIBuildSection
