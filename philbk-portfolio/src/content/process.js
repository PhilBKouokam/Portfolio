export const processContent = {
  section: {
    eyebrow: 'How I Build',
    heading: 'Decisions before deliverables.',
    description:
      'My process is designed to resist the first plausible answer. Each stage narrows uncertainty before it adds implementation.',
  },
  steps: [
    {
      id: 'find-the-problem',
      title: 'Find the real problem',
      description:
        'Start with the behavior behind the request, not the requested feature. If I misunderstand what someone is trying to accomplish, efficient execution only produces the wrong thing faster.',
    },
    {
      id: 'name-the-constraint',
      title: 'Name the constraint',
      description:
        'Identify what actually limits the outcome—friction, trust, time, data, or system behavior. The dominant constraint determines where complexity is justified and where it is waste.',
    },
    {
      id: 'challenge-the-answer',
      title: 'Challenge the first answer',
      description:
        'Use research and AI to generate alternatives, expose assumptions, and pressure-test the obvious solution. The wider search is useful; choosing among the tradeoffs remains my responsibility.',
    },
    {
      id: 'smallest-useful-system',
      title: 'Design the smallest useful system',
      description:
        'Prefer the least complicated product and architecture that resolve the constraint. Simplicity shortens feedback loops and makes the important behavior easier to understand, test, and change.',
    },
    {
      id: 'verify-with-evidence',
      title: 'Verify against reality',
      description:
        'Treat confidence as a hypothesis. Test correctness, accessibility, and product behavior, then use real feedback to decide whether to refine, remove, or continue—not merely whether the code runs.',
    },
  ],
}
