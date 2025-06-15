import { useRef } from 'react'
import { useParams } from 'react-router'
import { useMyLettersQuery } from '#/api/myLetters'
import { BackHeader, LetterGrid, NoLetters, SkeletonCard } from '#/components'
import { useInfiniteScroll, useRandomShakingCard, useScrollRestoration } from '#/hooks'
import { useTranslation } from 'react-i18next'
import { BadgeStyle, GridContainer, MyLettersWrapper, TitleStyle } from './MyLetters.styles'
import { RefreshButton } from '#/components/my-letters/refresh'

const MyLetters = () => {
  const { uuid } = useParams()
  const SCROLL_STORAGE_KEY = `myLettersScroll_${uuid}`
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isRefetching } =
    useMyLettersQuery(uuid ?? '')
  useScrollRestoration(scrollContainerRef, SCROLL_STORAGE_KEY, !isLoading)

  const letters = data?.pages[0]?.data ?? []
  const shakingCard = useRandomShakingCard(letters)

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
            <span css={BadgeStyle}>{data?.pages[0].total_letter_count ?? 0}</span>
          </div>
        }
        goBackPath={`/inbox/${uuid}`}
      />
      {data?.pages[0].total_letter_count === 0 ? (
        <NoLetters />
      ) : (
        <div css={GridContainer} ref={scrollContainerRef}>
          {isLoading ? (
            <SkeletonCard count={8} />
          ) : (
            <LetterGrid pages={data?.pages ?? []} shakingCard={shakingCard} uuid={uuid ?? ''} />
          )}
          {isFetchingNextPage && <SkeletonCard count={8} />}
        </div>
      )}
      <RefreshButton refetch={refetch} isRefetching={isRefetching} />
    </div>
  )
}

export default MyLetters
