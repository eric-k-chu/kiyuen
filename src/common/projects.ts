import {
  AWS,
  BLENDER,
  CSHARP,
  EXPRESS,
  GHPAGES,
  JAVASCRIPT,
  NEXTJS,
  NODEJS,
  POSTGRESQL,
  REACT,
  SHADCN,
  TAILWINDCSS,
  THREEJS,
  TYPESCRIPT,
  Tech,
  UNITY,
  VERCEL,
  VITE,
} from './technologies'

export type Project = {
  title: string
  desc: string
  tech: Tech[]
  repo: string
  live?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Site',
    desc: 'My personal portfolio site',
    tech: [NEXTJS, REACT, TAILWINDCSS, TYPESCRIPT, VERCEL, SHADCN, THREEJS],
    repo: 'https://github.com/eric-k-chu/kiyuen',
    live: 'https://kiyuen.vercel.app/',
  },
  {
    title: 'Castle 2.0',
    desc: 'Search Engine using Chess.com API',
    tech: [NEXTJS, REACT, TAILWINDCSS, TYPESCRIPT, VERCEL],
    repo: 'https://github.com/eric-k-chu/Castle-v2',
  },
  {
    title: 'Artus',
    desc: 'Short video form hosting platform',
    tech: [REACT, TAILWINDCSS, VITE, TYPESCRIPT, AWS, NODEJS, EXPRESS, POSTGRESQL],
    repo: 'https://github.com/eric-k-chu/Artus',
  },
  {
    title: 'Castle',
    desc: 'Search Engine using Chess.com API',
    tech: [JAVASCRIPT, GHPAGES],
    repo: 'https://github.com/eric-k-chu/Castle',
    live: 'https://eric-k-chu.github.io/Castle/',
  },
  {
    title: 'Geo Run',
    desc: '2.5D Endless Runner',
    tech: [UNITY, CSHARP, GHPAGES, BLENDER],
    repo: 'https://github.com/eric-k-chu/Geo-Run',
    live: 'https://eric-k-chu.github.io/Geo-Run-Host/',
  },
  {
    title: 'Project S',
    desc: '2.5D Platformer',
    tech: [UNITY, CSHARP, BLENDER],
    repo: 'https://github.com/eric-k-chu/Project-S',
  },
]
