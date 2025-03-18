import { SendLetterStyle } from './SendLetter.styles'
import { Button } from '#/shared/ui/button'
import { SendCard, SendDesc } from '#/components/letter-send'
import { useLocation, useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'
import { Header } from '#/shared/ui'
import { useTranslation } from 'react-i18next'

const SendLetter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const info = location.state
  const handleCreatePost = () => {
    navigate('/create')
  }

  return (
    <>
      <Background color={info.color} />
      <Header />
      <div css={SendLetterStyle}>
        <SendDesc title={t('send.desc')} subTitle={t('send.keydesc')} />
        <SendCard content='/santa.svg' />
        <div className='button-area'>
          <Button width={339} onClick={handleCreatePost}>
            {t('send.createbtn')}
          </Button>
          <Button width={339} variant='secondary'>
            {t('send.done')}
          </Button>
        </div>
      </div>
    </>
  )
}

export default SendLetter
