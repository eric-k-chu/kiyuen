import { DateTime } from 'luxon'

export function stripHttps(url: string): string {
  return url.replace(/^https?:\/\//, '')
}

export function formatPeriod(start: string, end: string | undefined): string {
  const duration = getDuration(start, end)
  const startDate = toMonthYear(start)
  const endDate = toMonthYear(end)

  return `${startDate} - ${endDate} • ${duration}`
}

function toMonthYear(iso?: string): string {
  return iso ? DateTime.fromISO(iso).toFormat('MMM yyyy') : 'Present'
}

function getDuration(start: string, end: string | undefined): string {
  const startDate = DateTime.fromISO(start)
  const endDate = end ? DateTime.fromISO(end) : DateTime.now()
  const diff = endDate.diff(startDate)

  const years = diff.as('years')
  const months = diff.as('months')

  return translateTimeDifference(years, months)
}

function translateTimeDifference(years: number, months: number): string {
  if (years > 1) {
    return `${Math.round(years)} years`
  }

  if (months > 1) {
    return `${Math.round(months)} months`
  }

  return 'Less than a month'
}
