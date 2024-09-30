import { ActionIcon, Container, Group, rem } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import type { ReactNode } from 'react'
import classes from './styles/footer.module.css'

export function Footer(): ReactNode {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <strong>朱 ERIC CHU</strong>
        <Group
          gap={0}
          className={classes.links}
          justify='flex-end'
          wrap='nowrap'
        >
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
