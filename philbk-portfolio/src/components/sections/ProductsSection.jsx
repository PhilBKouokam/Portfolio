import Container from '../layout/Container'
import FeaturedProject from '../portfolio/FeaturedProject'
import ProjectCard from '../portfolio/ProjectCard'
import SectionHeading from '../ui/SectionHeading'
import { sectionAnchors } from '../../content/navigation'
import { projectsContent } from '../../content/projects'

function ProductsSection() {
  const projectsById = new Map(
    projectsContent.projects.map((project) => [project.id, project]),
  )

  return (
    <section id={sectionAnchors.products} aria-labelledby="products-heading" className="border-t border-border/60 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container>
        <SectionHeading
          eyebrow={projectsContent.section.eyebrow}
          title={projectsContent.section.heading}
          description={projectsContent.section.description}
          headingId="products-heading"
        />

        {projectsContent.categories.map((category, categoryIndex) => {
          const categoryProjects = category.projectIds.map((id) => projectsById.get(id))
          const isPrimary = category.id === 'primary-products'
          const featuredProject = isPrimary ? categoryProjects.find((project) => project.featured) : null
          const supportingProjects = isPrimary
            ? categoryProjects.filter((project) => !project.featured)
            : categoryProjects

          return (
            <div
              key={category.id}
              role="group"
              aria-labelledby={`${category.id}-heading`}
              className={categoryIndex === 0 ? 'mt-12 sm:mt-16' : 'mt-16 border-t border-border/60 pt-12 sm:mt-20 sm:pt-14'}
            >
              <p
                id={`${category.id}-heading`}
                className="text-sm font-semibold tracking-[0.14em] text-muted uppercase"
              >
                {category.title}
              </p>

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
                <div className={`mt-6 grid gap-6 ${isPrimary ? 'lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                  {supportingProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      actions={projectsContent.actions}
                      index={index}
                      compact={!isPrimary}
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

export default ProductsSection
