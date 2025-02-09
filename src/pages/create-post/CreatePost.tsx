import { TurnCard } from '#/components/create-post'
import { Button, Header } from '#/shared/ui'
import { useNavigate } from 'react-router'
import { CreatePostStyle, CreateWrapper } from './CreatePost.styles'

const CreatePost = () => {
  const navigate = useNavigate()
  return (
    <div css={CreatePostStyle}>
      <Header />
      <div css={CreateWrapper}>
        <div className='title-area'>
          <div className='title'>Catch-Letter</div>
          <div className='sub-title'>그림을 맞추고 상대방의 마음을 확인해요!</div>
        </div>
        <TurnCard />
        <Button
          className='create-btn'
          width={343}
          onClick={() => {
            navigate('/postform')
          }}
        >
          내 우체통 만들기
        </Button>
      </div>
    </div>
  )
}

export default CreatePost
