import { siteContent } from './site'

export const heroContent = {
  eyebrow: 'AI-Native Full-Stack Engineer',
  headline: ['Software is easy to build.', 'Software people use is hard to build.'],
  supportingParagraph:
    'I combine systems thinking, modern AI development workflows, and a focus on real user problems to build thoughtful, reliable products. AI has changed how software is built—but not why people choose to use it.',
  actions: {
    primary: { label: 'View Products' },
    secondary: { label: siteContent.resume.label },
  },
  workflowLabel: 'AI Workflow',
  workflow: ['Investigate', 'Architect', 'Build', 'Verify', 'Ship'],
}
