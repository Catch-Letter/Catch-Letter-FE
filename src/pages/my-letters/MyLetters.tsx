import { useState, useEffect, useRef } from 'react'
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
  UnLockLetterStyle,
} from './MyLetters.styles'
import { useTranslation } from 'react-i18next'
import lockImage from '#/assets/create/lock.svg'
import { colors } from '#/styles/color'
import { useMyLettersQuery } from '#/api/myLetters'
import { fetchUUID } from '#/api/uuid'
import { DotLoader } from '#/shared/ui'

const MyLetters = () => {
  const [shakingCard, setShakingCard] = useState<number | null>(null)
  const [letterCount, setLetterCount] = useState<number | null>(null)
  const navigate = useNavigate()
  const { uuid } = useParams()
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useMyLettersQuery(uuid ?? '')

  // 편지 전체 갯수 조회
  useEffect(() => {
    const fetchMyLettersCount = async () => {
      if (!uuid) {
        return
      }
      try {
        const res = await fetchUUID(uuid)
        setLetterCount(res.total_letter_count)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMyLettersCount()
  }, [uuid])

  // 무한 스크롤
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      const container = scrollContainerRef.current

      if (
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  // is_correct중 랜덤 카드 선택
  useEffect(() => {
    const interval = setInterval(() => {
      const incorrectCards = data?.pages[0]?.data?.filter((letter) => !letter.is_correct) ?? []

      if (incorrectCards.length > 0) {
        const randomCard = incorrectCards[Math.floor(Math.random() * incorrectCards.length)]
        setShakingCard((prev) => (prev === randomCard.id ? null : randomCard.id))

        setTimeout(() => {
          setShakingCard(null)
        }, 500)
      }
    }, 1600)

    return () => clearInterval(interval)
  }, [])

  // 편지 배경 색 추출
  const extractColor = (etc: string | null | undefined) => {
    try {
      if (!etc) return colors.grey[9]

      const parsedEtc = JSON.parse(etc)
      const color = parsedEtc.color ?? 'grey'

      switch (color) {
        case 'green':
          return colors.green[6]
        case 'blue':
          return colors.blue[600]
        case 'pink':
          return colors.pink[6]
        case 'violet':
          return colors.violet[6]
        case 'grey':
        default:
          return colors.grey[9]
      }
    } catch (error) {
      console.error('JSON 파싱 애러', error)
      return colors.grey[11]
    }
  }

  return (
    <div css={MyLettersWrapper}>
      <BackHeader
        Center={
          <div css={TitleStyle}>
            {t('myLetters')}
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
                    css={LetterCardStyle(shakingCard, letter.id, extractColor(letter.letter.etc))}
                  >
                    {letter.is_correct ? (
                      <div
                        css={UnLockLetterStyle(letter.thumbnail_url ?? lockImage)}
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
                        <div className='lock-text'>
                          암호를 <br /> 풀어주세요!
                        </div>
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
