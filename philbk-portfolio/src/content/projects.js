import calorieBankShot from '../assets/images/projects/caloriebank.png'
import spendWiseShot from '../assets/images/projects/spendwise.png'
import habitTrackerShot from '../assets/images/projects/habit-tracker.png'
import philbkResumeShot from '../assets/images/projects/philbk-resume.png'

export const projectsContent = {
  section: {
    eyebrow: 'Systems in practice',
    heading: 'The interface is only one part of the system.',
    description:
      'These projects show how I connect state, API contracts, authentication, business rules, databases, and deployment into one traceable flow. The work is not only making each layer function; it is understanding how a decision in one layer changes the behavior of the others.',
  },
  actions: {
    liveDemoLabel: 'Live Demo',
    githubLabel: 'GitHub',
    repositoryLabel: 'Repository',
    readmeLabel: 'View README',
    unavailableLiveDemoTitle: 'Live demo link coming soon',
  },
  featuredDetails: [
    { id: 'challenges', title: 'Engineering challenges', field: 'engineeringChallenges' },
    { id: 'architecture', title: 'Architecture', field: 'architecture' },
    { id: 'problems', title: 'Problems solved', field: 'problemsSolved' },
    { id: 'lessons', title: 'Lessons learned', field: 'lessonsLearned' },
  ],
  projects: [
    {
      id: 'caloriebank', slug: 'caloriebank', title: 'CalorieBank', label: 'Flagship project',
      tagline: 'A production-ready calorie banking platform.',
      description: 'A production-ready calorie banking platform designed to make daily nutrition decisions clearer, more flexible, and easier to sustain.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'], featured: true,
      liveDemo: 'https://caloriebank-pi.vercel.app/', github: 'https://github.com/PhilBKouokam/CalorieBank',
      architecture: 'A component-driven React client backed by a REST API, persistent MongoDB models, and a deployment structure designed for production.',
      engineeringChallenges: 'Translating calorie banking into predictable application state while keeping daily balances and user feedback consistent.',
      problemsSolved: 'Turns fragmented daily tracking into a clearer system for understanding available calories across changing routines.',
      keyFeatures: ['Calorie balance tracking', 'Persistent application data', 'Responsive workflows'],
      lessonsLearned: 'Reliable product behavior depends on explicit domain rules, focused UI states, and clean boundaries between client and server concerns.',
      screenshot: calorieBankShot, altText: 'CalorieBank application dashboard',
    },
    {
      id: 'spendwise', slug: 'spendwise', title: 'SpendWise', label: 'Featured project',
      tagline: 'A responsive personal finance dashboard.',
      description: 'A responsive personal finance dashboard that turns account activity into an accessible view of spending and financial patterns.',
      technologies: ['React', 'JavaScript', 'Charts', 'Authentication', 'Cloud Storage'], featured: false,
      liveDemo: 'https://spendwise-two-navy.vercel.app/', github: 'https://github.com/PhilBKouokam/spendwise',
      architecture: 'A React client organized around authenticated financial data, reusable dashboard components, and cloud-backed persistence.',
      engineeringChallenges: 'Keeping financial summaries and chart data synchronized while preserving clear loading, empty, and authenticated states.',
      problemsSolved: 'Consolidates account activity into a focused view that makes spending patterns easier to understand.',
      keyFeatures: ['Responsive dashboard', 'Financial charts', 'Secure authentication', 'Cloud-backed storage'],
      lessonsLearned: 'Financial interfaces require consistent data transformations and deliberate visual hierarchy to remain trustworthy.', screenshot: spendWiseShot, altText: 'SpendWise personal finance dashboard',
    },
    {
      id: 'habit-tracker', slug: 'habit-tracker', title: 'Habit Tracker', label: 'Featured project',
      tagline: 'A complete MERN habit tracking application.',
      description: 'A complete MERN application for creating, updating, and maintaining habits through a focused daily workflow.',
      technologies: ['React', 'Context API', 'Node.js', 'Express', 'MongoDB'], featured: false,
      liveDemo: 'https://habit-tracker-fullstack-ten.vercel.app/', github: 'https://github.com/PhilBKouokam/habit-tracker-fullstack',
      architecture: 'A MERN application with Context-based client state, authenticated Express routes, and persistent MongoDB models.',
      engineeringChallenges: 'Keeping authenticated CRUD operations synchronized across local state, API responses, and persisted habit records.',
      problemsSolved: 'Provides a direct daily workflow for maintaining habits without adding unnecessary tracking complexity.',
      keyFeatures: ['Authentication', 'Complete CRUD workflows', 'React Context state', 'MongoDB persistence', 'Production deployment'],
      lessonsLearned: 'Explicit state transitions and predictable API contracts make full-stack CRUD workflows easier to debug and maintain.', screenshot: habitTrackerShot, altText: 'Habit Tracker application dashboard',
    },
    {
      id: 'philbk-resume', slug: 'philbk-resume', title: 'philbk-resume', label: 'Engineering Tool',
      tagline: 'A deterministic résumé publishing system.',
      description: 'A React-powered résumé generation system that treats professional documents as software through canonical content, schema validation, deterministic PDF generation, and automated output validation.',
      technologies: ['React', 'Vite', 'Zod', 'Playwright', 'Vitest', 'ESLint'], featured: false,
      liveDemo: null, github: 'https://github.com/PhilBKouokam/philbk-resume',
      readme: 'https://github.com/PhilBKouokam/philbk-resume#readme',
      architecture: 'Canonical résumé content passes through schema validation and immutable normalization before React renders the shared semantic document for browser and PDF output.',
      engineeringChallenges: 'Keeping browser rendering, one-page PDF constraints, ATS semantics, and automated validation consistent across the publishing pipeline.',
      problemsSolved: 'Replaces manually maintained résumé variants with a validated system that produces repeatable output from one source of truth.',
      keyFeatures: [
        'Canonical content separated from presentation',
        'Schema validation and immutable normalization',
        'Deterministic Playwright publishing with automated PDF validation',
      ],
      lessonsLearned: 'Professional documents benefit from the same explicit contracts, deterministic builds, and validation boundaries used in production software.',
      screenshot: philbkResumeShot, altText: 'philbk-resume browser preview and generated résumé document',
    },
  ],
}

const requiredProjectFields = [
  'id',
  'slug',
  'title',
  'label',
  'description',
  'technologies',
  'github',
  'architecture',
  'engineeringChallenges',
  'problemsSolved',
  'keyFeatures',
  'lessonsLearned',
  'screenshot',
  'altText',
]

function validateProjectsContent(content) {
  if (!content.projects.length) {
    throw new Error('Project content must include at least one project.')
  }

  const projectIds = new Set()
  content.projects.forEach((project) => {
    requiredProjectFields.forEach((field) => {
      const value = project[field]
      const isEmptyArray = Array.isArray(value) && value.length === 0

      if (value == null || value === '' || isEmptyArray) {
        throw new Error(`Project "${project.id || 'unknown'}" is missing required field "${field}".`)
      }
    })

    if (projectIds.has(project.id)) {
      throw new Error(`Project id "${project.id}" must be unique.`)
    }

    projectIds.add(project.id)
  })

  content.featuredDetails.forEach(({ field }) => {
    if (!requiredProjectFields.includes(field)) {
      throw new Error(`Featured project detail references unknown field "${field}".`)
    }
  })
}

validateProjectsContent(projectsContent)
