import { useMyLettersQuery } from '#/api/myLetters'
import { BackHeader, LetterGrid, NoLetters, SkeletonCard } from '#/components'
import { useInfiniteScroll } from '#/hooks/useInfiniteScroll'
import { useRandomShakingCard } from '#/hooks/useRandomShakingCard'
import { useScrollRestoration } from '#/hooks/useScrollRestoration'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'
import { BadgeStyle, GridContainer, MyLettersWrapper, TitleStyle } from './MyLetters.styles'

const MyLetters = () => {
  const { uuid } = useParams()
  const SCROLL_STORAGE_KEY = `myLettersScroll_${uuid}`

  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useMyLettersQuery(uuid ?? '')
  useScrollRestoration(scrollContainerRef, SCROLL_STORAGE_KEY, !isLoading)

  const letters = data?.pages[0]?.data ?? []
  const shakingCard = useRandomShakingCard(letters)

  useEffect(() => {
    if (location.state?.refetch) {
      refetch()

      navigate(location.pathname, {
        replace: true,
        state: {},
      })
    }
  }, [location.state, location.pathname, navigate, refetch])

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
    </div>
  )
}

export default MyLetters
