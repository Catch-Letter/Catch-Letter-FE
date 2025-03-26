import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { BackHeader, NoLetters } from '#/components'
import {
  MyLettersWrapper,
  TitleStyle,
  BadgeStyle,
  GridContainer,
  LetterCardStyle,
  SkeletonCardStyle,
  NoLettersContainer,
  LockLetterStyle,
} from './MyLetters.styles'
import { useTranslation } from 'react-i18next'
import lockImage from '#/assets/create/lock.svg'
import { colors } from '#/styles/color'
import { useMyLettersQuery } from '#/api/myLetters'
import { DotLoader } from '#/shared/ui'
import { useRandomShakingCard } from '#/hooks/useRandomShakingCard'
import { extractColor } from '#/types/extractColor'
import { useInfiniteScroll } from '#/hooks/useInfiniteScroll'
import { useTotalLetterCount } from '#/hooks/useTotalLetterCount'

const MyLetters = () => {
  const navigate = useNavigate()
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
        <div css={NoLettersContainer}>
          <NoLetters />
        </div>
      ) : (
        <div css={GridContainer} ref={scrollContainerRef}>
          {isLoading || isFetching
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} css={SkeletonCardStyle}>
                  <DotLoader color={colors.grey[9]} />
                </div>
              ))
            : data?.pages.flatMap((page, pageIndex) =>
                page.data.map((letter) => (
                  <div
                    key={`${letter.id}_${pageIndex}`}
                    css={LetterCardStyle(
                      shakingCard,
                      letter.id,
                      extractColor(letter.letter.etc),
                      letter.thumbnail_url ?? lockImage
                    )}
                  >
                    {letter.is_correct ? (
                      <div
                        onClick={() =>
                          navigate(`/checkAnswer/${uuid}/${letter.id}`, {
                            state: { answerLength: letter.answer_length },
                          })
                        }
                      />
                    ) : (
                      <div
                        css={LockLetterStyle}
                        onClick={() =>
                          navigate(`/tryAnswer/${uuid}/${letter.id}`, {
                            state: { answerLength: letter.answer_length },
                          })
                        }
                      >
                        <img src={lockImage} alt='lock-icon' />
                        <div
                          className='lock-text'
                          dangerouslySetInnerHTML={{ __html: t('myLetters.lockDesc') }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))
              )}
        </div>
      )}
    </div>
  )
}

export default MyLetters
