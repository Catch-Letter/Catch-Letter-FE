import { postTryAnswer } from '#/api/postTryAnswer'
import useGetAnswerStatus from '#/hooks/query/useGetAnswerStatus'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { extractRemainingChances } from '#/shared/utils'
import { extractFontStyle } from '#/shared/utils/extractFontStyle'
import { extractPatternStyle } from '#/shared/utils/extractPattern'
import { extractColorToString } from '#/types/extractColor'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

const useTryAnswer = () => {
  const { t } = useTranslation()
  const { uuid, id } = useParams()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState<string>(t('submit'))
  const maxChances = 3
  const [chances, setChances] = useState<number>(maxChances)
  const [isShaking, setIsShaking] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const { data: letterData } = useGetLetterData(uuid!, Number(id!))
  const { data: drawData } = useGetDrawData(uuid!, Number(id!))
  const { data: answerStatusData } = useGetAnswerStatus(uuid!, Number(id!))
  //그림가져오기
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
        setIsFlipped(true)
      } else {
        const remainingChances = extractRemainingChances(answerStatusData.message)

        setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
        if (!answerStatusData.data.remaining_seconds) {
          setChances(3 - answerStatusData.data.try)
        } else {
          setChances(0)
        }
      }
    }
  }, [answerStatusData])

  useEffect(() => {
    if (chances === 0) {
      setTimeLeft(answerStatusData.data.remaining_seconds)
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

  const tryAnswer = async (inputValue: string) => {
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
        setIsFlipped(true)
      } else {
        handleWrongAttempt()
        const remainingChances = extractRemainingChances(response.message)
        setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
        setButtonText(t('tryAnswer.submit'))
      }
    } catch (error) {
      throw error
      setResponseMessage(t('error.unexpectedError'))
    }
  }

  const handleCardClick = () => {
    if (isCorrect) {
      setIsFlipped((prev) => !prev)
    }
    // setIsFlipped((prev) => !prev)
  }

  const backgroundColor = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractColorToString(etc)
  }, [letterData])

  const fontStlye = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractFontStyle(etc)
  }, [letterData])

  const patternStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractPatternStyle(etc)
  }, [letterData])

  return {
    imageUrl,
    drawData,
    isCorrect,
    responseMessage,
    buttonText,
    chances,
    isShaking,
    timeLeft,
    tryAnswer,
    isFlipped,
    backgroundColor,
    letterData,
    patternStyle,
    fontStlye,
    handleCardClick,
  }
}

export default useTryAnswer
