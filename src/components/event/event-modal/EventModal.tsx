import {
  EventModalContainer,
  EventModalWrapper,
} from '#/components/event/event-modal/EvnetModal.styles'
import { EventNotice } from '#/components/event/event-notice'
import { Button, InputField, Modal, ModalProps } from '#/shared/ui'
import { isValidPhoneNumber } from '#/shared/utils/eventValidation'
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
          <EventNotice startDate={startDate} endDate={endDate} />
          <div className='desc'>
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
