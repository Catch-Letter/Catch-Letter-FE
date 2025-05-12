import { TurnCard } from '#/components/create-post'
import { Background, Button, Header } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { CreatePostStyle, CreateWrapper } from './CreatePost.styles'
import { Toast } from '#/components'
import { trackBtnClick } from '#/shared/utils/gtag'

const CreatePost = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onClickCreatePost = () => {
    trackBtnClick('createPost')
    navigate('/postform')
  }

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
      <Button className='create-btn' width={343} onClick={onClickCreatePost}>
        {t('create.createPost')}
      </Button>
      <Toast offset='20dvh' />
    </div>
  )
}

export default CreatePost
