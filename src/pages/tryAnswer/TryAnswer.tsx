import { postTryAnswer } from '#/api/postTryAnswer'
import { letter } from '#/api/letter'
import { BackHeader, LetterCard, LetterContent } from '#/components'
import { TryCounter } from '#/components/try-Counter'
import { LetterCardStyle, TryAnswerStyle } from '#/pages/tryAnswer/TryAnswer.styles'
import { Button } from '#/shared/ui'
import { Background } from '#/shared/ui/background'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
// import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getDraw } from '#/api/getDraw'

const TryAnswer = () => {
  // const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const { uuid, id } = useParams()

  const maxChances = 3
  const [chances, setChances] = useState<number>(maxChances)
  const [isShaking, setIsShaking] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const [letterData, setLetterData] = useState<{
    to: string
    from: string
    content: string
  } | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null) // 배경 이미지 URL 상태 추가

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

  useEffect(() => {
    const getDrawData = async () => {
      if (uuid && id) {
        try {
          const response = await getDraw(uuid, Number(id))
          if (response && response.data && response.data.presigned_url) {
            setImageUrl(response.data.presigned_url)
            console.log('presigned_url', response.data.presigned_url)
          }
        } catch (error) {
          console.error('getDrawError:', error)
        }
      }
    }
    getDrawData()
  }, [uuid, id])

  useEffect(() => {
    if (chances === 0) {
      setTimeLeft(180)
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev > 0) return prev - 1
          clearInterval(timer)
          setChances(maxChances)
          return null
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [chances])

  const handleWrongAttempt = () => {
    if (chances > 0) {
      setChances(chances - 1)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  const handleTryAnswer = async () => {
    if (chances === 0 || isCorrect || !uuid || !id) return

    try {
      const response = await postTryAnswer(uuid, Number(id), inputValue)

      if (!response) {
        setResponseMessage('서버 응답이 없습니다. 다시 시도해주세요.')
        return
      }

      if (response.success) {
        setIsCorrect(true)
        setResponseMessage(response.message)
      } else {
        handleWrongAttempt()
        setResponseMessage(response.message)
      }
    } catch (error) {
      console.error(error)
      setResponseMessage('예상치 못한 오류가 발생했습니다.')
    }
  }

  return (
    <>
      <Background color='pink' />
      <BackHeader />
      <div css={TryAnswerStyle}>
        <TryCounter
          chances={chances}
          timeLeft={timeLeft}
          isCorrect={isCorrect}
          message={responseMessage}
        />
        <div
          className={`LetterCard-container ${isShaking ? 'shake' : ''} ${isCorrect ? 'glowing' : ''}`}
        >
          {letterData ? (
            // <LetterCard type={selectedColor}>
            //   <LetterContent
            //     to={letterData.to}
            //     content={letterData.content}
            //     from={letterData.from}
            //     color={selectedColor}
            //     pattern={selectedPattern}
            //     font={selectedFont}
            //   />
            // </LetterCard>
            <div css={LetterCardStyle(imageUrl || '')}></div>
          ) : (
            <p>편지를 불러오는 중...</p>
          )}
        </div>
        <div className='Input-area'>
          <SeparatedInput length={6} onChangeValue={handleInputChange} />
        </div>
        <div className='button-area'>
          <Button onClick={handleTryAnswer} disabled={chances === 0 || isCorrect} width={142}>
            확인
          </Button>
        </div>
      </div>
    </>
  )
}

export default TryAnswer
