import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Container from '../layout/Container'
import { sectionAnchors } from '../../content/navigation'
import { siteContent } from '../../content/site'

function ContactSection() {
  const prefersReducedMotion = useReducedMotion()
  const content = siteContent.pages.contact

  return (
    <section
      id={sectionAnchors.contact}
      aria-labelledby="contact-heading"
      className="border-t border-border/60 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            {content.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance text-foreground sm:text-5xl lg:text-7xl"
          >
            {content.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <nav aria-label={content.linksLabel} className="mt-12 sm:mt-16">
            <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.socialLinks.map((link) => {
                const isExternal = link.href.startsWith('http')

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      download={link.id === 'resume' ? siteContent.resume.filename : undefined}
                      aria-label={`${link.label}${isExternal ? ' (opens in a new tab)' : ''}`}
                      className="group flex min-h-16 items-center justify-between border-t border-border py-4 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary-hover"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={18}
                        className="text-muted transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-hover"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactSection
