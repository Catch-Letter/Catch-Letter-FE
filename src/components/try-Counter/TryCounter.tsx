import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-Counter/TryCounter.styles'

interface TryCounterProps {
  chances: number
}

// const emojis = ['😵', '😊', '😊😊', '😊😊😊']

const TryCounter: React.FC<TryCounterProps> = ({ chances }) => {
  const emojiArray = Array(3 - chances)
    .fill(failedEmoji)
    .concat(Array(chances).fill(successEmoji))

  return (
    <div css={TryCounterStyle}>
      <div className='Emoji'>
        {emojiArray.map((emoji, index) => (
          <img key={index} src={emoji} alt='emoji' width={24} height={24} />
        ))}
      </div>
      <p className='Text'>
        {chances === 0 ? '잠시 후 다시 시도해주세요' : `${chances}번의 기회가 남았어요!`}
      </p>
    </div>
  )
}
export default TryCounter
