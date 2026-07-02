import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import CertificationCard from '../portfolio/CertificationCard'
import SectionHeading from '../ui/SectionHeading'
import { certificationsContent } from '../../content/certifications'
import { sectionAnchors } from '../../content/navigation'

function CertificationsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id={sectionAnchors.certifications}
      aria-labelledby="certifications-heading"
      className="border-t border-border/60 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={certificationsContent.section.eyebrow}
          title={certificationsContent.section.heading}
          description={certificationsContent.section.description}
          headingId="certifications-heading"
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2">
          {certificationsContent.items.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
            >
              <CertificationCard certification={certification} index={index} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CertificationsSection
