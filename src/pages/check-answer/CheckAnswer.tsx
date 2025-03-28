import { getAnswer } from '#/api/getAnswer'
import { letter } from '#/api/letter'
import { BackHeader, LetterCard } from '#/components'
import { LetterContent } from '#/components/letter-choice'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import { Background, DotLoader, SeparatedInput } from '#/shared/ui'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { colors } from '#/styles/color'
import { useEffect, useMemo, useState } from 'react'
import { IoTriangle } from 'react-icons/io5'
import { useParams } from 'react-router'
import {
  CheckAnswerStyles,
  checkAnswerWrapper,
  LetterCardStyle,
  SkeletonCardStyle,
} from './CheckAnswer.styles'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { extractColorToString } from '#/types/extractColor'

const CheckAnswer = () => {
  const { uuid, id } = useParams()
  const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const [isFlipped, setIsFlipped] = useState(false)
  const [answerLength, setAnswerLength] = useState(4)

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [answer, setAnswer] = useState<string>('')

  const { data: drawData } = useGetDrawData(uuid!, Number(id!))
  const {
    data: letterResponse,
    isLoading: letterLoading,
    error: letterError,
  } = useGetLetterData(uuid!, Number(id!))

  //정답 가져오기
  useEffect(() => {
    const fetchAnswer = async () => {
      if (uuid && id) {
        try {
          const response = await getAnswer(uuid, Number(id))
          if (response && response.data && response.data.answer) {
            setAnswerLength(response.data.answer.length)
            setAnswer(response.data.answer)
          }
        } catch (error) {
          console.error('Error fetching answer:', error)
        }
      }
    }
    fetchAnswer()
  }, [uuid, id])

  //그림가져오기
  useEffect(() => {
    if (drawData && drawData.data.presigned_url) {
      setImageUrl(drawData.data.presigned_url)
    }
  }, [drawData])

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev)
  }

  const backgroundColor = useMemo(() => {
    const etc = letterResponse?.data?.etc
    return extractColorToString(etc)
  }, [letterResponse])

  return (
    <div css={checkAnswerWrapper}>
      <Background color={backgroundColor} />
      <BackHeader />
      <div css={CheckAnswerStyles(isFlipped, imageUrl || '')}>
        <button className='btn-copy'>우리의 암호</button>
        {answer ? (
          <SeparatedInput length={answerLength} value={answer} />
        ) : (
          <p>정답을 불러오는중.. </p>
        )}
        <div className='content' onClick={handleCardClick}>
          <div className='cardFront'>
            {/* <LetterCard type={selectedColor}> */}
            {imageUrl ? (
              <div css={LetterCardStyle(imageUrl || '')}></div>
            ) : (
              <div css={SkeletonCardStyle}>
                <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
              </div>
            )}
            {/* </LetterCard> */}
          </div>
          <div className='cardBack'>
            {letterLoading ? (
              <div css={SkeletonCardStyle}>
                <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
              </div>
            ) : letterResponse && letterResponse.data ? (
              <LetterCard type={selectedColor}>
                <LetterContent
                  to={letterResponse.data.to}
                  content={letterResponse.data.contents}
                  from={letterResponse.data.from}
                  color={selectedColor}
                  pattern={selectedPattern}
                  font={selectedFont}
                />
              </LetterCard>
            ) : letterError ? (
              <p>편지를 불러오는 데 실패했습니다.</p>
            ) : null}
          </div>
        </div>
        <div className='notice-area'>
          <IoTriangle size={16} />
          <p>카드를 눌러 뒤집어보세요!</p>
        </div>
      </div>
    </div>
  )
}

export default CheckAnswer
