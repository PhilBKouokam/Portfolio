const links = {
  github: 'https://github.com/PhilBKouokam',
  linkedin: 'https://www.linkedin.com/in/phillip-bryan-kouokam',
  resume: '/resume.pdf',
}

const email = 'kouokambryan@gmail.com'
const siteUrl = import.meta.env?.VITE_SITE_URL || 'https://philbk.dev'

export const siteContent = {
  name: 'Phillip-Bryan Kouokam',
  wordmark: 'PBK',
  person: {
    name: 'Phillip-Bryan Kouokam',
    professionalTitle: 'AI-Native Full-Stack Engineer',
    professionalSummary:
      'Thoughtful product engineering through systems thinking, modern AI development workflows, and a focus on real user problems.',
  },
  contact: { email },
  links,
  resume: {
    label: 'Résumé',
    filename: 'Phillip-Bryan-Kouokam-Resume.pdf',
  },
  seo: {
    title: 'Phillip-Bryan Kouokam | AI-Native Full-Stack Engineer',
    description:
      'AI-Native Full-Stack Engineer building thoughtful, production-ready products through systems thinking, modern AI development workflows, and a focus on real user problems.',
    url: siteUrl,
    locale: 'en_US',
    language: 'en',
    socialCard: 'summary_large_image',
    socialImage: '/og.png',
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
    { id: 'resume', label: 'Résumé', href: links.resume, icon: 'file' },
  ],
  pages: {
    contact: {
      eyebrow: 'Contact',
      heading: 'Let’s build something people will enjoy using.',
      description:
        'You can expect thoughtful engineering, honest communication, and a consistent focus on solving the right problem well.',
      linksLabel: 'Contact and professional links',
    },
    footer: {
      copyright: '© 2026 Phillip-Bryan Kouokam',
      technology: 'Designed and built with care.',
      backToTopLabel: 'Back to top',
    },
    notFound: {
      eyebrow: '404 error',
      title: 'Page not found',
      description: 'This route does not lead to a product—yet. The page may have moved or never existed.',
      actionLabel: 'Return home',
      seoTitle: 'Page not found | Phillip-Bryan Kouokam',
      seoDescription: 'The requested page could not be found.',
    },
  },
}
