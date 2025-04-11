import { postTryAnswer } from '#/api/postTryAnswer'
import useGetAnswerStatus from '#/hooks/query/useGetAnswerStatus'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { extractRemainingChances } from '#/shared/utils'
import { extractFontStyle } from '#/shared/utils/extractFontStyle'
import { extractPatternStyle } from '#/shared/utils/extractPattern'
import { extractColorToString } from '#/types/extractColor'
import { TryAnswerResponse } from '#/types/tryAnswer'
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
  const [response, setResponse] = useState<TryAnswerResponse | null>(null)

  const { data: letterData, isError: isLetterError } = useGetLetterData({
    uuid: uuid!,
    letterId: Number(id!),
    enabled: isCorrect,
  })

  const { data: drawData, isError: isDrawError } = useGetDrawData(uuid!, Number(id!))
  const {
    data: answerStatusData,
    isError: isAnswerStatusError,
    refetch: refetchAnswerStatus,
  } = useGetAnswerStatus(uuid!, Number(id!))

  const isNotFound = isLetterError || isDrawError || isAnswerStatusError

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
    if (
      (chances === 0 && answerStatusData.data.remaining_seconds) ||
      (chances === 0 && response?.remaining_seconds)
    ) {
      const remainingSeconds =
        response?.remaining_seconds || answerStatusData.data.remaining_seconds
      setTimeLeft(remainingSeconds)
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev > 0) return prev - 1
          clearInterval(timer)
          setChances(maxChances)
          // refetchAnswerStatus()
          return null
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [chances, answerStatusData, response, refetchAnswerStatus])

  const handleWrongAttempt = (remaining_seconds: number) => {
    if (chances > 0) {
      setChances((prevChances) => {
        const newChances = prevChances - 1
        if (newChances === 0) {
          setTimeLeft(remaining_seconds)
        }
        return newChances
      })
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

      setResponse(response)

      if (response.success) {
        setIsCorrect(true)
        setResponseMessage(t('tryAnswer.correctAnswer'))
        setButtonText(t('tryAnswer.checkAnswer'))
        setIsFlipped(true)
      } else {
        const remainingSeconds = response.remaining_seconds ?? 0
        handleWrongAttempt(remainingSeconds)
        if (response.hints && response.hints.length > 0) {
          refetchAnswerStatus()
        }
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
  }

  const backgroundColor = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractColorToString(etc)
  }, [letterData])

  const fontStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractFontStyle(etc)
  }, [letterData])

  const patternStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractPatternStyle(etc)
  }, [letterData])

  const cycle = answerStatusData?.data?.cycle ?? 0

  const hints = answerStatusData?.data?.hints ?? []

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
    fontStyle,
    handleCardClick,
    cycle,
    hints,
    isNotFound,
  }
}

export default useTryAnswer
