import { modalStyles } from './modal.styles'
import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface ModalProps {
  isOpen: boolean
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null

  return createPortal(
    <div css={modalStyles} className='overlay'>
      {children}
    </div>,
    document.body
  )
}

export default Modal
