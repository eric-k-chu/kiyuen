import type { ReactElement } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import { AppShell, Button } from './components'
import { Home, Play, Tetris, Wordle } from './route'

export function App(): ReactElement {
  return (
    <AppShell defaultDir='ltr' defaultTheme='dark'>
      <Routes>
        <Route
          element={
            <div className='flex min-h-screen items-center justify-center'>
              <Outlet />
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route path='play' element={<Play />} />
          <Route path='play/wordle' element={<Wordle />} />
          <Route path='play/tetris' element={<Tetris />} />
        </Route>
      </Routes>
      <Navigation />
    </AppShell>
  )
}

const PAGES = [
  { title: 'Home', path: '/' },
  { title: 'Play', path: '/play' },
]

export function Navigation(): ReactElement {
  return (
    <nav className='fixed bottom-3 w-screen'>
      <div className='mx-auto w-fit rounded-md border border-border'>
        {PAGES.map(({ title, path }, i) => (
          <Button key={title} asChild variant='ghost' className={roundCorners(i, PAGES.length)}>
            <Link className='text-xs' to={path}>
              {title}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

function roundCorners(i: number, length: number): string | undefined {
  if (i === 0) return 'rounded-r-none'
  if (i === length - 1) return 'rounded-l-none'
}
