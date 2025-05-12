import { BackHeader } from '#/components'
import { DescLink } from '#/components/success'
import { Background, Button } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'
import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { ShareModal } from '#/components/share-modal'
import useModal from '#/hooks/useModal'
import { trackBtnClick } from '#/shared/utils/gtag'

// from createPostForm
const Success = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const { isOpen, openModal, closeModal } = useModal()
  // const { leftTime } = useCountdownTimer(user.expired)
  const uuidMatch = user.mailboxUrl.match(/[^/]+$/)

  const onClickBtnPost = () => {
    trackBtnClick('btnPostFromSuccess')
    navigate(`/inbox/${uuidMatch?.[0]}`)
  }

  const onClickShare = () => {
    trackBtnClick('shareFromSuccess')
    openModal()
  }

  return (
    <div css={SuccessStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader />
      <div css={SuccessWrapper}>
        <div className='area_desc'>
          <h1 className='create_link'>{t('create.link')}</h1>
          <h2 className='create_link_desc'>{t('create.linkShere')}</h2>
          <DescLink link={user.mailboxUrl} btnName={t('create.btncopy')} desc={t('create.desc')} />
          {/* <DescWithNum className='second' number={2}>
            {t('create.opentime')} <TimeArea time={leftTime} /> <br />
            {t('create.check')}
          </DescWithNum> */}
        </div>
        <Button className='btn_share' variant='secondary' width={343} onClick={onClickBtnPost}>
          {t('create.btnPost')}
        </Button>
        <Button className='btn_share' width={343} onClick={onClickShare}>
          {t('create.btnshare')}
        </Button>
      </div>
      <ShareModal isOpen={isOpen} onClose={closeModal} url={user.mailboxUrl} />
    </div>
  )
}

export default Success
