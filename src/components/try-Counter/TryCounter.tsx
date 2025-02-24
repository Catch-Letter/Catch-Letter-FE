import { failedEmoji, successEmoji } from '#/assets/emoji'
import { TryCounterStyle } from '#/components/try-Counter/TryCounter.styles'

interface TryCounterProps {
  chances: number
  timeLeft: number | null
  isCorrect: boolean // 정답 여부 추가
}

const TryCounter: React.FC<TryCounterProps> = ({ chances, timeLeft, isCorrect }) => {
  const emojiArray = Array(3 - chances)
    .fill(failedEmoji)
    .concat(Array(chances).fill(successEmoji))

  return (
    <div css={TryCounterStyle}>
      <div className='Emoji'>
        {isCorrect ? ( // 정답일 경우
          <span className='correct-message'>정답입니다!</span>
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
          ? '비밀암호가 풀렸어요'
          : chances === 0
            ? '잠시 후 다시 도전하세요!'
            : `${chances}번의 기회가 남았어요!`}
      </p>
    </div>
  )
}

export default TryCounter
