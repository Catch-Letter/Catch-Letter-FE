import { css } from '@emotion/react'
import { colors } from '#/styles/color'
import { ButtonProps } from '#/shared/ui/button/Button'

export const buttonStyle = ({ variant, width }: ButtonProps) => css`
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: ${width !== undefined && `${width}px`};
  background-color: ${variant === 'primary' ? colors.neonGreen[5] : colors.grey[8]};
  color: ${variant === 'primary' ? colors.grey[13] : colors.grey[1]};
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: ${variant === 'primary' ? colors.neonGreen[8] : colors.grey[9]};
  }

  &:hover:disabled {
    background-color: ${variant === 'primary' ? colors.neonGreen[5] : colors.grey[8]};
    cursor: not-allowed;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
