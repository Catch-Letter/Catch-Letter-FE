import { TryIntroStyle, TryIntroWrapper } from './TryIntro.styles'
import { Lock } from '#/assets/lock'

import { useTranslation } from 'react-i18next'

const TryIntro = ({ onStart }: { onStart: () => void }) => {
  const { t } = useTranslation()
  return (
    <div css={TryIntroStyle} onClick={onStart}>
      <div css={TryIntroWrapper}>
        <img src={Lock} alt='자물쇠' />
        <h2>{t('tryIntro.title')}</h2>
        <h3>{t('tryIntro.subtitle')}</h3>
        <span>{t('tryIntro.instruction')}</span>
      </div>
    </div>
  )
}

export default TryIntro
