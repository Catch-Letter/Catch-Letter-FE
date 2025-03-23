import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { Button } from '#/shared/ui'
import { TimeArea, DescLink } from '#/components/success'
import { BackHeader } from '#/components'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Background } from '#/shared/ui/background'
import { useState } from 'react'
import ShareModal from '#/components/share-modal/ShareModal'
import { useInboxStatus } from '#/hooks'

const Success = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const [isOpen, setIsOpen] = useState(false)
  const link = `http://localhost:5173/inbox/${user.uuid}`
  const { time_left } = useInboxStatus(user.uuid)

  return (
    <div css={SuccessStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader />
      <div css={SuccessWrapper}>
        <div className='area_desc'>
          <DescLink
            title={t('create.link')}
            link={link}
            btnName={t('create.btncopy')}
            desc={t('create.desc')}
          />
        </div>
        <TimeArea title={t('create.opentime')} time={time_left} />
        <Button
          className='btn_share'
          width={343}
          onClick={() => {
            setIsOpen(true)
          }}
        >
          {t('create.btnshare')}
        </Button>
      </div>
      <ShareModal isOpen={isOpen} onClose={() => setIsOpen(false)} url={link} />
    </div>
  )
}

export default Success
