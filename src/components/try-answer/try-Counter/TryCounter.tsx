import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-answer/try-Counter/TryCounter.styles'
import { extractRemainingChances } from '#/shared/utils/extractRemainingChances'
import { useTranslation } from 'react-i18next'

interface TryCounterProps {
  chances: number
  timeLeft: number | null
  isCorrect: boolean
  message: string | null
}

const TryCounter: React.FC<TryCounterProps> = ({ chances, timeLeft, isCorrect, message }) => {
  const { t } = useTranslation()

  const translatedMessage = isCorrect
    ? t('tryAnswer.correctAnswer')
    : message
      ? t('tryAnswer.remainingAttempts', { chance: extractRemainingChances(message) })
      : t('tryAnswer.waitingChance')

  const emojiArray = Array(3 - chances)
    .fill(failedEmoji)
    .concat(Array(chances).fill(successEmoji))

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
        {isCorrect
          ? t('tryAnswer.passwordUnlock')
          : chances === 0
            ? t('tryAnswer.tryAgain')
            : translatedMessage}
      </p>
    </div>
  )
}

export default TryCounter
