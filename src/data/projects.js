// All project data lives in this file.
// To take a demo live, fill in demoUrl and repoUrl on the matching
// project below and the buttons will appear automatically.

import triageBotCover from '@/assets/projects/triage-bot.webp'
import alderwoodCover from '@/assets/projects/alderwood.webp'
import docPipelineCover from '@/assets/projects/doc-pipeline.webp'

export const projects = [
  {
    title: 'AI Support Ticket Triage Bot',
    description:
      'Incoming support requests get classified, routed, and paired with a suggested first reply.',
    status: 'Demo launching soon',
    image: triageBotCover,
    imageAlt: 'Cover illustration for the AI support ticket triage demo',
    demoUrl: null,
    repoUrl: null,
  },
  {
    title: 'Alderwood Reporting Dashboard',
    description:
      'A live dashboard where every chart explains itself in plain language.',
    status: 'Live',
    image: alderwoodCover,
    imageAlt: 'Screenshot of the Alderwood reporting dashboard with KPI tiles and charts',
    demoUrl: 'https://alderwood-dashboard.vercel.app/',
    repoUrl: 'https://github.com/raymondgamiao/alderwood-dashboard',
  },
  {
    title: 'Document and Email Processing',
    description:
      'Emails and attachments become clean structured data with no manual retyping.',
    status: 'Live',
    image: docPipelineCover,
    imageAlt: 'Cover illustration for the document and email processing demo',
    demoUrl: 'https://doc-pipeline-five.vercel.app/',
    repoUrl: 'https://github.com/raymondgamiao/doc-pipeline',
  },
]
