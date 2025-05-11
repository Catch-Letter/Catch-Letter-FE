import { EventModalContainer, EventModalWrapper } from '#/components/event-modal/EvnetModal.styles'
import { Button, InputField, Modal, ModalProps } from '#/shared/ui'
import { isValidPhoneNumber } from '#/shared/utils/eventValidation'
import { useState } from 'react'

export type ShareModalProps = Omit<ModalProps, 'children'> & {
  onSubmit: (phoneNumber: string) => void
  onClose: () => void
}

const EventModal = ({ isOpen, onSubmit, onClose }: ShareModalProps) => {
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
          <div className='title'>이벤트 도착 🎁</div>
          <img src='/src/assets/event.png' alt='event' width={230} height={235} />
          <div className='event-font'>
            퀴즈내고 <span className='font-neon'>커피</span>도 받아가세요 ✉️✨
          </div>
          <div className='desc'>
            <div className='desc-message'>
              이벤트 기간 동안 퀴즈를 보내주신 분들 중 추첨을 통해 커피 기프티콘을 보내드려요!
            </div>
            <InputField
              placeholder='커피 받으실 번호를 입력해주세요 ☕️'
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
              isInvalid={!isValid}
              helpMessage='전화번호를 입력해주세요. (- 제외)'
              invalidMessage='올바른 전화번호를 입력해주세요. (- 제외)'
              validMessage='올바른 전화번호 입니다.'
              maxLength={11}
            />
          </div>
          <div className='button-area'>
            <Button width={100} variant='secondary' onClick={handleClose}>
              닫기
            </Button>
            <Button width={100} disabled={!isValid}>
              참여
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default EventModal
