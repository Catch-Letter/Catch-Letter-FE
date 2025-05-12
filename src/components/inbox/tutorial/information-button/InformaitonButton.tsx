import { informationButtonStyles } from '#/components/inbox/tutorial/information-button/InformaitonButton.styles'
import { useIsFirstRender } from '#/hooks'
import { trackBtnClick } from '#/shared/utils/gtag'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GrCircleInformation } from 'react-icons/gr'

interface Props {
  onClick: () => void
}

const InformationButton: FC<Props> = ({ onClick }) => {
  const { isFirstRender } = useIsFirstRender()
  const { t } = useTranslation()
  const [showTooltip, setShowTooltip] = useState(false)
  const HELP_RENDER_AFTER = 3

  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!isFirstRender) return

    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(true)
    }, HELP_RENDER_AFTER * 1000)

    return () => {
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current)
      }
    }
  }, [])

  const handleButtonClick = () => {
    trackBtnClick('information')
    onClick()

    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current)
      tooltipTimerRef.current = null
    }
    setShowTooltip(false)
  }

  return (
    <button onClick={handleButtonClick} css={informationButtonStyles}>
      <GrCircleInformation />
      {showTooltip && (
        <div className='help'>
          <div className='bubble'>{t('inbox.tutorial.help-message')}</div>
        </div>
      )}
    </button>
  )
}

export default InformationButton
