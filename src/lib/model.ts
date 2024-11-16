import type { ReactNode } from 'react'

export type StorageProviderProps<T> = T & {
  children: ReactNode
  storageKey?: string
}
