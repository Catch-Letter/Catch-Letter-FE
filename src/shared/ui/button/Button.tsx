import { buttonStyle } from '#/shared/ui/button/Button.styles'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: ButtonVariant
  width?: number | string
  full?: boolean
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  full = false,
  width = 245,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button css={buttonStyle({ variant, width, full })} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
