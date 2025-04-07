import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-answer/try-Counter/TryCounter.styles'
import { SeparatedInput } from '#/shared/ui'
import { extractRemainingChances } from '#/shared/utils/extractRemainingChances'
import { useTranslation } from 'react-i18next'

interface TryCounterProps {
  chances: number
  timeLeft: number | null
  isCorrect: boolean
  message: string | null
  cycle: number
  answerLength: number
  hints: Array<{ index: number; value: string }>
}

const TryCounter: React.FC<TryCounterProps> = ({
  chances,
  timeLeft,
  isCorrect,
  message,
  cycle,
  answerLength,
  hints,
}) => {
  const { t } = useTranslation()

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
        {isCorrect ? ( // 정답일 경우
          <span className='correct-message'>{translatedMessage}</span>
        ) : chances > 0 ? ( // 기회가 남아 있을 경우
          emojiArray.map((emoji, index) => (
            <img key={index} src={emoji} alt='emoji' width={24} height={24} />
          ))
        ) : (
          // 기회가 없을 경우
          <span className='timer'>
            {Math.floor((timeLeft ?? 0) / 60)
              .toString()
              .padStart(2, '0')}
            :{(timeLeft! % 60).toString().padStart(2, '0')}
          </span>
        )}
      </div>
      <p className='Text'>
        {cycle > 1 ? (
          <SeparatedInput length={answerLength} value={answerString} disabled={true} />
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
