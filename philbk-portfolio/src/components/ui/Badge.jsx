function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
