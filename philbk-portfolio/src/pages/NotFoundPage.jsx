import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import PageLayout from '../components/layout/PageLayout'
import Button from '../components/ui/Button'
import { ROUTES } from '../constants/routes'
import { siteContent } from '../content/site'
import Seo from '../seo/Seo'

function NotFoundPage() {
  const content = siteContent.pages.notFound

  return (
    <PageLayout>
      <Seo
        title={content.seoTitle}
        description={content.seoDescription}
        canonicalUrl=""
        robots="noindex, nofollow"
      />
      <Container className="flex min-h-screen flex-col items-start justify-center gap-6 py-24">
        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
          {content.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {content.title}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-muted">
          {content.description}
        </p>
        <Button as={Link} to={ROUTES.home}>
          {content.actionLabel}
        </Button>
      </Container>
    </PageLayout>
  )
}

export default NotFoundPage
