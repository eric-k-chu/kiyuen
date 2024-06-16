import { Technology } from './technology'

export type Experience = {
  year: Year
  history: JobHistory[]
}

type Year = `${number}`

export type JobHistory = {
  title: string
  company: string
  start: `${Month3} ${number}`
  end: `${Month3} ${number}` | 'Present'
  skills: Technology[]
}

export type TinyJobHistory = Pick<JobHistory, 'title' | 'company'>

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
