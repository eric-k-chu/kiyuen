import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { ReactNode } from 'react'
import { About } from './About'
import { Experience } from './Experience'
import { Header } from './Header'
import './styles/main.css'
import { theme } from './theme'

export default function App(): ReactNode {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Header />
      <About />
      <Experience />
    </MantineProvider>
  )
}
