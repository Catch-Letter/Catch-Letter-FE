import { CardProps } from '#/components/text-card/TextCard'
import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CardStyles = ({ color, rounded }: CardProps) => css`
  display: flex;
  flex-direction: column;
  font-family: 'NotoSansKR', sans-serif;
  color: ${colors.grey[13]};
  width: 100%;
  height: 420px;
  padding: 18px 14px;
  box-sizing: border-box;
  background-color: ${color};
  border-radius: ${rounded ? '24px' : '8px'};
  font-size: 16px;
  font-weight: 500;
  border: none;
  resize: none;

  &::placeholder {
    color: ${colors.grey[7]};
    font-size: 16px;
  }

  &:focus {
    caret-color: ${colors.neonGreen[6]};
    outline: none;
  }
`
