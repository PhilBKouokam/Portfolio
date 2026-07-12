import { Code2, ExternalLink } from 'lucide-react'
import Button from './Button'

function ProjectActions({ projectName, liveUrl, githubUrl, readmeUrl, loomVideoUrl, labels }) {
  const projectLabels = labels.projectOverrides?.[projectName] ?? labels
  const shouldShowUnavailableLiveDemo = !liveUrl && !readmeUrl

  if (loomVideoUrl) {
    return (
      <div className="flex w-full flex-col gap-3">
        <Button
          href={loomVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          aria-label={`Watch the ${projectName} demo video (opens in a new tab)`}
        >
          {labels.loomVideoLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </Button>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          {liveUrl ? (
            <Button
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:flex-1"
              aria-label={`View ${projectName} live demo (opens in a new tab)`}
            >
              {labels.liveDemoLabel}
              <ExternalLink aria-hidden="true" size={16} />
            </Button>
          ) : null}

          {githubUrl ? (
            <Button
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:flex-1"
              aria-label={`View ${projectName} on GitHub (opens in a new tab)`}
            >
              <Code2 aria-hidden="true" size={17} />
              {labels.githubLabel}
            </Button>
          ) : null}

          {readmeUrl ? (
            <Button
              href={readmeUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:flex-1"
              aria-label={`View the ${projectName} README on GitHub (opens in a new tab)`}
            >
              {projectLabels.readmeLabel}
              <ExternalLink aria-hidden="true" size={16} />
            </Button>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      {liveUrl ? (
        <Button
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${projectName} live demo (opens in a new tab)`}
        >
          {labels.liveDemoLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </Button>
      ) : null}

      {shouldShowUnavailableLiveDemo ? (
        <button
          type="button"
          disabled
          title={labels.unavailableLiveDemoTitle}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-primary px-5 py-3 text-sm font-semibold text-white opacity-55"
        >
          {labels.liveDemoLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </button>
      ) : null}

      {githubUrl ? (
        <Button
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          variant={liveUrl ? 'secondary' : 'primary'}
          aria-label={`View ${projectName} on GitHub (opens in a new tab)`}
        >
          <Code2 aria-hidden="true" size={17} />
          {liveUrl ? labels.githubLabel : projectLabels.repositoryLabel}
        </Button>
      ) : null}

      {readmeUrl ? (
        <Button
          href={readmeUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          aria-label={`View the ${projectName} README on GitHub (opens in a new tab)`}
        >
          {projectLabels.readmeLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </Button>
      ) : null}
    </div>
  )
}

export default ProjectActions
