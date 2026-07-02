function ProjectPreview({ screenshot, altText, featured = false }) {
  if (screenshot) {
    return (
      <div className={`overflow-hidden rounded-card border border-border bg-background shadow-card ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <img
          src={screenshot}
          alt={altText}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${altText} placeholder`}
      className={`overflow-hidden rounded-card border border-border bg-background shadow-card ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}
    >
      <div aria-hidden="true" className="flex h-10 items-center gap-1.5 border-b border-border/80 bg-surface px-4">
        <span className="size-2 rounded-full bg-slate-600" />
        <span className="size-2 rounded-full bg-slate-600" />
        <span className="size-2 rounded-full bg-slate-600" />
      </div>
      <div aria-hidden="true" className="grid h-[calc(100%-2.5rem)] grid-cols-[22%_1fr]">
        <div className="border-r border-border/70 bg-surface/60 p-4">
          <div className="h-3 w-2/3 rounded-full bg-slate-700" />
          <div className="mt-7 space-y-3">
            <div className="h-2 rounded-full bg-slate-800" />
            <div className="h-2 w-4/5 rounded-full bg-slate-800" />
            <div className="h-2 w-3/5 rounded-full bg-slate-800" />
          </div>
        </div>
        <div className="flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-md rounded-xl border border-border/70 bg-card/55 p-5 sm:p-7">
            <div className="h-2.5 w-1/3 rounded-full bg-primary/70" />
            <div className="mt-5 h-6 w-3/4 rounded-md bg-slate-600/60" />
            <div className="mt-3 h-2 w-full rounded-full bg-slate-700" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-700" />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="h-12 rounded-lg bg-slate-800" />
              <div className="h-12 rounded-lg bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
