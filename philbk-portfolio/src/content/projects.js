import calorieBankShot from '../assets/images/projects/caloriebank.png'
import spendWiseShot from '../assets/images/projects/spendwise.png'
import habitTrackerShot from '../assets/images/projects/habit-tracker.png'
import philbkResumeShot from '../assets/images/projects/philbk-resume.png'
import awsHighlyAvailableShot from '../assets/images/projects/aws-highly-available-web-application.png'
import awsServerlessEtlShot from '../assets/images/projects/aws-serverless-etl-pipeline.png'

export const projectsContent = {
  section: {
    eyebrow: 'Systems in practice',
    heading: 'The interface is only one part of the system.',
    description:
      'These projects show how I connect state, API contracts, authentication, business rules, databases, and deployment into one traceable flow. The work is not only making each layer function; it is understanding how a decision in one layer changes the behavior of the others.',
  },
  actions: {
    loomVideoLabel: '▶ Watch Demo',
    liveDemoLabel: 'Live Demo',
    githubLabel: 'GitHub',
    repositoryLabel: 'Repository',
    readmeLabel: 'View README',
    unavailableLiveDemoTitle: 'Live demo link coming soon',
    projectOverrides: {
      'AWS Highly Available Web Application': {
        repositoryLabel: 'GitHub',
        readmeLabel: 'Documentation',
      },
      'AWS Serverless ETL Pipeline': {
        repositoryLabel: 'GitHub',
        readmeLabel: 'Documentation',
      },
    },
  },
  categories: [
    {
      id: 'featured-projects',
      title: 'Featured Projects',
      projectIds: ['caloriebank', 'spendwise', 'habit-tracker'],
    },
    {
      id: 'cloud-engineering',
      title: 'Cloud Engineering Projects',
      credential: {
        badge: 'AWS Certified',
        title: 'AWS Certified Solutions Architect – Associate',
        description: 'Validated cloud architecture knowledge with hands-on experience designing and deploying scalable AWS solutions using compute, networking, monitoring, automation, and serverless services.',
      },
      projectIds: [
        'aws-highly-available-web-application',
        'aws-serverless-etl-pipeline',
      ],
    },
    {
      id: 'engineering-tools',
      title: 'Engineering Tools',
      projectIds: ['philbk-resume'],
    },
  ],
  featuredDetails: [
    { id: 'challenges', title: 'Engineering challenges', field: 'engineeringChallenges' },
    { id: 'architecture', title: 'Architecture', field: 'architecture' },
    { id: 'problems', title: 'Problems solved', field: 'problemsSolved' },
    { id: 'lessons', title: 'Lessons learned', field: 'lessonsLearned' },
  ],
  projects: [
    {
      id: 'caloriebank', slug: 'caloriebank', title: 'CalorieBank', label: 'Flagship project',
      titleBadge: '⭐ Featured Project',
      tagline: 'A production-ready calorie banking platform.',
      description: 'A full-stack calorie banking app that turns nutrition tracking into a weekly budgeting workflow using React, Express REST APIs, MongoDB, JWT auth, and AWS S3.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'], featured: true,
      liveDemo: 'https://caloriebank-pi.vercel.app/', github: 'https://github.com/PhilBKouokam/CalorieBank',
      loomVideo: 'https://www.loom.com/share/3a0f06928e004bad80cd4ae181f65d1c',
      architecture: 'A React client with Context state backed by Express REST APIs, MongoDB models, AWS S3 uploads, and Vercel/Render deployment.',
      engineeringChallenges: 'Keeping weekly calorie balances predictable across client state, authenticated API responses, and persisted user data.',
      problemsSolved: 'Replaces fragmented daily tracking with a clearer weekly system for managing calorie availability.',
      keyFeatures: ['Weekly calorie banking', 'JWT-protected REST APIs', 'AWS S3 uploads'],
      lessonsLearned: 'Reliable product behavior depends on explicit domain rules, focused UI states, and clean boundaries between client and server concerns.',
      screenshot: calorieBankShot, altText: 'CalorieBank application dashboard',
    },
    {
      id: 'spendwise', slug: 'spendwise', title: 'SpendWise', label: 'Featured project',
      tagline: 'A responsive personal finance dashboard.',
      description: 'An authenticated finance dashboard for tracking expenses, visualizing spending patterns, and storing receipts with a React UI, REST APIs, MongoDB, Recharts, and AWS S3.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'], featured: false,
      liveDemo: 'https://spendwise-two-navy.vercel.app/', github: 'https://github.com/PhilBKouokam/spendwise',
      loomVideo: 'https://www.loom.com/share/75bc2eae927b4d0d9c22ff35297a09c1',
      architecture: 'A React dashboard connected to authenticated CRUD APIs, MongoDB persistence, chart data transformations, and AWS S3 receipt storage.',
      engineeringChallenges: 'Keeping financial summaries, chart data, receipt uploads, and authenticated CRUD workflows synchronized.',
      problemsSolved: 'Consolidates expense tracking and receipt management into one responsive financial workflow.',
      keyFeatures: ['Expense CRUD workflows', 'Financial charts', 'AWS S3 receipt uploads'],
      lessonsLearned: 'Financial interfaces require consistent data transformations and deliberate visual hierarchy to remain trustworthy.', screenshot: spendWiseShot, altText: 'SpendWise personal finance dashboard',
    },
    {
      id: 'habit-tracker', slug: 'habit-tracker', title: 'Habit Tracker', label: 'Featured project',
      tagline: 'A complete MERN habit tracking application.',
      description: 'A MERN habit tracking app with JWT authentication, React Context state, CRUD REST APIs, MongoDB persistence, and production deployment debugging.',
      technologies: ['React', 'Context API', 'Node.js', 'Express', 'MongoDB'], featured: false,
      liveDemo: 'https://habit-tracker-six-murex.vercel.app/', github: 'https://github.com/PhilBKouokam/HabitTracker',
      loomVideo: 'https://www.loom.com/share/f69f4dce4b53414299a23805874cc25b',
      architecture: 'A MERN application with Context-based client state, authenticated Express routes, and persistent MongoDB models.',
      engineeringChallenges: 'Keeping authenticated CRUD operations synchronized across local state, API responses, and persisted habit records.',
      problemsSolved: 'Provides a direct daily workflow for maintaining habits without adding unnecessary tracking complexity.',
      keyFeatures: ['JWT authentication', 'CRUD REST APIs', 'React Context state'],
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
    {
      id: 'aws-highly-available-web-application',
      slug: 'aws-highly-available-web-application',
      title: 'AWS Highly Available Web Application',
      label: 'Cloud Engineering',
      tagline: 'Highly available, automatically scaling AWS infrastructure.',
      description: 'Designed and deployed a highly available web application on AWS using Amazon EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, Amazon SNS, and IAM. The infrastructure automatically distributes traffic, scales with demand, monitors application health, and improves fault tolerance through automated recovery.',
      technologies: [
        'AWS',
        'Amazon EC2',
        'Elastic Load Balancing',
        'Auto Scaling',
        'CloudWatch',
        'Amazon SNS',
        'IAM',
      ],
      featured: false,
      liveDemo: null,
      github: 'https://github.com/PhilBKouokam/aws-highly-available-web-application',
      readme: 'https://github.com/PhilBKouokam/aws-highly-available-web-application#readme',
      architecture: 'Traffic is distributed through an Elastic Load Balancer across multiple EC2 instances managed by an Auto Scaling group, with CloudWatch alarms and SNS notifications supporting monitoring and recovery.',
      engineeringChallenges: 'Coordinating scaling, health monitoring, traffic distribution, permissions, and recovery behavior as one dependable infrastructure system.',
      problemsSolved: 'Reduces single-instance failure risk and allows application capacity to respond automatically as demand changes.',
      keyFeatures: [
        'High Availability Architecture',
        'Elastic Load Balancer',
        'Auto Scaling Groups',
        'Multi-Instance Deployment',
        'CloudWatch Monitoring',
        'SNS Notifications',
        'Fault-Tolerant Infrastructure',
        'AWS Architecture Documentation',
      ],
      lessonsLearned: 'Reliable cloud infrastructure depends on understanding how traffic, compute capacity, health signals, permissions, and recovery mechanisms influence one another.',
      linkScreenshotToGithub: true,
      screenshot: awsHighlyAvailableShot,
      altText: 'Architecture diagram for the AWS highly available web application',
    },
    {
      id: 'aws-serverless-etl-pipeline',
      slug: 'aws-serverless-etl-pipeline',
      title: 'AWS Serverless ETL Pipeline',
      label: 'Cloud Engineering',
      tagline: 'An event-driven serverless data transformation pipeline.',
      description: 'Designed and implemented an event-driven serverless ETL pipeline on AWS that automatically transforms CSV datasets into JSON using Amazon S3, AWS Lambda, AWS Glue, and IAM. The solution eliminates manual processing by orchestrating data ingestion, transformation, and output through fully managed cloud services while demonstrating event-driven architecture and scalable data engineering workflows.',
      technologies: [
        'AWS',
        'Amazon S3',
        'AWS Lambda',
        'AWS Glue',
        'IAM',
        'Python',
        'Serverless',
        'ETL',
      ],
      featured: false,
      liveDemo: null,
      github: 'https://github.com/PhilBKouokam/aws-serverless-etl-pipeline',
      readme: 'https://github.com/PhilBKouokam/aws-serverless-etl-pipeline',
      architecture: 'Amazon S3 events initiate serverless processing through AWS Lambda and AWS Glue, transforming incoming CSV data into JSON output under IAM-controlled service permissions.',
      engineeringChallenges: 'Coordinating event triggers, transformation responsibilities, storage boundaries, and IAM permissions across fully managed AWS services.',
      problemsSolved: 'Automates repeatable dataset ingestion and transformation without requiring manual processing or continuously running infrastructure.',
      keyFeatures: [
        'Event-driven S3 ingestion',
        'Lambda CSV-to-JSON transformation',
        'AWS Glue data processing',
        'IAM-controlled service access',
      ],
      lessonsLearned: 'Serverless data workflows remain reliable when event sources, transformation steps, storage destinations, and service permissions are defined as explicit system boundaries.',
      linkScreenshotToGithub: true,
      screenshot: awsServerlessEtlShot,
      altText: 'Architecture diagram for the AWS serverless ETL pipeline',
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

  const categorizedProjectIds = content.categories.flatMap((category) => category.projectIds)
  const unknownProjectId = categorizedProjectIds.find((id) => !projectIds.has(id))
  if (unknownProjectId) {
    throw new Error(`Project category references unknown project id "${unknownProjectId}".`)
  }

  if (new Set(categorizedProjectIds).size !== categorizedProjectIds.length) {
    throw new Error('Each project must belong to only one project category.')
  }

  const uncategorizedProject = content.projects.find(
    (project) => !categorizedProjectIds.includes(project.id),
  )
  if (uncategorizedProject) {
    throw new Error(`Project "${uncategorizedProject.id}" must belong to a project category.`)
  }

  content.featuredDetails.forEach(({ field }) => {
    if (!requiredProjectFields.includes(field)) {
      throw new Error(`Featured project detail references unknown field "${field}".`)
    }
  })
}

validateProjectsContent(projectsContent)
