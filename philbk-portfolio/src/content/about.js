export const aboutContent = {
  eyebrow: 'About',
  heading: "I don't see projects as folders. I see connected systems.",
  paragraphs: [
    'I understand an application by following information through every layer. A value begins somewhere, passes through dependencies, changes state, crosses an API boundary, reaches business logic, and may be persisted. The response returns through the same system. Each layer influences what the next layer can do.',
    'When I debug, I do not assume the component showing an error is the source. I ask where the information originated, which dependency produced it, which component passed it, and where it changed. The problem may be local state, an HTTP contract, authentication, a controller, or unexpected database data. Tracing the full path is more reliable than fixing the first visible symptom.',
  ],
  philosophy:
    'I often model an application as a tree. The source is the root: entry points, core rules, and data ownership. Components, state, requests, and responses form branches that depend on that foundation. This model helps me identify where responsibility belongs and where a failure can propagate. If the root is unclear, the branches become harder to change without introducing unexpected behavior.',
}
