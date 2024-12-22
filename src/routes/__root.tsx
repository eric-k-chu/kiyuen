import { AppShell } from '@/components'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createRootRoute({
  component: App,
})

function App(): ReactElement {
  return (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <div className='flex min-h-screen items-center justify-center'>
        <Outlet />
      </div>
    </AppShell>
  )
}
