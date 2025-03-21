// ToDO : 모달 열릴 때 input에 focus
import { lock } from '#/assets/create'
import { Modal, ModalProps, SeparatedInput } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { SeparatedInputProps } from '#/shared/ui/separated-input/separated-input'
import { FC, MouseEventHandler } from 'react'
import { passwordModalStyles } from './PasswordModal.styles'

type Props = Omit<ModalProps, 'children'> &
  Pick<SeparatedInputProps, 'onChangeValue'> & {
    password: string
    onClickConfirmButton: MouseEventHandler
  }

const PasswordModal: FC<Props> = ({
  isOpen,
  password,
  onChangeValue,
  onClickConfirmButton,
  onClickOverlay,
}) => {
  return (
    <Modal isOpen={isOpen} onClickOverlay={onClickOverlay}>
      <form css={passwordModalStyles}>
        <img src={lock} alt='lock' width={32} height={32} />
        <SeparatedInput
          label='우체통 비밀번호 입력'
          length={5}
          type='password'
          value={password}
          onChangeValue={onChangeValue}
        />
        <Button
          width={99}
          onClick={onClickConfirmButton}
          disabled={password.length < 5}
          type='button'
        >
          완료
        </Button>
      </form>
    </Modal>
  )
}

export default PasswordModal
