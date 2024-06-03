import {
  AWS,
  AWS_DYNAMODB,
  AWS_LAMBDA,
  BLENDER,
  CPP,
  CSHARP,
  EXPRESS,
  GIT,
  GITHUB,
  JAVASCRIPT,
  LINUX,
  NEXTJS,
  NODEJS,
  NPM,
  PNPM,
  POSTGRESQL,
  REACT,
  SST,
  SWIFT,
  TAILWINDCSS,
  TURBOREPO,
  TYPESCRIPT,
  Tech,
  UNITY,
  VERCEL,
  VITE,
} from './technologies'

export const TIMELINE: TimelineItem[] = [
  {
    year: 2024,
    exp: [
      {
        start: 'Apr 2024',
        end: 'Present',
        title: 'Software Engineer',
        place: 'Terros',
        skills: [
          TYPESCRIPT,
          SST,
          AWS_LAMBDA,
          AWS_DYNAMODB,
          NEXTJS,
          REACT,
          VERCEL,
          NODEJS,
          PNPM,
          TURBOREPO,
          GIT,
          TAILWINDCSS,
        ],
      },
      {
        start: 'Feb 2024',
        end: 'Mar 2024',
        title: 'Freelance Web Developer',
        place: 'Randy Mark Auctioneer',
        skills: [NEXTJS, TYPESCRIPT, REACT, TAILWINDCSS, NODEJS, GITHUB],
      },
      {
        start: 'Jan 2024',
        end: 'Mar 2024',
        title: 'Teaching Assistant',
        place: 'LearningFuze',
        skills: [
          REACT,
          TYPESCRIPT,
          JAVASCRIPT,
          AWS,
          POSTGRESQL,
          NODEJS,
          VITE,
          EXPRESS,
          NPM,
          GIT,
          TAILWINDCSS,
        ],
      },
    ],
  },
  {
    year: 2023,
    exp: [
      {
        start: 'Aug 2023',
        end: 'Dec 2023',
        title: 'Full Stack Developer In-Training',
        place: 'LearningFuze',
        skills: [
          REACT,
          TYPESCRIPT,
          JAVASCRIPT,
          AWS,
          POSTGRESQL,
          NODEJS,
          VITE,
          EXPRESS,
          NPM,
          GIT,
          TAILWINDCSS,
        ],
      },
    ],
  },
  {
    year: 2018,
    exp: [
      {
        start: 'Aug 2018',
        end: 'Aug 2022',
        title: 'Bachelor of Science in Computer Science',
        place: 'California State University, Fullerton',
        skills: [CPP, CSHARP, UNITY, GIT, BLENDER, LINUX, SWIFT],
      },
    ],
  },
]

export type TimelineItem = {
  year: number
  exp: WorkExperience[]
}

export type WorkExperience = {
  start: `${Month3} ${number}`
  end: `${Month3} ${number}` | 'Present'
  title: string
  place: string
  skills: Tech[]
}

type Month3 =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'
