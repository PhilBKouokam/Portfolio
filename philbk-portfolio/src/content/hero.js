import { siteContent } from './site'

export const heroContent = {
  badges: [
    { id: 'role', label: 'Full-Stack Engineer', emphasized: true },
    { id: 'philosophy', label: 'Systems-First Engineering', emphasized: false },
    {
      id: 'certification',
      label: 'AWS Certified Solutions Architect – Associate',
      emphasized: false,
    },
  ],
  headline: 'I understand software by tracing it to the source.',
  subheadline: [
    'An application is a connected flow: the browser starts React, components shape state, and HTTP carries data through Express, controllers, business logic, and MongoDB before the response returns.',
    'I build and debug by tracing that flow in both directions. When behavior breaks, I follow the data to where it originated instead of assuming the component displaying the error caused it.',
  ],
  actions: {
    primary: { label: 'View Projects' },
    secondary: { label: siteContent.resume.label },
  },
  professionalLinksLabel: 'Professional links',
  trustIndicatorsLabel: 'Professional highlights',
  trustIndicators: [
    'Trace the source',
    'Map the dependencies',
    'Validate the complete data flow',
  ],
}
