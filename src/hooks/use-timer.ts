import { useEffect } from 'react'

export function useTimer(callback: () => void, interval: number, deps: unknown[]): void {
  useEffect(() => {
    const timer = setInterval(callback, interval)
    return () => {
      clearInterval(timer)
    }
  }, deps)
}
