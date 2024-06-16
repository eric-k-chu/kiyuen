export type Technology =
  | 'nextjs'
  | 'react'
  | 'sst'
  | 'vercel'
  | 'awslambda'
  | 'awsdynamodb'
  | 'postgresql'
  | 'typescript'
  | 'javascript'
  | 'nodejs'
  | 'turborepo'
  | 'vite'
  | 'git'
  | 'tailwindcss'
  | 'express'
  | 'csharp'
  | 'cpp'
  | 'unity'
  | 'blender'
  | 'linux'
  | 'swift'
  | 'pnpm'
  | 'npm'
  | 'shadcnui'
  | 'threejs'
  | 'aws'
  | 'github'
  | 'ghpages'

export type TechIcon = {
  src: string
  alt?: string
  invert?: boolean
}

export const techIcons: Record<Technology, TechIcon> = {
  nextjs: { src: '/nextjs.svg', alt: 'Next.js', invert: true },
  react: { src: '/react.svg', alt: 'React' },
  sst: { src: '/sst.svg', alt: 'SST' },
  vercel: { src: '/vercel.svg', alt: 'Vercel', invert: true },
  awslambda: { src: '/awslambda.svg', alt: 'AWS Lambda' },
  awsdynamodb: { src: '/amazondynamodb.svg', alt: 'AWS DynamoDb' },
  postgresql: { src: '/postgresql.svg', alt: 'PostgreSQL' },
  typescript: { src: '/typescript.svg', alt: 'TypeScript' },
  javascript: { src: '/javascript.svg', alt: 'JavaScript' },
  nodejs: { src: '/nodejs.svg', alt: 'Node.js' },
  turborepo: { src: '/turborepo.svg', alt: 'Turborepo' },
  vite: { src: '/vite.svg', alt: 'Vite' },
  git: { src: '/git.svg', alt: 'Git' },
  tailwindcss: { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  express: { src: '/express.svg', alt: 'Express', invert: true },
  csharp: { src: '/csharp.svg', alt: 'C#' },
  cpp: { src: '/cpp.svg', alt: 'C++' },
  unity: { src: '/unity.svg', alt: 'Unity', invert: true },
  blender: { src: '/blender.svg', alt: 'Blender' },
  linux: { src: '/linux.svg', alt: 'Linux' },
  swift: { src: '/swift.svg', alt: 'Swift' },
  pnpm: { src: '/pnpm.svg', alt: 'pnpm' },
  npm: { src: '/npm.svg', alt: 'npm' },
  shadcnui: { src: '/shadcnui.svg', alt: 'shadcn/ui', invert: true },
  threejs: { src: '/threejs.svg', alt: 'Three.js', invert: true },
  aws: { src: '/aws.svg', alt: 'AWS', invert: true },
  github: { src: '/github.svg', alt: 'GitHub', invert: true },
  ghpages: { src: '/ghpages.svg', alt: 'GitHub Pages', invert: true },
}

type BuildTechIconInput = Pick<TechIcon, 'alt' | 'invert'> & {
  tech: Technology
}

export function buildTechIcon({ tech, alt, invert }: BuildTechIconInput): TechIcon {
  const icon = techIcons[tech]
  if (!icon) throw new Error(`Tech icon not found for "${tech}"`)

  return {
    src: icon.src,
    alt: alt ?? icon.alt,
    invert: invert ?? icon.invert,
  }
}
