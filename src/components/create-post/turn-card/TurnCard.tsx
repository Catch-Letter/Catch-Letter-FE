import { lock, santa } from '#/assets/create'
import { Card } from '#/shared/ui'
import { useTranslation } from 'react-i18next'
import { FrontCard, BackCard, TurnCardStyle, boldFont } from './TurnCard.styles'

const TurnCard = () => {
  const { t } = useTranslation()

  return (
    <div css={TurnCardStyle}>
      <Card css={FrontCard}>
        <img src={lock} alt='lock' width={50} height={50} />
        <span className='top'>
          <b css={boldFont}>{t('create.cardMessageTop')}</b>
          <br />
          {t('create.cardMessageBottom')}
        </span>
      </Card>
      <Card css={BackCard} height='300px'>
        <img src={santa} alt='santa' width={177} height={290} srcSet={`${santa} 178w`} />
      </Card>
    </div>
  )
}

export default TurnCard
