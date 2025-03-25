import { getDraw } from '#/api/getDraw'
import { letter } from '#/api/letter'
import { BackHeader, LetterCard } from '#/components'
import { LetterContent } from '#/components/letter-choice'
import { DotLoader, SeparatedInput } from '#/shared/ui'
import { Background } from '#/shared/ui/background'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useEffect, useState } from 'react'
import { IoTriangle } from 'react-icons/io5'
import { useParams } from 'react-router'
import {
  CheckAnswerStyles,
  checkAnswerWrapper,
  LetterCardStyle,
  SkeletonCardStyle,
} from './CheckAnswer.styles'
import { getAnswer } from '#/api/getAnswer'
import { colors } from '#/styles/color'

const CheckAnswer = () => {
  const { uuid, id } = useParams()
  const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const [isFlipped, setIsFlipped] = useState(false)
  const [answerLength, setAnswerLength] = useState(4)
  const [letterData, setLetterData] = useState<{
    to: string
    from: string
    content: string
  } | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [answer, setAnswer] = useState<string>('')

  //편지내용 가져오기
  useEffect(() => {
    const fetchLetterData = async () => {
      if (uuid && id) {
        try {
          const response = await letter(uuid, Number(id))
          if (response && response.data) {
            setLetterData({
              to: response.data.to,
              from: response.data.from,
              content: response.data.contents,
            })
          }
        } catch (error) {
          console.error('Error fetching letter data:', error)
        }
      }
    }
    fetchLetterData()
  }, [uuid, id])

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
    const getDrawData = async () => {
      if (uuid && id) {
        try {
          const response = await getDraw(uuid, Number(id))
          if (response && response.data && response.data.presigned_url) {
            setImageUrl(response.data.presigned_url)
          }
        } catch (error) {
          console.error('getDrawError:', error)
        }
      }
    }
    getDrawData()
  }, [uuid, id])

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <div css={checkAnswerWrapper}>
      <Background color='grey' />
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
            {letterData ? (
              <LetterCard type={selectedColor}>
                <LetterContent
                  to={letterData.to}
                  content={letterData.content}
                  from={letterData.from}
                  color={selectedColor}
                  pattern={selectedPattern}
                  font={selectedFont}
                />
              </LetterCard>
            ) : (
              <div css={SkeletonCardStyle}>
                <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
              </div>
            )}
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
