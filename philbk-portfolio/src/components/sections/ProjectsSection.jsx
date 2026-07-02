import Container from '../layout/Container'
import FeaturedProject from '../portfolio/FeaturedProject'
import ProjectCard from '../portfolio/ProjectCard'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { projectsContent } from '../../content/projects'

function ProjectsSection() {
  const featuredProject =
    projectsContent.projects.find((project) => project.featured) ?? projectsContent.projects[0]
  const supportingProjects = projectsContent.projects.filter(
    (project) => project.id !== featuredProject?.id,
  )

  if (!featuredProject) return null

  return (
    <section id={sectionAnchors.projects} aria-labelledby="projects-heading" className="bg-surface/35 py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={projectsContent.section.eyebrow}
          title={projectsContent.section.heading}
          description={projectsContent.section.description}
          headingId="projects-heading"
        />

        <div className="mt-12 sm:mt-16">
          <FeaturedProject
            project={featuredProject}
            actions={projectsContent.actions}
            details={projectsContent.featuredDetails}
          />
        </div>

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
      </Container>
    </section>
  )
}

export default ProjectsSection
