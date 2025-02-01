// TODO : label 연결, button disable 연결

import { Input, Modal, ModalProps } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { passwordModalStyles } from './PasswordModal.styles'
import { FC, MouseEvent } from 'react'

interface Props extends Pick<ModalProps, 'isOpen'> {
  onClickButton: (e: MouseEvent) => void
}

const PasswordModal: FC<Props> = ({ isOpen, onClickButton }) => {
  return (
    <Modal isOpen={isOpen}>
      <form css={passwordModalStyles}>
        <img src='/lock.png' alt='lock' width={32} height={32} />
        <label htmlFor='#'>우체통 비밀번호 입력</label>
        <Input />
        <Button width={99} onClick={onClickButton}>
          완료
        </Button>
      </form>
    </Modal>
  )
}

export default PasswordModal
