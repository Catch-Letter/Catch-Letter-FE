import { BackHeader, LetterCard } from '#/components'
import { LetterContent } from '#/components/letter-choice'
import useGetAnswer from '#/hooks/query/useGetAnswer'
import useGetDrawData from '#/hooks/query/useGetDrawData'
import useGetLetterData from '#/hooks/query/useGetLetterData'
import { Background, DotLoader, SeparatedInput } from '#/shared/ui'
import { extractFontStyle } from '#/shared/utils/extractFontStyle'
import { extractPatternStyle } from '#/shared/utils/extractPattern'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { colors } from '#/styles/color'
import { extractColorToString } from '#/types/extractColor'
import { useEffect, useMemo, useState } from 'react'
import { IoTriangle } from 'react-icons/io5'
import { Navigate, useParams } from 'react-router'
import { CheckAnswerStyles, checkAnswerWrapper, SkeletonCardStyle } from './CheckAnswer.styles'
import { useTranslation } from 'react-i18next'

const CheckAnswer = () => {
  const { t } = useTranslation()
  const { uuid, id } = useParams()
  const { selectedColor } = useLetterCreationStore()
  const [isFlipped, setIsFlipped] = useState(false)
  const [answerLength, setAnswerLength] = useState(4)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [answer, setAnswer] = useState<string>('')

  const {
    data: answerData,
    isLoading: answerLoading,
    error: answerError,
  } = useGetAnswer(uuid!, Number(id!))

  const { data: drawData, error: drawError } = useGetDrawData(uuid!, Number(id!))
  const {
    data: letterResponse,
    isLoading: letterLoading,
    error: letterError,
  } = useGetLetterData(uuid!, Number(id!))

  const isNotFound =
    answerError?.message === 'NotFound' ||
    drawError?.message === 'NotFound' ||
    letterError?.message === 'NotFound'

  if (isNotFound) {
    return <Navigate to='/not-found' replace />
  }

  //정답 가져오기
  useEffect(() => {
    if (answerData && answerData.data && answerData.data.answer) {
      setAnswerLength(answerData.data.answer.length)
      setAnswer(answerData.data.answer)
    }
  }, [answerData])

  //그림가져오기
  useEffect(() => {
    if (drawData && drawData.data.presigned_url) {
      setImageUrl(drawData.data.presigned_url)
    }
  }, [drawData])

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev)
  }

  const backgroundColor = useMemo(() => {
    const etc = letterResponse?.data?.etc
    return extractColorToString(etc)
  }, [letterResponse])

  const fontStlye = useMemo(() => {
    const etc = letterResponse?.data?.etc
    return extractFontStyle(etc)
  }, [letterResponse])

  const patternStyle = useMemo(() => {
    const etc = letterResponse?.data?.etc
    return extractPatternStyle(etc)
  }, [letterResponse])

  return (
    <div css={checkAnswerWrapper}>
      <Background color={backgroundColor} />
      <BackHeader />
      <div css={CheckAnswerStyles(isFlipped)}>
        <button className='btn-copy'>{t('checkAnswer.badge')}</button>
        {answerLoading ? (
          <p>{t('checkAnswer.loadingAnswer')}</p>
        ) : answerError ? (
          <p>{t('checkAnswer.loadingAnswerFail')}</p>
        ) : answer ? (
          <SeparatedInput length={answerLength} value={answer} readOnly={true} />
        ) : null}
        <div className='content' onClick={handleCardClick}>
          <div className='cardFront'>
            {imageUrl ? (
              <LetterCard type={selectedColor}>
                {
                  <img
                    src={imageUrl}
                    alt={answer}
                    width={'100%'}
                    height={'100%'}
                    style={{ objectFit: 'contain' }}
                  />
                }
              </LetterCard>
            ) : (
              <div css={SkeletonCardStyle}>
                <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
              </div>
            )}
          </div>
          <div className='cardBack'>
            {letterLoading ? (
              <div css={SkeletonCardStyle}>
                <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
              </div>
            ) : letterResponse && letterResponse.data ? (
              <LetterCard type={selectedColor}>
                <LetterContent
                  to={letterResponse.data.to}
                  content={letterResponse.data.contents}
                  from={letterResponse.data.from}
                  color={selectedColor}
                  pattern={patternStyle}
                  font={fontStlye}
                />
              </LetterCard>
            ) : letterError ? (
              <p>{t('checkAnswer.loadingLetterFail')}</p>
            ) : null}
          </div>
        </div>
        <div className='notice-area'>
          <IoTriangle size={16} />
          <p>{t('checkAnswer.cardFlip')}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckAnswer
