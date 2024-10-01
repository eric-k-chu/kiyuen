import { Box, Container, Stack, Text, rem } from '@mantine/core'
import type { ReactNode } from 'react'
import { ContactForm } from './Form'
import { At, Github, Linkedin } from './icons'
import { config } from './site.config'
import classes from './styles/contact.module.css'

export function Contact(): ReactNode {
  return (
    <Container size='md' id={config.anchors[3].id}>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz='lg' fw={700} className={classes.title} c='white'>
            Contact information
          </Text>
          <Stack gap='xl'>
            <Social
              icon={
                <At
                  style={{
                    width: rem(24),
                    height: rem(24),
                    stroke: config.primary,
                  }}
                />
              }
              title='Email'
              link={
                <a
                  href='m&#97;ilto&#58;e%72ic%6&#51;&#37;&#54;8u&#46;dev%4&#48;gmail%2&#69;com'
                  className={classes.link}
                >
                  eri&#99;&#99;h&#117;&#46;dev&#64;g&#109;ail&#46;&#99;om
                </a>
              }
            />
            <Social
              icon={
                <Linkedin
                  style={{
                    width: rem(24),
                    height: rem(24),
                    stroke: config.primary,
                  }}
                />
              }
              title='LinkedIn'
              link={
                <a
                  href={config.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  linkedin&#47;eric&ndash;k&ndash;chu
                </a>
              }
            />
            <Social
              icon={
                <Github
                  style={{
                    width: rem(24),
                    height: rem(24),
                    stroke: config.primary,
                  }}
                />
              }
              title='GitHub'
              link={
                <a
                  href={config.github}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  github&#47;eric&ndash;k&ndash;chu
                </a>
              }
            />
          </Stack>
        </div>
        <ContactForm />
      </div>
    </Container>
  )
}

type SocialProps = {
  icon: ReactNode
  title: string
  link: ReactNode
}

function Social(props: SocialProps): ReactNode {
  return (
    <div className={classes.icon_wrapper}>
      <Box mr='md'>{props.icon}</Box>
      <div>
        <Text size='xs' className={classes.icon_title}>
          {props.title}
        </Text>
        <Text className={classes.icon_description}>{props.link}</Text>
      </div>
    </div>
  )
}
