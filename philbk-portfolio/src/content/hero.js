import { siteContent } from './site'

export const heroContent = {
  eyebrow: 'AI-Native Full-Stack Engineer',
  headline: ['Code is easier than ever.', 'Knowing what is worth building is the real work.'],
  supportingParagraph:
    'I investigate the behavior behind a request, find the constraint that matters, and build the simplest system that can prove useful. AI expands the search space and accelerates execution; judgment stays accountable for what ships.',
  actions: {
    primary: { label: 'View Products' },
    secondary: { label: siteContent.resume.label },
  },
  workflowLabel: 'How I reason',
  workflow: ['Problem', 'Constraint', 'Assumptions', 'Useful system', 'Evidence'],
}
