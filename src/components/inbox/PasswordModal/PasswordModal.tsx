// ToDO : 모달 열릴 때 input에 focus
import { lock } from '#/assets/create'
import { Modal, ModalProps, SeparatedInput } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { SeparatedInputProps } from '#/shared/ui/separated-input/separated-input'
import { FC, MouseEventHandler } from 'react'
import { passwordModalStyles } from './PasswordModal.styles'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Modal isOpen={isOpen} onClickOverlay={onClickOverlay}>
      <form css={passwordModalStyles}>
        <img src={lock} alt='lock' width={32} height={32} />
        <SeparatedInput
          label={t('enterPostPassword')}
          length={5}
          type='password'
          inputMode='numeric'
          pattern='[0-9]*'
          value={password}
          onChangeValue={onChangeValue}
        />
        <Button
          width={99}
          onClick={onClickConfirmButton}
          disabled={password.length < 5}
          type='button'
        >
          {t('confirm')}
        </Button>
      </form>
    </Modal>
  )
}

export default PasswordModal
