'use client'

import { useState } from 'react'

type Input<T extends string> = {
  key: string
  fallback: T
}

type UseLocalStorageOutput<T extends string> = {
  item: T
  set: (value: T) => void
}

export function useLocalStorage<T extends string>(input: Input<T>): UseLocalStorageOutput<T> {
  const [item, setItem] = useState(getItemFromLocalStorage(input.key, input.fallback))
  const set = (value: T): void => {
    if (typeof window === 'undefined') return
    localStorage.setItem(input.key, value)
    setItem(value)
  }
  return { item, set }
}

function getItemFromLocalStorage<T extends string>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  return (localStorage.getItem(key) as T) || fallback
}
