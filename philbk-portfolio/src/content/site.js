const resumeDocument = new URL(
  '../assets/documents/phillip-bryan-kouokam-resume.pdf',
  import.meta.url,
).href

const links = {
  github: 'https://github.com/PhilBKouokam',
  linkedin: 'https://www.linkedin.com/in/phillip-bryan-kouokam',
  resume: resumeDocument,
}

const email = 'kouokambryan@gmail.com'

export const siteContent = {
  name: 'PhilBK Portfolio',
  wordmark: 'PBK',
  person: {
    name: 'Phillip-Bryan Kouokam',
    professionalTitle: 'Full-Stack Engineer',
    professionalSummary:
      'Systems-first engineering across React, Express, MongoDB, and AWS.',
  },
  contact: { email },
  links,
  resume: {
    label: 'Download Resume',
    filename: 'Phillip-Bryan-Kouokam-Resume.pdf',
  },
  seo: {
    title: 'Phillip-Bryan Kouokam | Full-Stack Engineer',
    description:
      'Full-Stack Engineer who traces data flow across React, Express, MongoDB, and AWS to build maintainable production applications.',
    url: import.meta.env?.VITE_SITE_URL || '',
    locale: 'en_US',
    language: 'en',
    socialCard: 'summary_large_image',
  },
  socialLinks: [
    { id: 'github', label: 'GitHub', href: links.github, icon: 'code' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: links.linkedin,
      icon: 'briefcase',
    },
    { id: 'email', label: 'Email', href: `mailto:${email}`, icon: 'mail' },
    { id: 'resume', label: 'Resume', href: links.resume, icon: 'file' },
  ],
  pages: {
    contact: {
      eyebrow: 'Contact',
      heading: "Let's build something meaningful.",
      description:
        'If you are hiring for a frontend or full-stack role, or building a product that needs thoughtful engineering, I would be glad to hear from you.',
      linksLabel: 'Contact and professional links',
    },
    footer: {
      copyright: '© 2026 Phillip-Bryan Kouokam',
      technology: 'Built with React, Vite and Tailwind CSS.',
    },
    notFound: {
      eyebrow: '404 error',
      title: 'Page not found',
      description: 'The page you requested does not exist or may have moved.',
      actionLabel: 'Return home',
      seoTitle: 'Page not found | PhilBK Portfolio',
      seoDescription: 'The requested page could not be found.',
    },
  },
}
