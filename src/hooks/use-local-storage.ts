import { useSyncExternalStore } from 'react'

type Input<T extends string> = {
  key: string
  fallback: T
}

type UseLocalStorageOutput<T extends string> = {
  item: T
  set: (value: T) => void
}

export function useLocalStorage<T extends string>(input: Input<T>): UseLocalStorageOutput<T> {
  const item = useSyncExternalStore(subscribe, () =>
    getItemFromLocalStorage(input.key, input.fallback)
  )
  const set = (value: T): void => {
    localStorage.setItem(input.key, value)
    window.dispatchEvent(new Event('storage'))
  }
  return { item, set }
}

function subscribe(cb: () => void): () => void {
  window.addEventListener('storage', cb)
  return (): void => {
    window.removeEventListener('storage', cb)
  }
}

function getItemFromLocalStorage<T extends string>(key: string, fallback: T): T {
  return (localStorage.getItem(key) as T) || fallback
}
