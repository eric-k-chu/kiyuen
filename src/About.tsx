import {
  ActionIcon,
  Anchor,
  Container,
  Flex,
  Group,
  Image,
  List,
  Text,
  Title,
  rem,
} from '@mantine/core'
import type { ReactNode } from 'react'
import { Components, Github, Linkedin } from './icons'
import { config } from './site.config'
import classes from './styles/about.module.css'

export function About(): ReactNode {
  return (
    <Container size='md' id={config.anchors[0].id}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Flex gap='xs' direction='row' align='center'>
            <Title className={classes.title}>Eric Chu</Title>
            <Group gap={0}>
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
          </Flex>
          <Text c='dimmed' mt='md'>
            Just another software developer living in California.
          </Text>

          <List
            mt={30}
            spacing='sm'
            size='sm'
            icon={
              <Components
                style={{ width: rem(14), height: rem(14), strokeWidth: 2 }}
                color={config.primary}
              />
            }
          >
            <List.Item>
              <b>{config.title}</b> at{' '}
              <Anchor
                href={config.company.url}
                target='_blank'
                rel='noreferrer'
                underline='hover'
                c={config.secondary}
              >
                {config.company.name}
              </Anchor>
            </List.Item>
            <List.Item>
              <b>Full Stack Development</b> &ndash; Building Node.js
              applications using IaC, AWS, and TypeScript for the backend and
              React for the frontend
            </List.Item>
            <List.Item>
              <b>Game Development</b> &ndash; Game design and programming on the
              side!
            </List.Item>
          </List>

          <Anchor
            size='md'
            className={classes.control}
            c='black'
            underline='never'
            href={config.anchors[3].link}
            bg={config.primary}
            mt={30}
          >
            Contact Me
          </Anchor>
        </div>
        <Image
          src='/profile.jpg'
          alt='profile picture'
          className={classes.image}
          radius='md'
        />
      </div>
    </Container>
  )
}
