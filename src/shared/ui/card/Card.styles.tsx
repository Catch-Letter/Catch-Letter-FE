import { css } from '@emotion/react'
import { CardProps } from '#/shared/ui/card/Card'
import { colors } from '#/styles/color'

export const CardStyle = ({ background, height, width }: CardProps) => css`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-sizing: border-box;
  width: ${width || '100%'};
  height: ${height || '473px'};
  padding: 25px 21px;

  background: ${background || colors.grey[3]};
  border: 1.5px solid #fff;
`
