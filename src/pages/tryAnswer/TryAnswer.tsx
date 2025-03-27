import { getAnswerStatus } from '#/api/getAnswerStatus'
import { getDraw } from '#/api/getDraw'
import { letter } from '#/api/letter'
import { postTryAnswer } from '#/api/postTryAnswer'
import { BackHeader } from '#/components'
import { TryIntro } from '#/components/try-answer' // DrawingIntro import 추가
import { TryCounter } from '#/components/try-answer/try-Counter'
import {
  LetterCardStyle,
  SkeletonCardStyle,
  TryAnswerStyle,
  tryAnswerWrapper,
} from '#/pages/tryAnswer/TryAnswer.styles'
import { Background, Button, DotLoader } from '#/shared/ui'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { colors } from '#/styles/color'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'

export const extractRemainingChances = (message: string | null): string => {
  return message?.match(/\d+/)?.[0] || '0'
}

const TryAnswer = () => {
  // const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const { uuid, id } = useParams()
  const { t } = useTranslation()
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
  const [buttonText, setButtonText] = useState<string>(t('submit'))
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
              setResponseMessage(t('tryAnswer.correctAnswer'))
              setButtonText(t('tryAnswer.checkAnswer'))
            } else {
              const remainingChances = extractRemainingChances(response.message)

              setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
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
        setResponseMessage(t('error.serverError'))
        return
      }

      if (response.success) {
        setIsCorrect(true)
        setResponseMessage(t('tryAnswer.correctAnswer'))
        setButtonText(t('tryAnswer.checkAnswer'))
      } else {
        handleWrongAttempt()
        const remainingChances = extractRemainingChances(response.message)
        setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
        setButtonText(t('tryAnswer.submit'))
      }
    } catch (error) {
      console.error(error)
      setResponseMessage('예상치 못한 오류가 발생했습니다.')
    }
  }

  const handleNavigate = () => {
    if (isCorrect) {
      navigate(`/checkAnswer/${uuid}/${id}`)
    }
  }

  return (
    <div css={tryAnswerWrapper}>
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
            <div css={SkeletonCardStyle}>
              <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
            </div>
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
            {isCorrect ? t('tryAnswer.checkAnswer') : t('tryAnswer.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TryAnswer
