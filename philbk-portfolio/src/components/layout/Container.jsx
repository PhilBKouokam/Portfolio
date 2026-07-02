function Container({ as: Element = 'div', className = '', children, ...props }) {
  return (
    <Element
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Container
