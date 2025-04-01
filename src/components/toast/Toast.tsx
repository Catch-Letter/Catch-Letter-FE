import { ToastContainer, ToastStyle } from '#/components/toast/Toast.styles'
import { useToastStore } from '#/store/toastStore'
import { colors } from '#/styles/color'
import { FiCheckCircle } from 'react-icons/fi'
import { FiXCircle } from 'react-icons/fi'
import { createPortal } from 'react-dom'

interface ToastProps {
  position?: 'top' | 'bottom'
  location?: 'page' | 'modal'
  offset?: string
}

const Toast = ({ position = 'bottom', offset = '200px', location = 'page' }: ToastProps) => {
  const { toast } = useToastStore()

  if (!toast || toast.location !== location) return null

  return createPortal(
    <div css={ToastContainer(position, offset)}>
      <div css={ToastStyle}>
        {toast.type === 'success' ? (
          <FiCheckCircle color={colors.success} />
        ) : (
          <FiXCircle color={colors.error} />
        )}
        <div>{toast.message}</div>
      </div>
    </div>,
    document.body
  )
}

export default Toast
