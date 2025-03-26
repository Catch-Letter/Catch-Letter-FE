import { useRef } from 'react'
import { useParams } from 'react-router'
import { BackHeader, LetterGrid, NoLetters, SkeletonCard } from '#/components'
import { MyLettersWrapper, TitleStyle, BadgeStyle, GridContainer } from './MyLetters.styles'
import { useTranslation } from 'react-i18next'
import { useMyLettersQuery } from '#/api/myLetters'
import { useRandomShakingCard } from '#/hooks/useRandomShakingCard'
import { useInfiniteScroll } from '#/hooks/useInfiniteScroll'
import { useTotalLetterCount } from '#/hooks/useTotalLetterCount'

const MyLetters = () => {
  const { uuid } = useParams()
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useMyLettersQuery(uuid ?? '')

  const letters = data?.pages[0]?.data ?? []
  const shakingCard = useRandomShakingCard(letters)
  const letterCount = useTotalLetterCount(uuid)

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
            <span css={BadgeStyle}>{letterCount ?? 0}</span>
          </div>
        }
      />
      {letterCount === 0 ? (
        <NoLetters />
      ) : (
        <div css={GridContainer} ref={scrollContainerRef}>
          {isLoading || isFetching ? (
            <SkeletonCard />
          ) : (
            <LetterGrid pages={data?.pages ?? []} shakingCard={shakingCard} uuid={uuid ?? ''} />
          )}
        </div>
      )}
    </div>
  )
}

export default MyLetters
