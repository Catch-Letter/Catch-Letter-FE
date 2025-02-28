import { DrawingIntroStyle, IntroWrapper } from './DrawingIntro.styles'
import { PaintPalette } from '#/assets/drawing'

const DrawingIntro = ({ onStart }: { onStart: () => void }) => {
  return (
    <div css={DrawingIntroStyle} onClick={onStart}>
      <div css={IntroWrapper}>
        <img src={PaintPalette} alt='그림 팔레트' />
        <h2>내가 그린 그림을 맞추면</h2>
        <h3>친구가 편지를 읽을 수 있어요!</h3>
        <span>화면을 터치해서 그림을 그려보세요</span>
      </div>
    </div>
  )
}

export default DrawingIntro
