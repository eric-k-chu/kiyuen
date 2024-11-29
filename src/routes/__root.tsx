import { AppShell, Button } from '@/components'
import { Link, Outlet, createRootRoute, linkOptions } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const navs = [
  linkOptions({
    to: '/',
    label: 'Home',
  }),
  linkOptions({
    to: '/play',
    label: 'Play',
  }),
]

export const Route = createRootRoute({
  component: (): ReactElement => (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <div className='flex min-h-screen items-center justify-center'>
        <Outlet />
      </div>
      <nav className='fixed bottom-5 w-screen'>
        <div className='mx-auto w-fit rounded-md border border-border'>
          {navs.map((nav, i) => (
            <Button asChild variant='ghost' key={nav.to} className={flattenCorners(i, navs.length)}>
              <Link {...nav} className='text-xs'>
                {nav.label}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
    </AppShell>
  ),
})

function flattenCorners(index: number, length: number): string | undefined {
  if (index === 0) return 'rounded-r-none rtl:rounded-l-none'
  if (index === length - 1) return 'rounded-l-none rtl:rounded-r-none'
  return
}
