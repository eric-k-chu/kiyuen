import { Container, Stack, Text, Timeline, Title } from '@mantine/core'
import type { ReactNode } from 'react'
import { Components } from './icons'
import { config } from './site.config'
import classes from './styles/experience.module.css'
import { formatPeriod } from './util'

export function Education(): ReactNode {
  return (
    <Container size='md' id={config.anchors[2].id} dir='rtl'>
      <Stack gap='xl'>
        <Title className={classes.title}>Education</Title>
        <Timeline
          bulletSize={24}
          lineWidth={4}
          reverseActive
          active={config.education.length}
        >
          {config.education.map((edu) => (
            <Timeline.Item
              key={edu.institute}
              bullet={<Components size={12} color={'black'} />}
              title={<strong style={{ fontWeight: 900 }}>{edu.cert}</strong>}
              color={config.primary}
            >
              <Text size='md' className={classes.italic}>
                {edu.institute}
              </Text>
              <Text size='sm' c='dimmed' mt={4}>
                {formatPeriod(edu.start, edu.end)}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  )
}
