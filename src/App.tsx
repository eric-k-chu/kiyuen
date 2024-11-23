import type { ReactElement } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import { AppShell } from './components'
import { Button } from './components/ui'
import { Home, Play, Tetris } from './route'
import { Wordle } from './route/play/wordle'

const PAGES = [
  { title: 'Home', path: '/' },
  { title: 'Play', path: '/play' },
]

export function App(): ReactElement {
  return (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='play' element={<Play />} />
          <Route path='play/wordle' element={<Wordle />} />
          <Route path='play/tetris' element={<Tetris />} />
        </Route>
      </Routes>
      <div className='fixed bottom-3 w-screen'>
        <div className='mx-auto w-fit rounded-md border border-border'>
          {PAGES.map(({ title, path }, i) => (
            <Button
              key={title}
              asChild
              variant='ghost'
              className={
                i === 0 ? 'rounded-r-none' : i === PAGES.length - 1 ? 'rounded-l-none' : ''
              }
            >
              <Link className='text-xs' to={path}>
                {title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

function Layout(): ReactElement {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Outlet />
    </div>
  )
}
