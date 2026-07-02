const variants = {
  primary:
    'bg-primary-strong text-white shadow-sm hover:bg-primary-active active:bg-blue-800',
  secondary:
    'border border-border bg-surface text-foreground hover:border-slate-500 hover:bg-card',
  ghost: 'text-muted hover:bg-white/5 hover:text-foreground',
}

const sizes = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-12 px-5 py-3 text-sm',
  lg: 'min-h-14 px-6 py-3.5 text-base',
}

function Button({
  as: Component,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`

  if (Component) {
    return (
      <Component className={classes} {...props}>
        {children}
      </Component>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
