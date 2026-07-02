import { ArrowUpRight } from 'lucide-react'

function CertificationCard({ certification, index }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs text-primary" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {certification.credentialUrl ? (
          <ArrowUpRight aria-hidden="true" size={18} className="text-muted" />
        ) : null}
      </div>
      <p className="mt-12 text-sm font-medium text-muted">{certification.issuer}</p>
      <h3 className="mt-2 max-w-md text-xl font-semibold leading-7 tracking-tight text-foreground sm:text-2xl sm:leading-8">
        {certification.title}
      </h3>
    </>
  )

  const classes =
    'block min-h-64 rounded-card border border-border bg-surface p-6 sm:p-7'

  if (certification.credentialUrl) {
    return (
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${certification.title} credential (opens in a new tab)`}
        className={`${classes} transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-card`}
      >
        {content}
      </a>
    )
  }

  return <article className={classes}>{content}</article>
}

export default CertificationCard
