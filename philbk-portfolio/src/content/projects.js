import calorieBankMobileShot from '../assets/images/projects/caloriebank-mobile.jpg'
import spendWiseShot from '../assets/images/projects/spendwise.png'
import habitTrackerShot from '../assets/images/projects/habit-tracker.png'
import philbkResumeShot from '../assets/images/projects/philbk-resume.png'
import awsHighlyAvailableShot from '../assets/images/projects/aws-highly-available-web-application.png'
import awsServerlessEtlShot from '../assets/images/projects/aws-serverless-etl-pipeline.png'

export const projectsContent = {
  section: {
    eyebrow: 'Products',
    heading: 'The decisions behind the products.',
    description:
      'CalorieBank is the deeper full-stack work. The nutrition discovery prototypes explore a narrower interface question: how to turn a per-serving goal into a useful set of food choices.',
  },
  actions: {
    loomVideoLabel: '▶ Watch 2 min Demo',
    liveDemoLabel: 'Live Demo',
    githubLabel: 'GitHub',
    repositoryLabel: 'Repository',
    readmeLabel: 'View README',
    unavailableLiveDemoTitle: 'Live demo link coming soon',
    projectOverrides: {
      CalorieBank: {
        liveDemoLabel: 'Watch mobile preview',
        liveDemoAriaLabel: 'Watch the CalorieBank mobile recording preview',
        githubLabel: 'Mobile source',
      },
      'Walmart nutrition discovery': { liveDemoLabel: 'Explore walkthrough' },
      'Amazon nutrition discovery': { liveDemoLabel: 'Explore walkthrough' },
      'Whole Foods nutrition discovery': { liveDemoLabel: 'Explore walkthrough' },
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
      title: 'Flagship Product',
      projectIds: ['caloriebank'],
    },
    {
      id: 'nutrition-discovery-prototypes',
      title: 'Independent Nutrition Discovery Prototypes',
      description: 'Exploratory frontend and product design work based on observed retailer interfaces. These are independent proposals, with bounded example data and no retailer affiliation or live shopping. Public source packages use labeled image placeholders; the live walkthroughs retain their reference visuals.',
      presentation: 'showcase',
      projectIds: ['walmart-nutrition', 'amazon-nutrition', 'wholefoods-nutrition'],
    },
    {
      id: 'additional-engineering-work',
      title: 'Additional Engineering Work',
      projectIds: [
        'spendwise',
        'habit-tracker',
        'aws-highly-available-web-application',
        'aws-serverless-etl-pipeline',
        'philbk-resume',
      ],
    },
  ],
  featuredDetails: [
    { id: 'problem', title: 'Why it exists', field: 'problemsSolved' },
    { id: 'approach', title: 'Why this approach', field: 'whyApproach' },
    { id: 'decision', title: 'Why the system fits', field: 'architecture' },
    { id: 'proof', title: 'What it proves', field: 'technicalProof' },
  ],
  projects: [
    {
      id: 'caloriebank', slug: 'caloriebank', title: 'CalorieBank', label: 'Flagship project',
      titleBadge: '⭐ Featured Project',
      tagline: 'A mobile calorie bank for planning around real life.',
      description: 'CalorieBank connects nutrition and activity data to a calorie bank. The public preview is an actual 46-second iPhone recording: Today, weekly History, saving a Banking Goal, and updating a burn target. It shows the evolving mobile product in use.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'], featured: true,
      liveDemo: 'https://caloriebank-mobile-philbk.kouokambryan.chatgpt.site',
      github: 'https://github.com/PhilBKouokam/CalorieBank/tree/codex/private-beta-release',
      earlierWebDemo: 'https://caloriebank-pi.vercel.app/',
      architecture: 'React Native and Expo present the mobile experience. An Express API validates requests; shared domain packages own banking rules, while PostgreSQL and Prisma persist traceable ledger records. Provider ingestion stays separate from balance calculations.',
      engineeringChallenges: 'Keeping provider inputs, completed-day accounting, corrections, and mobile state consistent without treating current-day estimates as bank deposits.',
      problemsSolved: 'Identical daily targets do not always fit social events, favorite foods, or changing activity. A visible bank gives those decisions context across completed days.',
      whyApproach: 'Make the balance explainable before adding more features. Banking Goals organize the existing bank; activity estimates support planning without changing finalized accounting.',
      technicalProof: 'The recording demonstrates the mobile interaction. The linked source provides the deeper evidence: validated API boundaries, shared banking logic, relational persistence, provider synchronization, and automated domain/API tests.',
      intendedOutcome: 'Give people a clearer, more flexible way to understand what they can eat while continuing to make progress toward their goals.',
      keyFeatures: ['Available Bank and History', 'Banking Goals', 'Burn-target planning'],
      lessonsLearned: 'Reliable product behavior depends on explicit domain rules, focused UI states, and clean boundaries between client and server concerns.',
      screenshot: calorieBankMobileShot, altText: 'Actual CalorieBank Today screen from the publicly shared iPhone recording',
      preview: {
        layout: 'mobile',
        eyebrow: 'Actual iPhone app recording',
        title: 'CalorieBank, on iPhone.',
        summary: 'Today · History · Banking Goal · Burn target',
        caption: '46 seconds · October 8, 2026',
      },
    },
    {
      id: 'walmart-nutrition', slug: 'walmart-nutrition', title: 'Walmart nutrition discovery',
      label: 'Independent exploratory prototype',
      tagline: 'Keep a precise nutrition goal beside the food results.',
      description: 'An independent frontend and product design proposal for nutrition discovery in Walmart grocery search.',
      technologies: ['HTML', 'CSS', 'JavaScript'], featured: false,
      liveDemo: 'https://low-cal-filter-walkthrough.kouokambryan.chatgpt.site/layout.html',
      github: 'https://github.com/PhilBKouokam/walmart-nutrition-discovery',
      problemsSolved: 'Broad categories can leave a shopper opening individual products to check whether a serving fits a specific calorie, protein, or fiber goal.',
      whyApproach: 'Separate calorie, protein, and fiber walkthroughs move from an observed interface to a proposed numeric per-serving control and same-screen filtered results.',
      architecture: 'Client-side filtering over bounded example products, with serving information kept visible beside the selected goal.',
      technicalProof: 'An interactive frontend proposal using example data. No live catalog, checkout, retailer integration, or measured shopper outcomes.',
      engineeringChallenges: 'Keep the selected nutrient, serving basis, and resulting product set understandable together.',
      keyFeatures: ['Observed → Proposed → Results', 'Numeric per-serving goals', 'Same-screen filtered results'],
      lessonsLearned: 'A useful filter needs an explicit serving basis and a visible relationship between the goal and its results.',
      intendedOutcome: 'Explore a clearer path from an individual nutrition goal to food choices.',
      details: [
        { title: 'The question', field: 'problemsSolved' },
        { title: 'What I built', field: 'whyApproach' },
        { title: 'Scope', field: 'technicalProof' },
      ],
    },
    {
      id: 'amazon-nutrition', slug: 'amazon-nutrition', title: 'Amazon nutrition discovery',
      label: 'Independent exploratory prototype',
      tagline: 'Refine existing nutrition tools with exact serving goals.',
      description: 'An independent frontend and product design proposal for regular Amazon retail search.',
      technologies: ['HTML', 'CSS', 'JavaScript'], featured: false,
      liveDemo: 'https://amazon-nutrition-discovery.kouokambryan.chatgpt.site',
      github: 'https://github.com/PhilBKouokam/amazon-nutrition-discovery',
      problemsSolved: 'Existing nutrition bands and product information provide a starting point; a shopper may still need a more precise goal with a consistent serving basis.',
      whyApproach: 'Separate calorie, protein, and fiber stories show observed evidence, proposed compact inline controls, and same-screen results. Selected numeric goals can be combined.',
      architecture: 'Client-side matching uses source-checked example facts and explicit labeled servings, with missing or conflicting required values excluded.',
      technicalProof: 'A bounded frontend walkthrough, extending observed tools. Example results do not represent the full Amazon catalog or measured customer improvements.',
      engineeringChallenges: 'Preserve serving-size context when applying precise goals to different packaged products.',
      keyFeatures: ['Observed → Proposed → Results', 'Combined per-serving goals', 'Same-screen filtered results'],
      lessonsLearned: 'Exact thresholds only help when serving sizes and missing-data boundaries remain clear.',
      intendedOutcome: 'Explore more precise discovery while respecting existing retailer capabilities.',
      details: [
        { title: 'The question', field: 'problemsSolved' },
        { title: 'What I built', field: 'whyApproach' },
        { title: 'Scope', field: 'technicalProof' },
      ],
    },
    {
      id: 'wholefoods-nutrition', slug: 'wholefoods-nutrition', title: 'Whole Foods nutrition discovery',
      label: 'Independent exploratory prototype',
      tagline: 'Make the serving part of the discovery decision.',
      description: 'An independent frontend and product design proposal for Whole Foods grocery discovery.',
      technologies: ['HTML', 'CSS', 'JavaScript'], featured: false,
      liveDemo: 'https://whole-foods-nutrition-discovery.kouokambryan.chatgpt.site',
      github: 'https://github.com/PhilBKouokam/whole-foods-nutrition-discovery',
      problemsSolved: 'A useful nutrition comparison depends on both the nutrient value and the portion it describes; broad labels alone do not answer every shopper’s question.',
      whyApproach: 'Calorie, protein, and fiber stories connect genuine observed references to compact numeric per-serving controls and same-screen filtered examples.',
      architecture: 'Client-side filtering preserves each product’s stated portion rather than silently treating unlike servings as equal.',
      technicalProof: 'A bounded frontend proposal with source-checked product examples. No live inventory, ordering, retailer affiliation, or measured sales results.',
      engineeringChallenges: 'Show precise nutrient thresholds while preserving different portion sizes and source limitations.',
      keyFeatures: ['Observed → Proposed → Results', 'Numeric per-serving goals', 'Explicit serving portions'],
      lessonsLearned: 'Serving context and evidence limitations belong beside the proposed result.',
      intendedOutcome: 'Explore food discovery that respects the shopper’s goal and the product’s stated portion.',
      details: [
        { title: 'The question', field: 'problemsSolved' },
        { title: 'What I built', field: 'whyApproach' },
        { title: 'Scope', field: 'technicalProof' },
      ],
    },
    {
      id: 'spendwise', slug: 'spendwise', title: 'SpendWise', label: 'Full-stack web project',
      supportingSummary: 'Authenticated transaction CRUD, financial charts, and AWS S3 receipt uploads in a responsive full-stack application.',
      tagline: 'Turning recorded transactions into usable financial context.',
      description: 'SpendWise brings transactions, visual summaries, and receipt records into one responsive experience so financial information is easier to interpret and act on.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'], featured: false,
      liveDemo: 'https://spendwise-two-navy.vercel.app/', github: 'https://github.com/PhilBKouokam/spendwise',
      loomVideo: 'https://www.loom.com/share/75bc2eae927b4d0d9c22ff35297a09c1',
      architecture: 'Transactions are scoped to authenticated accounts because financial records require clear ownership. MongoDB fits the evolving transaction and receipt model, Recharts turns the same records into visible patterns, and S3 handles receipt files without burdening the database.',
      engineeringChallenges: 'Keeping financial summaries, chart data, receipt uploads, and authenticated CRUD workflows synchronized.',
      problemsSolved: 'Recording an expense is not the same as understanding it. When transactions, receipts, and summaries are separated, people have more data but less usable visibility.',
      whyApproach: 'The product keeps capture and interpretation together: record the transaction, preserve its receipt, then see the pattern in the same workflow. That reduces the distance between information and a decision.',
      technicalProof: 'Demonstrates authenticated transaction CRUD, account-scoped MongoDB persistence, derived chart data, AWS S3 receipt uploads, and coordination across separate frontend and backend deployments.',
      intendedOutcome: 'Make day-to-day financial activity easier to record, understand, and revisit in one interface.',
      keyFeatures: ['Expense CRUD workflows', 'Financial charts', 'AWS S3 receipt uploads'],
      lessonsLearned: 'Financial interfaces require consistent data transformations and deliberate visual hierarchy to remain trustworthy.', screenshot: spendWiseShot, altText: 'SpendWise personal finance dashboard',
    },
    {
      id: 'habit-tracker', slug: 'habit-tracker', title: 'Habit Tracker', label: 'Full-stack web project',
      supportingSummary: 'A focused MERN workflow for creating habits, recording completion, and keeping authenticated state in sync.',
      tagline: 'Reducing the friction between intention and repetition.',
      description: 'Habit Tracker keeps creating a habit, recording completion, and reviewing the routine in one direct responsive workflow.',
      technologies: ['React', 'Context API', 'Node.js', 'Express', 'MongoDB'], featured: false,
      liveDemo: 'https://habit-tracker-six-murex.vercel.app/', github: 'https://github.com/PhilBKouokam/HabitTracker',
      loomVideo: 'https://www.loom.com/share/f69f4dce4b53414299a23805874cc25b',
      architecture: 'The interaction should feel immediate, so React Context keeps completion state coherent across the client. JWT-protected Express routes and MongoDB provide a simple ownership and persistence model without adding infrastructure the product does not need.',
      engineeringChallenges: 'Keeping authenticated CRUD operations synchronized across local state, API responses, and persisted habit records.',
      problemsSolved: 'A habit tool fails when tracking the routine creates enough friction to become a routine of its own. Consistency depends on making the return action clear and lightweight.',
      whyApproach: 'The product limits the workflow to the decisions that matter each day: what the habit is and whether it was completed. Fewer steps make the tool easier to revisit instead of competing with the behavior it supports.',
      technicalProof: 'Demonstrates JWT authentication, React Context state, habit CRUD and completion behavior, MongoDB persistence, and a responsive full-stack web experience.',
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
  'architecture',
  'engineeringChallenges',
  'problemsSolved',
  'keyFeatures',
  'lessonsLearned',
  'intendedOutcome',
  'whyApproach',
  'technicalProof',
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

      const isPrimaryProject = content.categories[0].projectIds.includes(project.id)
      const isOptionalReasoningField = ['whyApproach', 'technicalProof'].includes(field) && !isPrimaryProject

      if (!isOptionalReasoningField && (value == null || value === '' || isEmptyArray)) {
        throw new Error(`Project "${project.id || 'unknown'}" is missing required field "${field}".`)
      }
    })

    if (projectIds.has(project.id)) {
      throw new Error(`Project id "${project.id}" must be unique.`)
    }

    projectIds.add(project.id)

    if (!project.liveDemo && !project.github) {
      throw new Error(`Project "${project.id}" must have a verified live or source link.`)
    }

    if (project.screenshot && !project.altText) {
      throw new Error(`Project "${project.id}" screenshot must have alternative text.`)
    }
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
