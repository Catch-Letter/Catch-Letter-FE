import { TurnCard } from '#/components/create-post'
import { Button, Header } from '#/shared/ui'
import { useNavigate } from 'react-router'
import { CreatePostStyle, CreateWrapper } from './CreatePost.styles'
import { Background } from '#/shared/ui/background'
import { useTranslation } from 'react-i18next'

const CreatePost = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div css={CreatePostStyle}>
      <Background animated gradientType='blueGradient' />
      <Header />
      <div css={CreateWrapper}>
        <div className='title-area'>
          <div className='title'>Catch-Letter</div>
          <div className='sub-title'>{t('create.introMessage')}</div>
        </div>
        <TurnCard />
      </div>
      <Button
        className='create-btn'
        width={343}
        onClick={() => {
          navigate('/postform')
        }}
      >
        {t('create.createPost')}
      </Button>
    </div>
  )
}

export default CreatePost
