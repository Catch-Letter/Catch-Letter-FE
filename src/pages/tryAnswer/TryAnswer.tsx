import { postTryAnswer } from '#/api/postTryAnswer'
import { letter } from '#/api/letter'
import { BackHeader, LetterCard, LetterContent } from '#/components'
import { TryCounter } from '#/components/try-answer/try-Counter'
import { LetterCardStyle, TryAnswerStyle } from '#/pages/tryAnswer/TryAnswer.styles'
import { Button } from '#/shared/ui'
import { Background } from '#/shared/ui/background'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
// import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getDraw } from '#/api/getDraw'
import { getAnswerStatus } from '#/api/getAnswerStatus'
import { useLocation } from 'react-router'
import { TryIntro } from '#/components/try-answer' // DrawingIntro import 추가

const TryAnswer = () => {
  // const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const answerLength = location.state?.answerLength || 6
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
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState<string>('확인')
  const [isTryStarted, setIsTryStarted] = useState<boolean>(false)

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

  //정답 상태 가져오기
  useEffect(() => {
    if (uuid && id) {
      const fetchAnswerStatus = async () => {
        try {
          const response = await getAnswerStatus(uuid, Number(id))
          if (response && response.data) {
            // response.data가 빈 배열일 경우(이미 맞춘 정답에 접근하는 경우)
            if (Array.isArray(response.data) && response.data.length === 0) {
              setIsCorrect(true) // 이미 맞춘 정답 표시
              setResponseMessage('정답입니다!')
              setButtonText('편지 확인')
            } else {
              setResponseMessage(response.message)
              setChances(3 - response.data.try)
            }
          }
        } catch (error) {
          console.error('Error fetching answer status:', error)
        }
      }
      fetchAnswerStatus()
    }
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
        setButtonText('편지 확인')
      } else {
        handleWrongAttempt()
        setResponseMessage(response.message)
      }
    } catch (error) {
      console.error(error)
      setResponseMessage('예상치 못한 오류가 발생했습니다.')
    }
  }

  const handleNavigate = () => {
    if (isCorrect) {
      navigate(`/checkAnswer/${uuid}/${id}`) // 정답일 때만 checkAnswer 페이지로 이동
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
          {!isTryStarted ? (
            <TryIntro onStart={() => setIsTryStarted(true)} />
          ) : letterData ? (
            <div css={LetterCardStyle(imageUrl || '')}></div>
          ) : (
            <p>편지를 불러오는 중...</p>
          )}
        </div>
        <div className='Input-area'>
          <SeparatedInput length={answerLength} onChangeValue={handleInputChange} />
        </div>
        <div className='button-area'>
          <Button
            onClick={isCorrect ? handleNavigate : handleTryAnswer}
            disabled={chances === 0}
            width={142}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  )
}

export default TryAnswer
