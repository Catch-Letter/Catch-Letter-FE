import { colors } from '#/styles/color'
import { css } from '@emotion/react'
import { ButtonProps } from './Button'

export const buttonStyle = ({ variant, width, full }: ButtonProps) => css`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: ${full ? '100%' : typeof width === 'number' ? `${width}px` : width};
  background-color: ${variant === 'primary' ? colors.neonGreen[5] : colors.grey[8]};
  color: ${variant === 'primary' ? colors.grey[13] : colors.grey[1]};
  font-size: 18px;
  font-weight: 700;
  font-family: 'NotoSansKR';
  opacity: 1;
  transform: translateZ(0);
  will-change: opacity, transform;

  &:hover:not(:disabled) {
    background-color: ${variant === 'primary' ? colors.neonGreen[8] : colors.grey[9]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
