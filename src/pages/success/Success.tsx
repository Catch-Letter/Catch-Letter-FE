import { BackHeader, Toast } from '#/components'
import { DescLink, TimeArea } from '#/components/success'
import { useCountdownTimer } from '#/hooks'
import { Background, Button } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { ShareModal } from '#/components/share-modal'
import useModal from '#/hooks/useModal'

// from createPostForm
const Success = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const { isOpen, openModal, closeModal } = useModal()
  const link = `https://catchletter.kr/inbox/${user.uuid}`
  const { leftTime } = useCountdownTimer(user.expired)

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
        <TimeArea title={t('create.opentime')} time={leftTime} />
        <Button className='btn_share' width={343} onClick={openModal}>
          {t('create.btnshare')}
        </Button>
      </div>
      <Toast />
      <ShareModal isOpen={isOpen} onClose={closeModal} url={link} />
    </div>
  )
}

export default Success
