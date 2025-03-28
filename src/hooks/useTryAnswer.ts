import { postTryAnswer } from '#/api/postTryAnswer'
import useGetAnswerStatus from '#/hooks/query/useGetAnswerStatus'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { extractRemainingChances } from '#/shared/utils'
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

  const { data: letterData } = useGetLetterData(uuid!, Number(id!))
  const { data: drawData } = useGetDrawData(uuid!, Number(id!))
  const { data: answerStatusData } = useGetAnswerStatus(uuid!, Number(id!))
  //그림가져오기
  useEffect(() => {
    if (drawData && drawData.data.presigned_url) {
      setImageUrl(drawData.data.presigned_url)
    }
  }, [drawData])

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

  const backgroundColor = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractColorToString(etc)
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
    backgroundColor,
  }
}

export default useTryAnswer
