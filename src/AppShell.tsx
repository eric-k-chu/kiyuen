import { Anchor, AppShell, Burger, Container, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { PropsWithChildren, ReactNode } from 'react'
import classes from './styles/navbar.module.css'

export function ClientLayout({ children }: PropsWithChildren): ReactNode {
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Container h='100%' px='md'>
          <Group h='100%'>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            <Group justify='space-between' style={{ flex: 1 }}>
              <strong aria-hidden>朱 ERIC CHU</strong>
              <Group ml='xl' gap={0} visibleFrom='sm'>
                <Anchors />
              </Group>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <Anchors />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container h='100%' px='md'>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

function Anchors(): ReactNode {
  return (
    <>
      <Anchor className={classes.control} underline='hover' c='white'>
        About
      </Anchor>
      <Anchor className={classes.control} underline='hover' c='white'>
        Experience
      </Anchor>
      <Anchor className={classes.control} underline='hover' c='white'>
        Contact
      </Anchor>
    </>
  )
}
