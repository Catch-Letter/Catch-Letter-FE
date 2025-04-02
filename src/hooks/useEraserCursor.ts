import { useEffect, useState } from 'react'

export const useEraserCursor = (isEraser: boolean, containerRef: React.RefObject<HTMLElement>) => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isEraser || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()

      setCursorPos({
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isEraser, containerRef])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.cursor = isEraser ? 'none' : 'default'
    }
  }, [isEraser, containerRef])

  return cursorPos
}
