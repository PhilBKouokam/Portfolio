function ProcessStep({ step, index }) {
  return (
    <li className="relative border-t border-border pt-5 sm:min-h-52 lg:min-h-60">
      <span className="font-mono text-xs text-primary" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
    </li>
  )
}

export default ProcessStep
