import { Code2, ExternalLink } from 'lucide-react'
import Button from './Button'

function ProjectActions({ projectName, liveUrl, githubUrl, readmeUrl, loomVideoUrl, labels }) {
  const projectLabels = labels.projectOverrides?.[projectName] ?? labels
  const shouldShowUnavailableLiveDemo = !liveUrl && !readmeUrl

  const standardActions = (
    <>
      {liveUrl ? (
        <Button
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          variant={loomVideoUrl ? 'secondary' : 'primary'}
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
          variant={liveUrl || loomVideoUrl ? 'secondary' : 'primary'}
          aria-label={`View ${projectName} on GitHub (opens in a new tab)`}
        >
          <Code2 aria-hidden="true" size={17} />
          {liveUrl || loomVideoUrl ? labels.githubLabel : projectLabels.repositoryLabel}
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
    </>
  )

  if (loomVideoUrl) {
    return (
      <div className="flex flex-col items-start gap-3">
        <Button
          href={loomVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch the ${projectName} two-minute demo video (opens in a new tab)`}
        >
          {labels.loomVideoLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </Button>

        <div className="flex flex-wrap gap-3">
          {standardActions}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      {standardActions}
    </div>
  )
}

export default ProjectActions
