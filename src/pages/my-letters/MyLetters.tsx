import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { BackHeader, LetterGrid, NoLetters, SkeletonCard } from '#/components'
import { MyLettersWrapper, TitleStyle, BadgeStyle, GridContainer } from './MyLetters.styles'
import { useTranslation } from 'react-i18next'
import { useMyLettersQuery } from '#/api/myLetters'
import { useRandomShakingCard } from '#/hooks/useRandomShakingCard'
import { useInfiniteScroll } from '#/hooks/useInfiniteScroll'
import { useInboxStatus } from '#/hooks'
import { useAuthStore } from '#/store/authStore'

const MyLetters = () => {
  const { uuid } = useParams()
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [_loadedMap, setLoadedMap] = useState<Record<string, boolean>>({})
  const navigate = useNavigate()
  const { accessToken } = useAuthStore()

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useMyLettersQuery(uuid ?? '')

  const handleCardLoad = (id: number, loaded: boolean) => {
    setLoadedMap((prev) => ({ ...prev, [id]: loaded }))
  }

  const letters = data?.pages[0]?.data ?? []
  const shakingCard = useRandomShakingCard(letters)
  const { total_letter_count } = useInboxStatus(uuid ?? '')

  useInfiniteScroll({
    containerRef: scrollContainerRef,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  })

  useEffect(() => {
    if (!accessToken) {
      navigate(`/inbox/${uuid}`)
    }
  }, [accessToken, navigate, uuid])

  if (!accessToken) return null

  return (
    <div css={MyLettersWrapper}>
      <BackHeader
        Center={
          <div css={TitleStyle}>
            {t('myLetters.myLetters')}
            <span css={BadgeStyle}>{total_letter_count ?? 0}</span>
          </div>
        }
      />
      {total_letter_count === 0 ? (
        <NoLetters />
      ) : (
        <div css={GridContainer} ref={scrollContainerRef}>
          {isLoading || isFetching ? (
            <SkeletonCard count={8} />
          ) : (
            <LetterGrid
              pages={data?.pages ?? []}
              shakingCard={shakingCard}
              uuid={uuid ?? ''}
              onLoad={handleCardLoad}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default MyLetters
