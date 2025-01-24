import { TurnCard } from '#/pages/create-post/ui/turn-card'
import { Button, Header } from '#/shared/ui'
import { CreatePostStyle } from './CreatePost.styles'

const CreatePost = () => {
  return (
    <div css={CreatePostStyle}>
      <Header />
      <div className='title-area'>
        <div className='title'>Catch-Letter</div>
        <div className='sub-title'>그림을 맞추고 상대방의 마음을 확인해요!</div>
      </div>
      <TurnCard />
      <Button width={343}>내 우체통 만들기</Button>
    </div>
  )
}

export default CreatePost
