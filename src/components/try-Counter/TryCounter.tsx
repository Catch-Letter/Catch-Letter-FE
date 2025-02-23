import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-Counter/TryCounter.styles'

interface TryCounterProps {
  chances: number
  timeLeft: number | null
}

const TryCounter: React.FC<TryCounterProps> = ({ chances, timeLeft }) => {
  const emojiArray = Array(3 - chances)
    .fill(failedEmoji)
    .concat(Array(chances).fill(successEmoji))

  return (
    <div css={TryCounterStyle}>
      <div className='Emoji'>
        {chances > 0 ? (
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
        {chances === 0 ? '잠시 후 다시 도전하세요!' : `${chances}번의 기회가 남았어요!`}
      </p>
    </div>
  )
}

export default TryCounter
