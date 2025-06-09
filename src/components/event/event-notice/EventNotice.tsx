import type { EventModalProps } from '#/components/event/event-modal/EventModal'
import { eventImg } from '#/assets/event'
import { colors } from '#/styles/color'
import { renderColorTranslation } from '#/shared/utils/extractTranslation'
import { useTranslation } from 'react-i18next'
import { EventNoticeWrapper } from '#/components/event/event-notice/EventNotice.styles'

type EventNoticeProps = Omit<EventModalProps, 'onSubmit' | 'onClose' | 'isOpen'>

const EventNotice = ({ startDate, endDate }: EventNoticeProps) => {
  const { t } = useTranslation()
  const text = t('coffee')
  const targetWord = text.includes('coffee') ? 'coffee' : '커피'

  return (
    <div css={EventNoticeWrapper}>
      <div className='title'>{t('event')}</div>
      <span className='event-date'>
        {t('eventDate')} {startDate} ~ {endDate}
      </span>
      <img src={eventImg} alt='event' width={200} height={205} />
      <div className='event-font'>
        {renderColorTranslation(targetWord, text, colors.neonGreen[6])}
      </div>
      <div className='desc-message'>{t('event_desc')}</div>
    </div>
  )
}

export default EventNotice
