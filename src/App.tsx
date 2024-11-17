import type { ReactElement } from 'react'
import { AppShell, Controls, Profile, Resume } from './components'

export function App(): ReactElement {
  return (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <div className='flex min-h-screen items-center justify-center'>
        <section className='flex h-96 justify-center gap-x-3'>
          <Profile />
          <Resume />
          <Controls />
        </section>
      </div>
    </AppShell>
  )
}
