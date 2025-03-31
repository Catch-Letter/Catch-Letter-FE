import { useRef } from 'react'
import { useParams } from 'react-router'
import { BackHeader, LetterGrid, NoLetters, SkeletonCard } from '#/components'
import { MyLettersWrapper, TitleStyle, BadgeStyle, GridContainer } from './MyLetters.styles'
import { useTranslation } from 'react-i18next'
import { useMyLettersQuery } from '#/api/myLetters'
import { useRandomShakingCard } from '#/hooks/useRandomShakingCard'
import { useInfiniteScroll } from '#/hooks/useInfiniteScroll'
import { useState } from 'react'
import { useInboxStatus } from '#/hooks'

const MyLetters = () => {
  const { uuid } = useParams()
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({})

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
            <SkeletonCard count={6} />
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
