import { TurnCardStyle } from './TurnCard.styles'

const TurnCard = () => {
  return (
    <div css={TurnCardStyle}>
      <div className='front-card'>
        <img src='/lock.png' alt='lock' width={50} />
        <div className='top'>그림을 맞추면</div>
        <div className='bottom'>편지를 읽을 수 있어요!</div>
      </div>
      <div className='back-card'>
        <img src='/santa.svg' alt='santa' />
      </div>
    </div>
  )
}

export default TurnCard
