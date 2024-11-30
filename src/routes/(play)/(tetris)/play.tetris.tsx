import { createFileRoute } from '@tanstack/react-router'
import { Tetris } from './-board'

export const Route = createFileRoute('/(play)/(tetris)/play/tetris')({
  component: Tetris,
})
