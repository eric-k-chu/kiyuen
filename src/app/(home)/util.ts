import { formatDateRange } from '@/lib'
import meta from '~meta'

export type Section =
  | {
      type: 'cover'
      id: string
      title: string
    }
  | {
      type: 'content'
      kind: 'experience' | 'education'
      id: string
      title: string
      subtitle: string
      date: string
      items: {
        name: string
        link?: string
      }[]
    }

const experienceToSection = (e: (typeof meta.experience)[number]): Section => ({
  type: 'content',
  kind: 'experience',
  id: e.title,
  title: e.title,
  subtitle: e.company,
  date: formatDateRange(e.start, e.end),
  items: e.stack.map((name) => ({ name })),
})

const educationToSection = (e: (typeof meta.education)[number]): Section => ({
  type: 'content',
  kind: 'education',
  id: e.cert,
  title: e.cert,
  subtitle: e.school,
  date: formatDateRange(e.start, e.end),
  items: e.projects,
})

export const SECTIONS: Section[] = [
  { type: 'cover', id: 'home', title: meta.title },
  ...meta.experience.map(experienceToSection),
  ...meta.education.map(educationToSection),
]
