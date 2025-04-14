import { useEffect, useState } from 'react'

export const useEraserCursor = (isEraser: boolean, containerRef: React.RefObject<HTMLElement>) => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isEraser || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()

      const clientX = e instanceof TouchEvent ? e.touches[0]?.clientX : (e as MouseEvent).clientX
      const clientY = e instanceof TouchEvent ? e.touches[0]?.clientY : (e as MouseEvent).clientY

      if (clientX === undefined || clientY === undefined) return

      setCursorPos({
        x: clientX - containerRect.left,
        y: clientY - containerRect.top,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleMouseMove)
    }
  }, [isEraser, containerRef])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.cursor = isEraser ? 'none' : 'default'
    }
  }, [isEraser, containerRef])

  return cursorPos
}
