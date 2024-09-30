import { ActionIcon, Container, Group, rem } from '@mantine/core'
import type { ReactNode } from 'react'
import { Github, Linkedin, Logo } from './icons'
import { config } from './site.config'
import classes from './styles/footer.module.css'

export function Footer(): ReactNode {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo />
        <Group
          gap={0}
          className={classes.links}
          justify='flex-end'
          wrap='nowrap'
        >
          <ActionIcon
            component='a'
            href={config.github}
            target='_blank'
            rel='noreferrer'
            size='lg'
            color='gray'
            variant='subtle'
          >
            <Github
              style={{ width: rem(20), height: rem(20) }}
              strokeWidth={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component='a'
            href={config.linkedin}
            target='_blank'
            rel='noreferrer'
            size='lg'
            color='gray'
            variant='subtle'
          >
            <Linkedin
              style={{ width: rem(20), height: rem(20) }}
              strokeWidth={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
