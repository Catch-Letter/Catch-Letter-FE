import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-answer/try-Counter/TryCounter.styles'
import { SeparatedInput } from '#/shared/ui'
import { extractRemainingChances } from '#/shared/utils/extractRemainingChances'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface TryCounterProps {
  chances: number
  isCorrect: boolean
  message: string | null
  cycle: number
  answerLength: number
  hints: Array<{ index: number; value: string }>
  remainingSeconds: number | null
  onResetChances: () => void
}

const TryCounter: React.FC<TryCounterProps> = ({
  chances,
  isCorrect,
  message,
  cycle,
  answerLength,
  hints,
  remainingSeconds,
  onResetChances,
}) => {
  const { t } = useTranslation()
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  useEffect(() => {
    if (chances === 0 && remainingSeconds) {
      setTimeLeft(remainingSeconds)
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev > 0) return prev - 1
          clearInterval(timer)
          onResetChances()
          return null
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [chances, message, remainingSeconds])

  const translatedMessage = isCorrect
    ? t('tryAnswer.correctAnswer')
    : message
      ? t('tryAnswer.remainingAttempts', { chance: extractRemainingChances(message) })
      : t('tryAnswer.waitingChance')

  const emojiArray = Array(3 - chances)
    .fill(failedEmoji)
    .concat(Array(chances).fill(successEmoji))

  const answerHint = Array(answerLength).fill(' ')
  hints.forEach((hint) => {
    answerHint[hint.index] = hint.value
  })

  const answerString = answerHint.join('')

  return (
    <div css={TryCounterStyle}>
      <div className='Emoji'>
        {isCorrect ? (
          <span className='correct-message'>{translatedMessage}</span>
        ) : chances > 0 ? (
          emojiArray.map((emoji, index) => (
            <img key={index} src={emoji} alt='emoji' width={24} height={24} />
          ))
        ) : (
          <span className='timer'>
            {Math.floor((timeLeft ?? 0) / 60)
              .toString()
              .padStart(2, '0')}
            :{(timeLeft! % 60).toString().padStart(2, '0')}
          </span>
        )}
      </div>
      <p className='Text'>
        {cycle > 0 && !isCorrect ? (
          <SeparatedInput
            length={answerLength}
            value={answerString}
            padding='4px'
            readOnly={true}
          />
        ) : isCorrect ? (
          t('tryAnswer.passwordUnlock')
        ) : chances === 0 ? (
          t('tryAnswer.tryAgain')
        ) : (
          translatedMessage
        )}
      </p>
    </div>
  )
}

export default TryCounter
