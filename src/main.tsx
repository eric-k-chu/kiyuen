import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <h1 className='text-muted text-xl'>This page does not exist!</h1>,
  defaultErrorComponent: () => <h1 className='text-muted text-xl'>An error occurred!</h1>,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
