import { motion, useReducedMotion } from 'framer-motion'
import ProjectActions from '../ui/ProjectActions'
import ProjectPreview from '../ui/ProjectPreview'
import TechList from '../ui/TechList'

function FeaturedProject({ project, actions, details }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="overflow-hidden rounded-[1.75rem] border border-border bg-surface p-4 shadow-card sm:p-6 lg:p-8"
    >
      <ProjectPreview
        screenshot={project.screenshot}
        altText={project.altText}
        featured
      />

      <div className="grid gap-10 px-1 pt-8 sm:px-2 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:pt-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {project.label}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            {project.description}
          </p>
          <TechList technologies={project.technologies} className="mt-6" />
          <div className="mt-7">
            <ProjectActions
              projectName={project.title}
              liveUrl={project.liveDemo}
              githubUrl={project.github}
              labels={actions}
            />
          </div>
        </div>

        <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.id} className="border-t border-border/80 pt-5">
              <dt className="text-sm font-semibold text-foreground">{detail.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{project[detail.field]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  )
}

export default FeaturedProject
