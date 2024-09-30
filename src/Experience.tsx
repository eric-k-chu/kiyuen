import { Container, Stack, Text, Timeline, Title } from '@mantine/core'
import { DateTime } from 'luxon'
import type { ReactNode } from 'react'
import { Components } from './icons'
import { config } from './site.config'

export function Experience(): ReactNode {
  return (
    <Container size='md' id={config.anchors[1].id}>
      <Stack gap='xl'>
        <Title>Experience</Title>
        <Timeline active={0} bulletSize={24} lineWidth={4}>
          {config.experiences.map((exp, i) => (
            <Timeline.Item
              key={exp.title}
              bullet={
                <Components size={12} color={i === 0 ? 'black' : 'white'} />
              }
              title={<strong style={{ fontWeight: 900 }}>{exp.title}</strong>}
              color={config.primary}
            >
              <Text size='md'>{exp.company}</Text>
              <Text size='sm' c='dimmed' mt={4}>
                {period(exp.start, exp.end)}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  )
}

function period(start: string, end: string | undefined): string {
  const duration = durationOfWork(start, end)

  const startDate = DateTime.fromISO(start).toFormat('MMM yyyy')
  const endDate = end ? DateTime.fromISO(end).toFormat('MMM yyyy') : 'Present'
  return `${startDate} - ${endDate} • ${duration}`
}

function durationOfWork(start: string, end: string | undefined): string {
  const startDate = DateTime.fromISO(start)
  const endDate = end ? DateTime.fromISO(end) : DateTime.now()
  const diff = endDate.diff(startDate)

  const years = diff.as('years')
  const months = diff.as('months')

  if (years > 1) {
    return `${Math.round(years)} years`
  }

  if (months > 1) {
    return `${Math.round(months)} months`
  }

  return 'Less than a month'
}
