import { PortfolioConfig, SiteConfig } from '@/model'

export const SITE_CONFIG: SiteConfig = {
  title: 'Eric Chu',
  description: 'Eric Chu portfolio website',
  navLinks: ['About', 'Experience', 'Projects', 'Contact'],
  updatedAt: '6/15/2024',
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  socials: {
    github: 'https://www.github.com/eric-k-chu',
    linkedin: 'https://www.linkedin.com/in/eric-k-chu',
  },
  currentJob: {
    title: 'Software Engineer',
    company: 'Terros',
    link: 'https://www.terros.com/',
  },
  experiences: [
    {
      year: '2024',
      history: [
        {
          start: 'Apr 2024',
          end: 'Present',
          title: 'Software Engineer',
          company: 'Terros',
          skills: [
            'typescript',
            'sst',
            'awslambda',
            'awsdynamodb',
            'nextjs',
            'react',
            'vercel',
            'nodejs',
            'pnpm',
            'turborepo',
            'git',
            'tailwindcss',
          ],
        },
        {
          start: 'Feb 2024',
          end: 'Mar 2024',
          title: 'Freelance Web Developer',
          company: 'Randy Mark Auctioneer',
          skills: ['nextjs', 'typescript', 'react', 'tailwindcss', 'nodejs', 'github'],
        },
        {
          start: 'Jan 2024',
          end: 'Mar 2024',
          title: 'Teaching Assistant',
          company: 'LearningFuze',
          skills: [
            'react',
            'typescript',
            'javascript',
            'aws',
            'postgresql',
            'nodejs',
            'vite',
            'express',
            'npm',
            'git',
            'tailwindcss',
          ],
        },
      ],
    },
    {
      year: '2023',
      history: [
        {
          start: 'Aug 2023',
          end: 'Dec 2023',
          title: 'Full Stack Developer In-Training',
          company: 'LearningFuze',
          skills: [
            'react',
            'typescript',
            'javascript',
            'aws',
            'postgresql',
            'nodejs',
            'vite',
            'express',
            'npm',
            'git',
            'tailwindcss',
          ],
        },
      ],
    },
    {
      year: '2022',
      history: [
        {
          start: 'Aug 2018',
          end: 'Aug 2022',
          title: 'B.S in Computer Science',
          company: 'California State University, Fullerton',
          skills: ['cpp', 'csharp', 'unity', 'git', 'blender', 'linux', 'swift'],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Portfolio',
      description: 'My personal portfolio site',
      technologies: [
        'nextjs',
        'react',
        'tailwindcss',
        'typescript',
        'vercel',
        'shadcnui',
        'threejs',
      ],
      repo: 'https://github.com/eric-k-chu/kiyuen',
      live: 'https://www.kiyuen.dev',
      img: '/image/portfolio.png',
    },
    {
      name: 'Castle 2.0',
      description: 'Search Engine using Chess.com API',
      technologies: ['nextjs', 'react', 'tailwindcss', 'typescript', 'vercel'],
      repo: 'https://github.com/eric-k-chu/Castle-v2',
      img: '/image/castle2.png',
    },
    {
      name: 'Artus',
      description: 'Short form video hosting platform',
      technologies: ['react', 'tailwindcss', 'vite', 'typescript', 'aws', 'express', 'postgresql'],
      repo: 'https://github.com/eric-k-chu/Artus',
      img: '/image/artus.png',
    },
    {
      name: 'Castle',
      description: 'Search Engine using Chess.com API',
      technologies: ['javascript', 'ghpages'],
      repo: 'https://github.com/eric-k-chu/Castle',
      live: 'https://eric-k-chu.github.io/Castle/',
      img: '/image/castle.png',
    },
    {
      name: 'Geo Run',
      description: '2.5D Endless Runner',
      technologies: ['unity', 'csharp', 'ghpages', 'blender'],
      repo: 'https://github.com/eric-k-chu/Geo-Run',
      live: 'https://eric-k-chu.github.io/Geo-Run-Host/',
      img: '/image/georun.png',
    },
    {
      name: 'Project S',
      description: '2.5D Platformer',
      technologies: ['unity', 'csharp', 'blender'],
      repo: 'https://github.com/eric-k-chu/Project-S',
      img: '/image/projects.png',
    },
  ],
}
