export const sectionAnchors = {
  top: 'top',
  why: 'why-i-build',
  how: 'how-i-build',
  products: 'products',
  technologies: 'technologies',
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
    { id: 'why', label: 'Why I Build', href: `#${sectionAnchors.why}` },
    { id: 'how', label: 'How I Build', href: `#${sectionAnchors.how}` },
    { id: 'products', label: 'Products', href: `#${sectionAnchors.products}` },
    { id: 'principles', label: 'Principles', href: `#${sectionAnchors.principles}` },
    { id: 'technologies', label: 'Technologies', href: `#${sectionAnchors.technologies}` },
    { id: 'contact', label: 'Contact', href: `#${sectionAnchors.contact}` },
  ],
}
