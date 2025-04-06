import { useEffect, RefObject } from 'react'

export const useScrollRestoration = (
  containerRef: RefObject<HTMLElement>,
  storageKey: string,
  restoreCondition: boolean
) => {
  // 스크롤 저장: scroll 이벤트 발생 시마다 저장
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      sessionStorage.setItem(storageKey, String(container.scrollTop))
    }

    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [containerRef, storageKey])

  // 스크롤 복원: 주어진 조건이 true가 되었을 때 복원
  useEffect(() => {
    if (!restoreCondition) return

    const savedScroll = sessionStorage.getItem(storageKey)
    if (savedScroll && containerRef.current) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.scrollTop = parseInt(savedScroll, 10)
          }
        }, 0)
      })
    }
  }, [restoreCondition, containerRef, storageKey])
}
