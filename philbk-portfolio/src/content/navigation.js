export const sectionAnchors = {
  top: 'top',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  process: 'process',
  principles: 'principles',
  certifications: 'certifications',
  github: 'github',
  resume: 'resume',
  contact: 'contact',
}

export const navigationContent = {
  homeLabel: 'PBK — PhilBK home',
  desktopLabel: 'Primary navigation',
  mobileLabel: 'Mobile navigation',
  menuOpenLabel: 'Open navigation menu',
  menuCloseLabel: 'Close navigation menu',
  items: [
    { id: 'about', label: 'About', href: `#${sectionAnchors.about}` },
    { id: 'projects', label: 'Projects', href: `#${sectionAnchors.projects}` },
    { id: 'skills', label: 'Skills', href: `#${sectionAnchors.skills}` },
    {
      id: 'certifications',
      label: 'Certifications',
      href: `#${sectionAnchors.certifications}`,
    },
    { id: 'contact', label: 'Contact', href: `#${sectionAnchors.contact}` },
  ],
}
