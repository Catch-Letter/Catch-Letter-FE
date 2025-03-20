import { useCallback, useState } from 'react'

export default function usePasswordModal() {
  // modal state
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

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
