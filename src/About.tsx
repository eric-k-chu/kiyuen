import {
  Anchor,
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  Title,
  rem,
} from '@mantine/core'
import { Component } from 'lucide-react'
import type { ReactNode } from 'react'
import { config } from './site.config'
import classes from './styles/core.module.css'

export function About(): ReactNode {
  return (
    <Container size='md' id={config.anchors[0].link}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Eric Chu</Title>
          <Text c='dimmed' mt='md'>
            Just another software developer living in California.
          </Text>

          <List
            mt={30}
            spacing='sm'
            size='sm'
            icon={
              <Component
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
              <b>Full Stack Development</b> &ndash; Experienced with AWS and
              Node.js applications using IaC and TypeScript for the backend and
              React for the frontend
            </List.Item>
            <List.Item>
              <b>Game Development</b> &ndash; Game design and programming on the
              side!
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius='xl'
              size='md'
              className={classes.control}
              c='black'
              bg={config.primary}
            >
              Experience
            </Button>
            <Button
              variant='default'
              radius='xl'
              size='md'
              className={classes.control}
            >
              Contact Me
            </Button>
          </Group>
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
