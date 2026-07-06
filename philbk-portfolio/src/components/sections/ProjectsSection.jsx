import Container from '../layout/Container'
import FeaturedProject from '../portfolio/FeaturedProject'
import ProjectCard from '../portfolio/ProjectCard'
import Badge from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { projectsContent } from '../../content/projects'

function ProjectsSection() {
  const projectsById = new Map(
    projectsContent.projects.map((project) => [project.id, project]),
  )

  return (
    <section id={sectionAnchors.projects} aria-labelledby="projects-heading" className="bg-surface/35 py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={projectsContent.section.eyebrow}
          title={projectsContent.section.heading}
          description={projectsContent.section.description}
          headingId="projects-heading"
        />

        {projectsContent.categories.map((category, categoryIndex) => {
          const categoryProjects = category.projectIds.map((id) => projectsById.get(id))
          const featuredProject = categoryProjects.find((project) => project.featured)
          const supportingProjects = categoryProjects.filter((project) => !project.featured)

          return (
            <div
              key={category.id}
              role="group"
              aria-labelledby={`${category.id}-heading`}
              className={categoryIndex === 0 ? 'mt-12 sm:mt-16' : 'mt-16 sm:mt-20'}
            >
              <p
                id={`${category.id}-heading`}
                className="text-sm font-semibold tracking-[0.14em] text-muted uppercase"
              >
                {category.title}
              </p>

              {category.credential ? (
                <aside
                  aria-labelledby={`${category.id}-credential-heading`}
                  className="mt-6 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6"
                >
                  <Badge>{category.credential.badge}</Badge>
                  <p
                    id={`${category.id}-credential-heading`}
                    className="mt-4 text-lg font-semibold tracking-tight text-foreground"
                  >
                    {category.credential.title}
                  </p>
                  <p className="mt-2 max-w-4xl text-sm leading-6 text-muted">
                    {category.credential.description}
                  </p>
                </aside>
              ) : null}

              {featuredProject ? (
                <div className="mt-6">
                  <FeaturedProject
                    project={featuredProject}
                    actions={projectsContent.actions}
                    details={projectsContent.featuredDetails}
                  />
                </div>
              ) : null}

              {supportingProjects.length ? (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  {supportingProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      actions={projectsContent.actions}
                      index={index}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </Container>
    </section>
  )
}

export default ProjectsSection
