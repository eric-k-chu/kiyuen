'use client'

import { useCallback, useState } from 'react'
import { type IntersectionOptions, useInView } from 'react-intersection-observer'

type SnapViewHookResponse = {
  ref?: (node: Element | null) => void
  /** The id of the element in view */
  id: string
  /** The callback used to set the element in view if applicable */
  handler: (inView: boolean, entry: IntersectionObserverEntry) => void
}

type Props = IntersectionOptions & {
  initialId: string
}

export function useSnapView({ initialId, ...opts }: Props): SnapViewHookResponse {
  const { ref } = useInView(opts)
  const [id, setId] = useState(initialId)

  const handler = useCallback((inView: boolean, entry: IntersectionObserverEntry): void => {
    const elementId = entry.target.getAttribute('id')
    if (inView && elementId) {
      setId(elementId)
    }
  }, [])

  return { ref, id, handler }
}
