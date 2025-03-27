import { postTryAnswer } from '#/api/postTryAnswer'
import { BackHeader } from '#/components'
import { TryIntro } from '#/components/try-answer'
import { TryCounter } from '#/components/try-answer/try-Counter'
import useGetAnswerStatus from '#/hooks/query/useGetAnswerStatus'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import {
  LetterCardStyle,
  SkeletonCardStyle,
  TryAnswerStyle,
  tryAnswerWrapper,
} from '#/pages/tryAnswer/TryAnswer.styles'
import { Background, Button, DotLoader } from '#/shared/ui'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { extractRemainingChances } from '#/shared/utils'
import { colors } from '#/styles/color'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'

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

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState<string>(t('submit'))
  const [isTryStarted, setIsTryStarted] = useState<boolean>(false)

  const { data: drawData } = useGetDrawData(uuid!, Number(id!))
  const { data: answerStatusData } = useGetAnswerStatus(uuid!, Number(id!))

  //그림 가져오기
  useEffect(() => {
    if (drawData && drawData.data.presigned_url) {
      setImageUrl(drawData.data.presigned_url)
    }
  }, [drawData])

  //정답 상태 가져오기
  useEffect(() => {
    if (answerStatusData) {
      if (Array.isArray(answerStatusData) && answerStatusData.length === 0) {
        setIsCorrect(true) // 이미 맞춘 정답 표시
        setResponseMessage(t('tryAnswer.correctAnswer'))
        setButtonText(t('tryAnswer.checkAnswer'))
      } else {
        const remainingChances = extractRemainingChances(answerStatusData.message)

        setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
        setChances(3 - answerStatusData.data.try)
      }
    }
  }, [answerStatusData])

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
      setResponseMessage(t('error.unexpectedError'))
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
          ) : drawData ? (
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
