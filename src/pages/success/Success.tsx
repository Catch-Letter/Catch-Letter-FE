import { BackHeader } from '#/components'
import { DescLink, TimeArea } from '#/components/success'
import { useCountdownTimer } from '#/hooks'
import { Background, Button } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { SuccessStyle, SuccessWrapper } from './Success.styles'

// from createPostForm
const Success = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const link = `http://localhost:5173/inbox/${user.uuid}`
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
        <Button className='btn_share' width={343}>
          {t('create.btnshare')}
        </Button>
      </div>
    </div>
  )
}

export default Success
