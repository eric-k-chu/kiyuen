import { useEffect } from 'react'

export function useKeyboard(cb: (key: string) => void, deps: unknown[]): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      cb(e.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, deps)
}
