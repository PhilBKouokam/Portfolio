function SkillGroup({ group }) {
  return (
    <article className="grid gap-5 border-t border-border py-7 sm:grid-cols-[minmax(9rem,0.65fr)_minmax(0,1.35fr)] sm:gap-10 lg:py-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{group.description}</p>
      </div>
      <ul className="flex flex-wrap content-start gap-2.5" aria-label={`${group.category} skills`}>
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillGroup
