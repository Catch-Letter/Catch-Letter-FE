import { css } from '@emotion/react'
import { CardProps } from '#/shared/ui/card/Card'
import { colors } from '#/styles/color'

const backgroundColors = {
  violet: colors.violet[3],
  blue: colors.blue[200],
  pink: colors.pink[3],
  green: colors.green[3],
  grey: colors.grey[3],
}

const borderColors = {
  violet: colors.violet[2],
  blue: colors.blue[100],
  pink: colors.pink[2],
  green: colors.green[2],
  grey: colors.grey[2],
}

export const CardStyle = ({ type, height }: CardProps) => css`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-sizing: border-box;
  width: 100%;
  height: ${height || '473px'};
  padding: 25px 21px;

  background: ${backgroundColors[type] || backgroundColors.grey};
  border: 1.5px solid ${borderColors[type] || borderColors.grey};
`
