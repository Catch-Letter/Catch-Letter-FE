import { SendLetterStyle, sendLetterWrapper } from './SendLetter.styles'
import { Button } from '#/shared/ui/button'
import { SendCard, SendDesc } from '#/components/letter-send'
import { useLocation, useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'
import { Header } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const SendLetter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const info = location.state
  const [imageUrl, setImageUrl] = useState('')

  const handleCreatePost = () => {
    navigate('/')
  }

  useEffect(() => {
    if (info?.img) {
      const imgUrl = URL.createObjectURL(info?.img)
      setImageUrl(imgUrl)

      return () => {
        URL.revokeObjectURL(imgUrl)
      }
    }
  }, [info?.img])

  return (
    <div css={sendLetterWrapper}>
      <Background color={info.color} />
      <Header />
      <div css={SendLetterStyle}>
        <SendDesc title={t('send.desc')} subTitle={t('send.keydesc')} />
        <SendCard color={info.color} content={imageUrl} />
      </div>
      <div className='button-area'>
        <Button width={339} onClick={handleCreatePost}>
          {t('send.createbtn')}
        </Button>
      </div>
    </div>
  )
}

export default SendLetter
