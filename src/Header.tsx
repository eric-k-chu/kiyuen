import { Anchor, Burger, Container, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { type ReactNode, useState } from 'react'
import { config } from './site.config'
import classes from './styles/header.module.css'

export function Header(): ReactNode {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(config.anchors[0].link)

  return (
    <header className={classes.header}>
      <Container size='md' className={classes.inner}>
        <strong>朱 ERIC CHU</strong>
        <Group gap={5} visibleFrom='xs'>
          {config.anchors.map(({ link, label }) => (
            <Anchor
              key={label}
              href={link}
              underline='never'
              className={classes.link}
              data-active={active === link || undefined}
              onClick={(event) => {
                event.preventDefault()
                setActive(link)
              }}
            >
              {label}
            </Anchor>
          ))}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
      </Container>
    </header>
  )
}
