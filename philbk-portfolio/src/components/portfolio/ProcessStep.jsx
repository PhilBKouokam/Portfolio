function ProcessStep({ step, index }) {
  return (
    <li className="relative rounded-card border border-border bg-background/60 p-5 sm:min-h-64 sm:p-6">
      <span className="font-mono text-xs text-primary" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-10 text-xl font-semibold tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
    </li>
  )
}

export default ProcessStep
