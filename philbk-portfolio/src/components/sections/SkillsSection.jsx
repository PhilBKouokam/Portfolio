import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import SkillGroup from '../portfolio/SkillGroup'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { skillsContent } from '../../content/skills'

function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id={sectionAnchors.skills}
      aria-labelledby="skills-heading"
      className="bg-surface/35 py-20 sm:py-24 lg:py-32"
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
            headingId="skills-heading"
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

export default SkillsSection
