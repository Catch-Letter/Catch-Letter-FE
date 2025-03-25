import { ToastContainer, ToastStyle } from '#/components/toast/Toast.styles'
import { useToastStore } from '#/store/toastStore'
import { colors } from '#/styles/color'
import { FiCheckCircle } from 'react-icons/fi'
import { FiXCircle } from 'react-icons/fi'
import { createPortal } from 'react-dom'

const Toast = () => {
  const { toasts } = useToastStore()

  return createPortal(
    <div css={ToastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} css={ToastStyle}>
          {toast.type === 'success' ? (
            <FiCheckCircle color={colors.success} />
          ) : (
            <FiXCircle color={colors.error} />
          )}
          <div>{toast.message}</div>
        </div>
      ))}
    </div>,
    document.body
  )
}

export default Toast
