// All project data lives in this file.
// To take a demo live, fill in demoUrl and repoUrl on the matching
// project below and the buttons will appear automatically.

import alderwoodCover from '@/assets/projects/alderwood.webp'
import docPipelineCover from '@/assets/projects/doc-pipeline.webp'
import hamontageCover from '@/assets/projects/hamontage.webp'

export const projects = [
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
  {
    title: 'Hamontage Trip Gallery',
    description:
      'Photos dropped into Google Drive show up on a live gallery every night, with the best shots picked by AI.',
    status: 'Live',
    image: hamontageCover,
    imageAlt: 'Landing page of the Hamontage trip gallery showing a river and mountain photo',
    demoUrl: 'https://hamontage.vercel.app/',
    repoUrl: null,
  },
]
