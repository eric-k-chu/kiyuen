import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/play/tetris/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tetris/"!</div>
}
