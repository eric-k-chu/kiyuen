import { AppShell, Button } from '@/components'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createRootRoute({
  component: (): ReactElement => (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <div className='flex min-h-screen items-center justify-center'>
        <Outlet />
      </div>
      <nav className='fixed bottom-5 w-screen'>
        <div className='mx-auto w-fit rounded-md border border-border'>
          <Button asChild variant='ghost' className='rounded-r-none'>
            <Link to='/' className='text-xs'>
              Home
            </Link>
          </Button>
          <Button asChild variant='ghost' className='rounded-l-none'>
            <Link to='/play' className='text-xs'>
              Play
            </Link>
          </Button>
        </div>
      </nav>
    </AppShell>
  ),
})
