'use client'

import { SnapContext } from '@/hooks/snap'
import { SNAPS, type Snap } from '@/lib'
import { type PropsWithChildren, type ReactElement, useCallback, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = PropsWithChildren<{
  snaps: Snap[]
}>

export function SnapProvider({ children, snaps }: Props): ReactElement {
  const { ref } = useInView({ threshold: 0.2 })
  const [current, setCurrent] = useState(SNAPS[0].id)

  const handler = useCallback((inView: boolean, entry: IntersectionObserverEntry) => {
    const elementId = entry.target.id
    if (inView && elementId) {
      setCurrent(elementId)
    }
  }, [])

  const ctx = useMemo(() => ({ ref, current, handler }), [ref, current, handler])

  return <SnapContext.Provider value={ctx}>{children}</SnapContext.Provider>
}
