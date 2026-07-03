import { Code2, ExternalLink } from 'lucide-react'
import Button from './Button'

function ProjectActions({ projectName, liveUrl, githubUrl, readmeUrl, labels }) {
  if (!liveUrl && readmeUrl) {
    return (
      <div className="flex flex-wrap gap-3">
        <Button
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View the ${projectName} repository on GitHub (opens in a new tab)`}
        >
          <Code2 aria-hidden="true" size={17} />
          {labels.repositoryLabel}
        </Button>
        <Button
          href={readmeUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          aria-label={`View the ${projectName} README on GitHub (opens in a new tab)`}
        >
          {labels.readmeLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </Button>
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
      ) : (
        <button
          type="button"
          disabled
          title={labels.unavailableLiveDemoTitle}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-primary px-5 py-3 text-sm font-semibold text-white opacity-55"
        >
          {labels.liveDemoLabel}
          <ExternalLink aria-hidden="true" size={16} />
        </button>
      )}
      <Button
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        aria-label={`View ${projectName} on GitHub (opens in a new tab)`}
      >
        <Code2 aria-hidden="true" size={17} />
        {labels.githubLabel}
      </Button>
    </div>
  )
}

export default ProjectActions
