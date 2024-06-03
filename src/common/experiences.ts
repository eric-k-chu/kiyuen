export type Tech = {
  src: string
  alt: string
  invert?: boolean
}

export const NEXTJS = buildTech('/nextdotjs.svg', 'Next.js', true)
export const REACT = buildTech('/react.svg', 'React')
export const SST = buildTech('/sst.svg', 'SST')
export const VERCEL = buildTech('/vercel.svg', 'Vercel', true)
export const AWS_LAMBDA = buildTech('/awslambda.svg', 'AWS Lambda')
export const AWS_DYNAMODB = buildTech('/amazondynamodb.svg', 'AWS DynamoDb')
export const POSTGRESQL = buildTech('/postgresql.svg', 'PostgreSQL')
export const TYPESCRIPT = buildTech('/typescript.svg', 'TypeScript')
export const JAVASCRIPT = buildTech('/javascript.svg', 'JavaScript')
export const NODEJS = buildTech('/nodejs.svg', 'Node.js')
export const TURBOREPO = buildTech('/turborepo.svg', 'Turborepo')
export const VITE = buildTech('/vite.svg', 'Vite')
export const GIT = buildTech('/git.svg', 'Git')
export const TAILWINDCSS = buildTech('/tailwindcss.svg', 'Tailwind CSS')
export const EXPRESS = buildTech('/express.svg', 'Express', true)
export const CSHARP = buildTech('/csharp.svg', 'C#')
export const CPP = buildTech('/cpp.svg', 'C++')
export const UNITY = buildTech('/unity.svg', 'Unity', true)
export const BLENDER = buildTech('/blender.svg', 'Blender')
export const LINUX = buildTech('/linux.svg', 'Linux')
export const SWIFT = buildTech('/swift.svg', 'Swift')

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

export type WorkExperience = {
  start: `${Month3} ${number}`
  end: `${Month3} ${number}` | 'Present'
  title: string
  place: string
  skills: Tech[]
}

export type TimelineItem = {
  year: number
  exp: WorkExperience[]
}

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
          TURBOREPO,
          GIT,
          TAILWINDCSS,
        ],
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
          POSTGRESQL,
          NODEJS,
          VITE,
          EXPRESS,
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
          POSTGRESQL,
          NODEJS,
          VITE,
          EXPRESS,
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

function buildTech(src: string, alt: string, invert?: boolean): Tech {
  return { src, alt, invert }
}
