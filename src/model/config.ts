import { Metadata } from 'next'
import { Experience, TinyJobHistory } from './experience'
import { Project } from './projects'

export type SiteConfig = Metadata & {
  navLinks: Link[]
  updatedAt: string
}

export type Link = 'About' | 'Experience' | 'Projects' | 'Contact'

export type PortfolioConfig = {
  socials: Socials
  currentLocation: `${string}, ${string}`
  currentJob: TinyJobHistory & { link: string }
  experiences: Experience[]
  projects: Project[]
}

export type Socials = {
  github: string
  linkedin: string
}
