import { BackHeader, LetterCard, LetterContent } from '#/components'
import { TryIntro } from '#/components/try-answer'
import { TryCounter } from '#/components/try-answer/try-Counter'
import useTryAnswer from '#/hooks/useTryAnswer'
import {
  backCardStyle,
  frontCardStyle,
  letterCardContainer,
  letterCardStyle,
  SkeletonCardStyle,
  TryAnswerStyle,
  tryAnswerWrapper,
} from '#/pages/tryAnswer/TryAnswer.styles'
import { Background, Button, DotLoader, InputField } from '#/shared/ui'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { colors } from '#/styles/color'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'

const TryAnswer = () => {
  // const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()
  const { uuid } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const answerLength = location.state?.answerLength || 6
  const [inputValue, setInputValue] = useState<string>('')
  const [isTryStarted, setIsTryStarted] = useState<boolean>(false)
  const { selectedColor } = useLetterCreationStore()

  const {
    imageUrl,
    drawData,
    isCorrect,
    responseMessage,
    chances,
    isShaking,
    timeLeft,
    tryAnswer,
    backgroundColor,
    isFlipped,
    letterData,
    patternStyle,
    fontStlye,
    handleCardClick,
    cycle,
    hints,
  } = useTryAnswer()

  const handleNavigate = () => {
    if (isCorrect) {
      navigate(`/myletters/${uuid}`)
    }
  }

  const handleTryAnswer = () => {
    tryAnswer(inputValue)
  }

  return (
    <div css={tryAnswerWrapper}>
      <Background color={backgroundColor} />
      <BackHeader />
      <div css={TryAnswerStyle}>
        <TryCounter
          chances={chances}
          timeLeft={timeLeft}
          isCorrect={isCorrect}
          message={responseMessage}
          cycle={cycle}
          answerLength={answerLength}
          hints={hints}
        />

        <div
          className={`LetterCard-container ${isShaking ? 'shake' : ''} ${isCorrect ? 'glowing' : ''}`}
          css={letterCardContainer}
        >
          {!isTryStarted ? (
            <TryIntro onStart={() => setIsTryStarted(true)} />
          ) : drawData && letterData ? (
            <div
              css={letterCardStyle}
              onClick={handleCardClick}
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              <div css={frontCardStyle(imageUrl || '')}></div>
              <div css={backCardStyle}>
                <LetterCard type={selectedColor}>
                  <LetterContent
                    to={letterData.data.to}
                    content={letterData.data.contents}
                    from={letterData.data.from}
                    color={backgroundColor}
                    pattern={patternStyle}
                    font={fontStlye}
                  />
                </LetterCard>
              </div>
            </div>
          ) : (
            <div css={SkeletonCardStyle}>
              <DotLoader color={colors.grey[9]} backgroundColor={colors.grey[3]} />
            </div>
          )}
        </div>
        <div className='Input-area'>
          <div className='Input-wrapper'>
            <InputField
              maxLength={answerLength}
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              placeholder={t('tryAnswer.inputPlaceholder')}
            />
            <span className='Input-length'>{`${inputValue.length} / ${answerLength}`}</span>
          </div>
        </div>
        <div className='button-area'>
          <Button
            onClick={isCorrect ? handleNavigate : handleTryAnswer}
            disabled={chances === 0 || inputValue.length < answerLength}
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
