import Container from '../layout/Container'
import Badge from '../ui/Badge'
import { coreTechnologiesContent } from '../../content/coreTechnologies'

function CoreTechnologiesSection() {
  return (
    <section
      aria-labelledby="core-technologies-heading"
      className="border-t border-border/60 py-10 sm:py-12"
    >
      <Container>
        <h2
          id="core-technologies-heading"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          {coreTechnologiesContent.heading}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          {coreTechnologiesContent.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core technologies">
          {coreTechnologiesContent.technologies.map((technology) => (
            <li key={technology}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default CoreTechnologiesSection
