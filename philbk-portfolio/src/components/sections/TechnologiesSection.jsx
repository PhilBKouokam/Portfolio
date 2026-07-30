import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import SkillGroup from '../portfolio/SkillGroup'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { skillsContent } from '../../content/skills'

function TechnologiesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id={sectionAnchors.technologies}
      aria-labelledby="technologies-heading"
      className="border-t border-border/60 bg-surface/30 py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={skillsContent.section.eyebrow}
            title={skillsContent.section.heading}
            description={skillsContent.section.description}
            headingId="technologies-heading"
          />

          <div className="mt-12 sm:mt-16">
            {skillsContent.categories.map((group) => (
              <SkillGroup key={group.id} group={group} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TechnologiesSection
