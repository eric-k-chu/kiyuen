import { useEffect } from 'react'

export function useKeyboard(cb: (key: string) => void, deps: unknown[] = []): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      cb(e.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, deps)
}
