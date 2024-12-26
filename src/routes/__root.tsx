import { AppShell } from '@/components'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createRootRoute({
  component: App,
})

function App(): ReactElement {
  return (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <div className='flex min-h-screen flex-col items-center justify-center p-4'>
        <Outlet />
      </div>
    </AppShell>
  )
}
