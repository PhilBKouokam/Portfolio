export const processContent = {
  section: {
    eyebrow: 'Development process',
    heading: 'I trace systems, not symptoms.',
    description:
      'I approach an application as a connected flow of entry points, dependencies, state, requests, business rules, and persisted data. That perspective shapes how I architect, build, and debug software.',
  },
  systemView: {
    label: 'A request through the system',
    nodes: [
      'Browser',
      'main.jsx',
      'Component tree',
      'HTTP request',
      'Express route',
      'Controller',
      'Business logic',
      'MongoDB',
    ],
    explanation:
      'When an error appears in the interface, I follow the data backward through this chain. The component displaying a problem is evidence—not automatically the source.',
  },
  steps: [
    {
      id: 'understand',
      title: 'Understand the system',
      description:
        'Map entry points, dependencies, data ownership, and the boundaries between browser, client, server, and database.',
    },
    {
      id: 'architect',
      title: 'Design the architecture',
      description:
        'Define responsibilities and interfaces before implementation so each layer has a clear reason to change.',
    },
    {
      id: 'build',
      title: 'Build modular components',
      description:
        'Create focused units with explicit inputs, predictable behavior, and composition paths that remain understandable.',
    },
    {
      id: 'connect',
      title: 'Connect frontend and backend',
      description:
        'Treat HTTP contracts as shared boundaries, including request shape, authentication, failure states, and response behavior.',
    },
    {
      id: 'validate',
      title: 'Validate data flow',
      description:
        'Confirm where data originates, how it changes, who consumes it, and whether each transition preserves the intended state.',
    },
    {
      id: 'debug',
      title: 'Debug dependencies',
      description:
        'Trace unexpected behavior across state, props, context, APIs, authentication, business logic, and persistence.',
    },
    {
      id: 'deploy',
      title: 'Deploy deliberately',
      description:
        'Verify environment configuration, production builds, network boundaries, and platform behavior—not only local success.',
    },
    {
      id: 'iterate',
      title: 'Iterate from evidence',
      description:
        'Use observed behavior and product needs to refine the system without weakening its existing contracts.',
    },
  ],
}
