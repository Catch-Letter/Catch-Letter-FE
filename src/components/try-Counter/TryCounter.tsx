import { TryCounterStyle } from '#/components/try-Counter/TryCounter.styles'

interface TryCounterProps {
  chances: number
}

const emojis = ['😵', '😊', '😊😊', '😊😊😊']

const TryCounter: React.FC<TryCounterProps> = ({ chances }) => {
  return (
    <div css={TryCounterStyle}>
      <div className='Emoji'>{emojis[chances] || '😵'}</div>
      <p className='Text'>
        {chances === 0 ? '잠시 후 다시 시도해주세요' : `${chances}번의 기회가 남았어요!`}
      </p>
    </div>
  )
}
export default TryCounter
