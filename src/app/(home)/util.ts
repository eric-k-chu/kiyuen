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

export const SECTIONS: Section[] = [
  {
    type: 'cover',
    id: 'home',
    title: 'Full Stack Developer',
  },
  ...meta.experience.map<Section>((e) => ({
    type: 'content',
    kind: 'experience',
    id: e.title,
    title: e.title,
    subtitle: e.company,
    date: formatDateRange(e.start, e.end),
    items: e.stack.map((name) => ({ name })),
  })),
  ...meta.education.map<Section>((e) => ({
    type: 'content',
    kind: 'education',
    id: e.cert,
    title: e.cert,
    subtitle: e.school,
    date: formatDateRange(e.start, e.end),
    items: e.projects,
  })),
]
