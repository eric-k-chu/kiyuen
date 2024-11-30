import { formatDateRange } from '@/lib'
import meta from '~meta'

type ResumeHeader = {
  title: string
  subtitle: string
  dateRange: string
}

type ResumeContentCover = {
  type: 'cover'
  title: string
}

type ResumeContentText = {
  type: 'text'
  items: {
    name: string
    link?: string
  }[]
}

type ResumeContent = ResumeContentCover | ResumeContentText

export type ResumeData = {
  header?: ResumeHeader
  content?: ResumeContent
}

export const RESUME_CARDS: ResumeData[] = [
  {
    content: {
      type: 'cover',
      title: 'Full Stack Developer',
    },
  },
  ...meta.experience.map<ResumeData>((e) => ({
    header: {
      title: e.title,
      subtitle: e.company,
      dateRange: formatDateRange(e.start, e.end),
    },
    content: {
      type: 'text',
      items: e.stack.map((name) => ({ name })),
    },
  })),
  ...meta.education.map<ResumeData>((e) => ({
    header: {
      title: e.cert,
      subtitle: e.school,
      dateRange: formatDateRange(e.start, e.end),
    },
    content: {
      type: 'text',
      items: e.projects,
    },
  })),
]

export const RESUME_SIZE = RESUME_CARDS.length
