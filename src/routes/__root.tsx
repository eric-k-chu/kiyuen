import { AppShell, NavLink } from '@/components'
import { Outlet, createRootRoute, linkOptions } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const navs = [
  linkOptions({
    to: '/',
    label: 'Home',
  }),
  linkOptions({
    to: '/blog',
    label: 'Blog',
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
        <div className='mx-auto w-fit rounded-md border border-border bg-background'>
          {navs.map((nav, i) => (
            <NavLink
              variant='ghost'
              key={nav.to}
              className={flattenCorners(i, navs.length)}
              to={nav.to}
            >
              {nav.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </AppShell>
  ),
})

function flattenCorners(index: number, length: number): string {
  if (index === 0) return 'rounded-r-none rtl:rounded-l-none'
  if (index === length - 1) return 'rounded-l-none rtl:rounded-r-none'
  return 'rounded-none'
}
