// All case study and project data lives in this file.
// To take a demo live, fill in demoUrl and repoUrl on the matching
// project below and the buttons will appear automatically.

export const featuredCaseStudy = {
  title: 'AI-Powered Ticket Triage and Investigation System for an Engineering Team',
  badge: 'Production system, private deployment',
  problem:
    'An engineering team was buried in reliability tickets. Every incoming issue had to be read, categorized, and routed by hand before any real investigation could start. Senior engineers were losing hours each week to sorting instead of solving, and important tickets sat in the queue waiting for someone to notice them.',
  solution:
    'I designed and built a production system that handles the front half of every ticket automatically. Incoming reliability tickets are classified, routed to the right team, and put through a guided AI investigation that pulls together logs, history, and likely causes before an engineer ever opens them. A daily briefing posts to Slack summarizing what came in, what got resolved, and what needs attention. Behind it all sits a self-improving knowledge base that learns from every resolved ticket, so the system gets sharper the longer it runs.',
  // Replace the [X] placeholders below with real Phase 1 numbers.
  results: [
    '[X]% faster triage from ticket arrival to the correct owner',
    '[X] hours of manual sorting saved per week',
    '[X]% of tickets now arrive with a completed first-pass investigation',
  ],
}

export const projects = [
  {
    title: 'AI Support Ticket Triage Bot',
    description:
      'A live demo of automated support triage. Incoming requests get classified by topic and urgency, routed to the right queue, and paired with a suggested first response, so a small team can keep up with a busy inbox.',
    status: 'Demo launching soon',
    demoUrl: null,
    repoUrl: null,
  },
  {
    title: 'Small Business Reporting Dashboard with AI Summaries',
    description:
      'A reporting dashboard built on realistic sample business data. Every chart comes with a plain-language summary of what changed, why it matters, and what to look at next, so nobody has to squint at graphs to get the story.',
    status: 'Live',
    demoUrl: 'https://alderwood-dashboard.vercel.app/',
    repoUrl: 'https://github.com/raymondgamiao/alderwood-dashboard',
  },
  {
    title: 'Document and Email Processing Automation',
    description:
      'A pipeline demo that reads incoming emails and attachments, pulls out the key details, and files clean structured data where it belongs. It shows how much manual retyping and forwarding a small team can simply stop doing.',
    status: 'Demo launching soon',
    demoUrl: null,
    repoUrl: null,
  },
]
