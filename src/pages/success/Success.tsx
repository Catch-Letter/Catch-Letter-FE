import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { Button } from '#/shared/ui'
import { TimeArea, DescLink } from '#/components/success'
import { BackHeader } from '#/components'
import { useLocation } from 'react-router'
import countTimer from '#/shared/utils/countTimer'
import { useTranslation } from 'react-i18next'
import { Background } from '#/shared/ui/background'

const Success = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const user = location.state
  const link = `http://localhost:5173/receivedletter/${user.uuid}`
  const leftTime = countTimer(user.expired)

  return (
    <div css={SuccessStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader />
      <div css={SuccessWrapper}>
        <DescLink
          title={t('create.link')}
          link={link}
          btnName={t('create.btncopy')}
          desc={t('create.desc')}
        />
        <TimeArea title='우체통 열람가능 시간' time={leftTime} />
        <Button width={343}>내 우체통 공유하기!</Button>
      </div>
    </div>
  )
}

export default Success
