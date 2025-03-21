import { FC, MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { modalStyles } from './modal.styles'

export interface ModalProps {
  isOpen: boolean
  onClickOverlay?: MouseEventHandler
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClickOverlay, children }) => {
  if (!isOpen) return null

  const handleOnClickOverlay: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClickOverlay?.(e)
    }
  }

  return createPortal(
    <div css={modalStyles} className='overlay' onClick={handleOnClickOverlay}>
      {children}
    </div>,
    document.body
  )
}

export default Modal
