import { Group, ThemeIcon } from '@mantine/core'
import type { ReactNode } from 'react'
import { config } from '../site.config'
import { Chu } from './Chu'

export function Logo(): ReactNode {
  return (
    <Group>
      <ThemeIcon color={config.secondary} radius='xl'>
        <Chu strokeWidth={2} color='black' />
      </ThemeIcon>
      <strong>ERIC CHU</strong>
    </Group>
  )
}
