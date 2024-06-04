import {
  AWS,
  BLENDER,
  CSHARP,
  EXPRESS,
  GHPAGES,
  JAVASCRIPT,
  NEXTJS,
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
  img: string
  live?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio',
    desc: 'My personal portfolio site',
    tech: [NEXTJS, REACT, TAILWINDCSS, TYPESCRIPT, VERCEL, SHADCN, THREEJS],
    repo: 'https://github.com/eric-k-chu/kiyuen',
    live: 'https://www.kiyuen.dev',
    img: '/image/portfolio.png',
  },
  {
    title: 'Castle 2.0',
    desc: 'Search Engine using Chess.com API',
    tech: [NEXTJS, REACT, TAILWINDCSS, TYPESCRIPT, VERCEL],
    repo: 'https://github.com/eric-k-chu/Castle-v2',
    img: '/image/castle2.png',
  },
  {
    title: 'Artus',
    desc: 'Short form video hosting platform',
    tech: [REACT, TAILWINDCSS, VITE, TYPESCRIPT, AWS, EXPRESS, POSTGRESQL],
    repo: 'https://github.com/eric-k-chu/Artus',
    img: '/image/artus.png',
  },
  {
    title: 'Castle',
    desc: 'Search Engine using Chess.com API',
    tech: [JAVASCRIPT, GHPAGES],
    repo: 'https://github.com/eric-k-chu/Castle',
    live: 'https://eric-k-chu.github.io/Castle/',
    img: '/image/castle.png',
  },
  {
    title: 'Geo Run',
    desc: '2.5D Endless Runner',
    tech: [UNITY, CSHARP, GHPAGES, BLENDER],
    repo: 'https://github.com/eric-k-chu/Geo-Run',
    live: 'https://eric-k-chu.github.io/Geo-Run-Host/',
    img: '/image/georun.png',
  },
  {
    title: 'Project S',
    desc: '2.5D Platformer',
    tech: [UNITY, CSHARP, BLENDER],
    repo: 'https://github.com/eric-k-chu/Project-S',
    img: '/image/projects.png',
  },
]
