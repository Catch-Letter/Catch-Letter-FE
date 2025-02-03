import { Card } from '#/shared/ui'
import { FrontCard, BackCard, TurnCardStyle } from './TurnCard.styles'

const TurnCard = () => {
  return (
    <div css={TurnCardStyle}>
      <Card css={FrontCard}>
        <img src='/lock.png' alt='lock' width={50} />
        <div className='top'>그림을 맞추면</div>
        <div className='bottom'>편지를 읽을 수 있어요!</div>
      </Card>
      <Card css={BackCard}>
        <img src='/santa.svg' alt='santa' />
      </Card>
    </div>
  )
}

export default TurnCard
