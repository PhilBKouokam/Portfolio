import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import Badge from '../ui/Badge'
import ProjectActions from '../ui/ProjectActions'
import ProjectPreview from '../ui/ProjectPreview'
import TechList from '../ui/TechList'

function ProjectCard({ project, actions, index }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : index * 0.08, ease: 'easeOut' }}
      className="flex h-full flex-col rounded-card border border-border bg-surface p-4 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-card sm:p-5"
    >
      <ProjectPreview
        screenshot={project.screenshot}
        altText={project.altText}
        href={project.linkScreenshotToGithub ? project.github : undefined}
        linkLabel={
          project.linkScreenshotToGithub
            ? `View the ${project.title} repository on GitHub (opens in a new tab)`
            : undefined
        }
      />
      <div className="flex flex-1 flex-col px-1 pt-7 pb-2 sm:px-2">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h3>
        {project.titleBadge ? (
          <div className="mt-3">
            <Badge>{project.titleBadge}</Badge>
          </div>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
          {project.description}
        </p>
        <TechList technologies={project.technologies} className="mt-5" />

        <ul className="mt-6 grid gap-2.5 text-sm text-muted sm:grid-cols-2">
          {project.keyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 shrink-0 text-success" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <ProjectActions
            projectName={project.title}
            liveUrl={project.liveDemo}
            githubUrl={project.github}
            readmeUrl={project.readme}
            loomVideoUrl={project.loomVideo}
            labels={actions}
          />
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
