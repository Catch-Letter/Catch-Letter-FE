import { Button, Header } from '#/shared/ui'
import { error } from '#/assets/error'
import { ErrorWrapper, ErrorContainer } from './NotFound.styles'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div css={ErrorContainer}>
      <Header />
      <div css={ErrorWrapper}>
        <img src={error} alt='error-image' />
        <h1>404 - {t('error.notFoundPage')}</h1>
        <p dangerouslySetInnerHTML={{ __html: t('error.notFoundDesc') }}></p>
        <div className='button-wrapper'>
          <Button
            variant='secondary'
            width={140}
            onClick={() => {
              navigate(-1)
            }}
          >
            {t('goBack')}
          </Button>
          <Button
            width={140}
            onClick={() => {
              navigate('/')
            }}
          >
            {t('goHome')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
