import { debounce } from '#/shared/utils'
import { RefObject, useEffect, useState } from 'react'

export interface ContainerSizeType {
  width: number
  height: number
}

function useResizeContainer(containerRef: RefObject<HTMLElement>) {
  const [size, setSize] = useState<ContainerSizeType>({ width: 0, height: 0 })
  const debouncedSetSize = debounce(setSize, 100)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(() => {
      if (containerRef.current) {
        debouncedSetSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return { size }
}

export default useResizeContainer
