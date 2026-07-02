import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import ProcessStep from '../portfolio/ProcessStep'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { processContent } from '../../content/process'

function ProcessSection() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.45, ease: 'easeOut' },
  }

  return (
    <section
      id={sectionAnchors.process}
      aria-labelledby="process-heading"
      className="border-t border-border/60 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <motion.div {...reveal}>
          <SectionHeading
            eyebrow={processContent.section.eyebrow}
            title={processContent.section.heading}
            description={processContent.section.description}
            headingId="process-heading"
          />
        </motion.div>

        <motion.figure
          {...reveal}
          className="mt-12 rounded-card border border-border bg-surface p-5 sm:mt-16 sm:p-7 lg:p-8"
        >
          <figcaption className="text-sm font-semibold text-foreground">
            {processContent.systemView.label}
          </figcaption>
          <ol className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-border sm:grid-cols-4 lg:grid-cols-8">
            {processContent.systemView.nodes.map((node, index) => (
              <li
                key={node}
                className="flex min-h-20 items-center border-r border-b border-border/80 px-3 py-4 text-center text-xs font-medium text-muted sm:text-sm lg:min-h-24 lg:border-b-0 lg:px-4"
              >
                <span className="mx-auto">
                  <span className="block font-mono text-[0.65rem] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 block">{node}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {processContent.systemView.explanation}
          </p>
        </motion.figure>

        <motion.ol
          {...reveal}
          className="mt-14 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-8"
        >
          {processContent.steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}

export default ProcessSection
