import { buttonStyle } from '#/shared/ui/button/Button.styles'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: ButtonVariant
  width?: number
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  width = 245,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button css={buttonStyle({ variant, width })} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
