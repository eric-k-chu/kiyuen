import { Technology } from './technology'

export type Project = {
  name: string
  description: string
  technologies: Technology[]
  repo: string
  img: string
  live?: string
}
