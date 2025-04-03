import { TurnCard } from '#/components/create-post'
import { Background, Button, Header } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { CreatePostStyle, CreateWrapper } from './CreatePost.styles'
import { Toast } from '#/components'

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
      <Toast offset='20vh' />
    </div>
  )
}

export default CreatePost
