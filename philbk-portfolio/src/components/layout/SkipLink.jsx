function SkipLink({ targetId = 'main-content' }) {
  return (
    <a
      href={`#${targetId}`}
      className="fixed top-3 left-3 z-50 -translate-y-20 rounded-button bg-primary px-4 py-2 font-semibold text-white transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink
