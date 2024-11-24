import type { ReactElement } from 'react'
import { Outlet, Route, Routes } from 'react-router'
import { AppShell, Navigation } from './components'
import { Home, Play, Tetris } from './route'
import { Wordle } from './route/play/wordle'

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
