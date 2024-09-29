import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { ClientLayout } from './AppShell'
import './styles/main.css'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <ClientLayout>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </ClientLayout>
    </MantineProvider>
  )
}
