import { DrawingIntroStyle, IntroWrapper } from './DrawingIntro.styles'
import { PaintPalette } from '#/assets/drawing'
import { useTranslation } from 'react-i18next'

const DrawingIntro = ({ onStart }: { onStart: () => void }) => {
  const { t } = useTranslation()
  return (
    <div css={DrawingIntroStyle} onClick={onStart}>
      <div css={IntroWrapper}>
        <img src={PaintPalette} alt='그림 팔레트' />
        <h2>{t('drawIntro.title')}</h2>
        <h3>{t('drawIntro.subtitle')}</h3>
        <span>{t('drawIntro.instruction')}</span>
      </div>
    </div>
  )
}

export default DrawingIntro
