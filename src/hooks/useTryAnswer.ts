import { postTryAnswer } from '#/api/postTryAnswer'
import useGetAnswerStatus from '#/hooks/query/useGetAnswerStatus'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { extractRemainingChances } from '#/shared/utils'
import { extractColorStyle } from '#/shared/utils/extractColor'
import { extractFontStyle } from '#/shared/utils/extractFontStyle'
import { extractPatternStyle } from '#/shared/utils/extractPattern'
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
  const [isFlipped, setIsFlipped] = useState(false)
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null)

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
          setRemainingSeconds(answerStatusData.data.remaining_seconds)
        }
      }
    }
  }, [answerStatusData])

  const handleWrongAttempt = () => {
    if (chances > 0) {
      setChances((prevChances) => {
        const newChances = prevChances - 1
        return newChances
      })
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  const resetChances = () => {
    setChances(maxChances)
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
        setRemainingSeconds(response.remaining_seconds ?? 0)
        handleWrongAttempt()
        if (response.hints && response.hints.length > 0) {
          refetchAnswerStatus()
        }
        const remainingChances = extractRemainingChances(response.message)
        setResponseMessage(t('tryAnswer.remainingAttempts', { chance: remainingChances }))
        setButtonText(t('tryAnswer.submit'))
      }
    } catch (error) {
      throw error
    }
  }

  const handleCardClick = () => {
    if (isCorrect) {
      setIsFlipped((prev) => !prev)
    }
  }

  const fontStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractFontStyle(etc)
  }, [letterData])

  const patternStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractPatternStyle(etc)
  }, [letterData])

  const colorStyle = useMemo(() => {
    const etc = letterData?.data?.etc
    return extractColorStyle(etc)
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
    tryAnswer,
    isFlipped,
    letterData,
    patternStyle,
    fontStyle,
    colorStyle,
    handleCardClick,
    cycle,
    hints,
    isNotFound,
    remainingSeconds,
    resetChances,
  }
}

export default useTryAnswer
