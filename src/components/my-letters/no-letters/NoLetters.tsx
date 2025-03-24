import bubbleImgae from '#/assets/myLetters/bubbles.svg'
import { LettersContainer } from '#/components/my-letters/no-letters/NoLetters.styles'

const NoLetters = () => {
  return (
    <div css={LettersContainer}>
      <img src={bubbleImgae} alt='bubble' />
      <h1>이번에는 편지가 없어요 🥲</h1>
      <span>새로운 링크로 다시 한 번</span>
      <span>친구들에게 소식을 전해 볼까요?</span>
    </div>
  )
}

export default NoLetters
