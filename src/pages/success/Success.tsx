import { BackHeader } from '#/components'
import { DescLink, TimeArea } from '#/components/success'
import { useCountdownTimer } from '#/hooks'
import { Background, Button } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'
import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { ShareModal } from '#/components/share-modal'
import useModal from '#/hooks/useModal'

// from createPostForm
const Success = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const { isOpen, openModal, closeModal } = useModal()
  const { leftTime } = useCountdownTimer(user.expired)
  const uuidMatch = user.mailboxUrl.match(/[^/]+$/)

  return (
    <div css={SuccessStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader />
      <div css={SuccessWrapper}>
        <div className='area_desc'>
          <DescLink
            title={t('create.link')}
            link={user.mailboxUrl}
            btnName={t('create.btncopy')}
            desc={t('create.desc')}
          />
        </div>
        <TimeArea title={t('create.opentime')} time={leftTime} />
        <Button
          className='btn_share'
          variant='secondary'
          width={343}
          onClick={() => navigate(`/inbox/${uuidMatch?.[0]}`)}
        >
          {t('create.btnPost')}
        </Button>
        <Button className='btn_share' width={343} onClick={openModal}>
          {t('create.btnshare')}
        </Button>
      </div>
      <ShareModal isOpen={isOpen} onClose={closeModal} url={user.mailboxUrl} />
    </div>
  )
}

export default Success
