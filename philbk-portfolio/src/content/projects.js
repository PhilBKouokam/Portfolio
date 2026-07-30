import calorieBankShot from '../assets/images/projects/caloriebank.png'
import spendWiseShot from '../assets/images/projects/spendwise.png'
import habitTrackerShot from '../assets/images/projects/habit-tracker.png'
import philbkResumeShot from '../assets/images/projects/philbk-resume.png'
import awsHighlyAvailableShot from '../assets/images/projects/aws-highly-available-web-application.png'
import awsServerlessEtlShot from '../assets/images/projects/aws-serverless-etl-pipeline.png'

export const projectsContent = {
  section: {
    eyebrow: 'Products',
    heading: 'Evidence through products.',
    description:
      'Each product begins with a real problem, then becomes a set of decisions about usefulness, trust, behavior, and the system required to support it.',
  },
  actions: {
    loomVideoLabel: '▶ Watch 2 min Demo',
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
      id: 'primary-products',
      title: 'Primary Products',
      projectIds: ['caloriebank', 'spendwise', 'habit-tracker'],
    },
    {
      id: 'additional-engineering-work',
      title: 'Additional Engineering Work',
      projectIds: [
        'aws-highly-available-web-application',
        'aws-serverless-etl-pipeline',
        'philbk-resume',
      ],
    },
  ],
  featuredDetails: [
    { id: 'problem', title: 'The problem', field: 'problemsSolved' },
    { id: 'decision', title: 'Engineering decisions', field: 'architecture' },
  ],
  projects: [
    {
      id: 'caloriebank', slug: 'caloriebank', title: 'CalorieBank', label: 'Flagship project',
      titleBadge: '⭐ Featured Project',
      tagline: 'A more flexible way to think about calories across a week.',
      description: 'The current publicly available CalorieBank web experience uses a weekly calorie-banking workflow to help people balance fitness goals with enjoying the foods they care about. It gives people a clearer, more flexible way to understand what they can eat while continuing to make progress toward their goals.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'], featured: true,
      liveDemo: 'https://caloriebank-pi.vercel.app/', github: 'https://github.com/PhilBKouokam/CalorieBank',
      loomVideo: 'https://www.loom.com/share/3a0f06928e004bad80cd4ae181f65d1c',
      architecture: 'A React client with Context state connects to authenticated Express APIs, MongoDB models, and AWS S3 uploads across separate frontend and backend deployments.',
      engineeringChallenges: 'Keeping weekly calorie balances predictable across client state, authenticated API responses, and persisted user data.',
      problemsSolved: 'Daily calorie targets can feel rigid and disconnected from how people actually plan meals, social occasions, and fitness goals across a week.',
      intendedOutcome: 'Give people a clearer, more flexible way to understand what they can eat while continuing to make progress toward their goals.',
      keyFeatures: ['Weekly calorie banking', 'JWT-protected REST APIs', 'AWS S3 uploads'],
      lessonsLearned: 'Reliable product behavior depends on explicit domain rules, focused UI states, and clean boundaries between client and server concerns.',
      screenshot: calorieBankShot, altText: 'CalorieBank application dashboard',
    },
    {
      id: 'spendwise', slug: 'spendwise', title: 'SpendWise', label: 'Featured project',
      tagline: 'A responsive personal finance dashboard.',
      description: 'SpendWise brings transaction tracking, spending patterns, and receipt storage into one responsive workflow, making day-to-day financial activity easier to record, understand, and revisit.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'], featured: false,
      liveDemo: 'https://spendwise-two-navy.vercel.app/', github: 'https://github.com/PhilBKouokam/spendwise',
      loomVideo: 'https://www.loom.com/share/75bc2eae927b4d0d9c22ff35297a09c1',
      architecture: 'A React dashboard connects authenticated CRUD APIs, MongoDB persistence, chart transformations, and AWS S3 receipt storage while scoping records to each account.',
      engineeringChallenges: 'Keeping financial summaries, chart data, receipt uploads, and authenticated CRUD workflows synchronized.',
      problemsSolved: 'Personal finance data becomes less useful when transactions, receipts, and spending summaries live in separate places.',
      intendedOutcome: 'Make day-to-day financial activity easier to record, understand, and revisit in one interface.',
      keyFeatures: ['Expense CRUD workflows', 'Financial charts', 'AWS S3 receipt uploads'],
      lessonsLearned: 'Financial interfaces require consistent data transformations and deliberate visual hierarchy to remain trustworthy.', screenshot: spendWiseShot, altText: 'SpendWise personal finance dashboard',
    },
    {
      id: 'habit-tracker', slug: 'habit-tracker', title: 'Habit Tracker', label: 'Featured project',
      tagline: 'A complete MERN habit tracking application.',
      description: 'Habit Tracker provides a direct daily workflow for creating, maintaining, and reviewing personal habits, keeping progress focused and predictable without unnecessary complexity.',
      technologies: ['React', 'Context API', 'Node.js', 'Express', 'MongoDB'], featured: false,
      liveDemo: 'https://habit-tracker-six-murex.vercel.app/', github: 'https://github.com/PhilBKouokam/HabitTracker',
      loomVideo: 'https://www.loom.com/share/f69f4dce4b53414299a23805874cc25b',
      architecture: 'A MERN application combines Context-based client state, authenticated Express routes, explicit CRUD API contracts, and persistent MongoDB models.',
      engineeringChallenges: 'Keeping authenticated CRUD operations synchronized across local state, API responses, and persisted habit records.',
      problemsSolved: 'Building consistency is harder when the act of recording progress becomes another complicated task.',
      intendedOutcome: 'Keep habit tracking focused and predictable so the product supports the routine rather than distracting from it.',
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
      intendedOutcome: 'Produce a reliable résumé from one validated source of truth.',
      supportingSummary: 'A deterministic résumé publishing system with canonical content, validation, and repeatable PDF output.',
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
      intendedOutcome: 'Demonstrate a fault-tolerant AWS architecture that responds to health and demand.',
      supportingSummary: 'A highly available AWS architecture combining load balancing, Auto Scaling, health monitoring, and automated recovery.',
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
      intendedOutcome: 'Automate repeatable data transformation using managed, event-driven AWS services.',
      supportingSummary: 'An event-driven AWS pipeline that transforms incoming CSV data into JSON using managed services.',
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
  'intendedOutcome',
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
