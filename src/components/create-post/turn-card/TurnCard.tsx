import { lock, santa } from '#/assets/create'
import { Card } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { FrontCard, BackCard, TurnCardStyle } from './TurnCard.styles'

const TurnCard = () => {
  const { t } = useTranslation()

  return (
    <div css={TurnCardStyle}>
      <Card css={FrontCard}>
        <img src={lock} alt='lock' width={50} />
        <div className='top'>{t('create.cardMessage')}</div>
      </Card>
      <Card css={BackCard}>
        <img src={santa} alt='santa' />
      </Card>
    </div>
  )
}

export default TurnCard
