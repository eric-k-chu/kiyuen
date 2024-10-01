import { Container, Stack, Text, Timeline, Title } from '@mantine/core'
import type { ReactNode } from 'react'
import { Components } from './icons'
import { config } from './site.config'
import classes from './styles/experience.module.css'
import { formatPeriod } from './util'

export function Experience(): ReactNode {
  return (
    <Container size='md' id={config.anchors[1].id}>
      <Stack gap='xl'>
        <Title className={classes.title}>Experience</Title>
        <Timeline
          active={config.experiences.length - 1 - 1}
          bulletSize={24}
          lineWidth={4}
          reverseActive
        >
          {config.experiences.map((exp, i) => (
            <Timeline.Item
              key={exp.title}
              bullet={
                <Components size={12} color={i === 0 ? 'white' : 'black'} />
              }
              title={<strong style={{ fontWeight: 900 }}>{exp.title}</strong>}
              color={config.primary}
              lineVariant={i === 0 ? 'dashed' : 'solid'}
            >
              <Text size='md' className={classes.italic}>
                {exp.company}
              </Text>
              <Text size='sm' c='dimmed' mt={4}>
                {formatPeriod(exp.start, exp.end)}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  )
}
