import { BackHeader, LetterCard } from '#/components'
import { LetterContent } from '#/components/letter-choice'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { IoTriangle } from 'react-icons/io5'
import { CheckAnswerStyles, LetterCardStyle } from './CheckAnswer.styles'
import { useEffect, useState } from 'react'
import { Background } from '#/shared/ui/background'
import { useParams } from 'react-router'
import { letter } from '#/api/letter'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { getDraw } from '#/api/getDraw'

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
    <>
      <Background color='grey' />
      <BackHeader />
      <div css={CheckAnswerStyles(isFlipped, imageUrl || '')}>
        <button className='btn-copy'>우리의 암호</button>
        <SeparatedInput length={answerLength} />
        <div className='content' onClick={handleCardClick}>
          <div className='cardFront'>
            {/* <LetterCard type={selectedColor}> */}
            <div css={LetterCardStyle(imageUrl || '')}></div>
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
              <p>편지를 불러오는 중...</p>
            )}
          </div>
        </div>
        <div className='notice-area'>
          <IoTriangle size={16} />
          <p>카드를 눌러 뒤집어보세요!</p>
        </div>
      </div>
    </>
  )
}

export default CheckAnswer
