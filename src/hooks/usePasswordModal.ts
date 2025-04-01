import useModal from '#/hooks/useModal'
import { useCallback, useState } from 'react'

export default function usePasswordModal() {
  // modal state
  const { isOpen, openModal, closeModal } = useModal()

  // password
  const [password, setPassword] = useState('')
  const initializePassword = useCallback(setPassword.bind(null, ''), [])
  const onPasswordChange = useCallback((val: string) => setPassword(val), [])

  return {
    isOpen,
    openModal,
    closeModal,
    password,
    initializePassword,
    onPasswordChange,
  }
}
