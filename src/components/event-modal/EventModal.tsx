import { eventImg } from '#/assets/event'
import { EventModalContainer, EventModalWrapper } from '#/components/event-modal/EvnetModal.styles'
import { Button, InputField, Modal, ModalProps } from '#/shared/ui'
import { isValidPhoneNumber } from '#/shared/utils/eventValidation'
import { renderColorTranslation } from '#/shared/utils/extractTranslation'
import { colors } from '#/styles/color'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export type EventModalProps = Omit<ModalProps, 'children'> & {
  startDate?: string
  endDate?: string
  onSubmit: (phoneNumber: string) => void
  onClose: () => void
}

const EventModal = ({ isOpen, startDate, endDate, onSubmit, onClose }: EventModalProps) => {
  const { t } = useTranslation()
  const [phoneNumber, setPhoneNumber] = useState('')
  const isValid = phoneNumber.trim().length !== 0 && isValidPhoneNumber(phoneNumber)
  const text = t('coffee')
  const targetWord = text.includes('coffee') ? 'coffee' : '커피'

  const handleSubmit = (phoneNumber: string) => {
    if (phoneNumber.trim()) {
      onSubmit(phoneNumber)
    }
  }

  const handleClose = () => {
    setPhoneNumber('')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClickOverlay={handleClose}>
      <div css={EventModalWrapper}>
        <div css={EventModalContainer}>
          <div className='title'>{t('event')}</div>
          <span className='event-date'>
            {t('eventDate')} {startDate} ~ {endDate}
          </span>
          <img src={eventImg} alt='event' width={200} height={205} />
          <div className='event-font'>
            {renderColorTranslation(targetWord, text, colors.neonGreen[6])}
          </div>
          <div className='desc'>
            <div className='desc-message'>{t('event_desc')}</div>
            <InputField
              placeholder={t('placeholder_phone')}
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
              isInvalid={!isValid}
              helpMessage={t('input_phone')}
              invalidMessage={t('invalid_phone')}
              validMessage={t('correct_phone')}
              maxLength={11}
            />
          </div>
          <span className='notice-event'>{t('event_notice')}</span>
          <div className='button-area'>
            <Button width={100} variant='secondary' onClick={handleClose}>
              {t('close')}
            </Button>
            <Button width={100} disabled={!isValid} onClick={() => handleSubmit(phoneNumber)}>
              {t('enter')}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default EventModal
