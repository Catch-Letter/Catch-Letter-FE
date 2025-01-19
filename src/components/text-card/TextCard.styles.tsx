import { CardProps } from '#/components/text-card/TextCard'
import { css } from '@emotion/react'

export const CardStyles = ({ color, rounded }: CardProps) => css`
  display: flex;
  flex-direction: column;
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
`
