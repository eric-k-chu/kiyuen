import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { About } from './About'
import { Header } from './Header'
import './styles/main.css'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Header />
      <About />
    </MantineProvider>
  )
}
