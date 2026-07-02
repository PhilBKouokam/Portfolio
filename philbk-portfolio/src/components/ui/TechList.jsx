function TechList({ technologies, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies used">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-border/80 bg-background/55 px-3 py-1.5 text-xs font-medium text-muted"
        >
          {technology}
        </li>
      ))}
    </ul>
  )
}

export default TechList
