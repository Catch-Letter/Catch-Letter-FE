import { useEffect } from 'react'

interface Props {
  containerRef: React.RefObject<HTMLElement>
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: () => void
}

export const useInfiniteScroll = ({
  containerRef,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: Props) => {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [containerRef, hasNextPage, isFetchingNextPage, fetchNextPage])
}
