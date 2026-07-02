const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  headingLevel: Heading = 'h2',
  headingId,
  className = '',
}) {
  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${alignments[align]} ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading id={headingId} className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-pretty text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
