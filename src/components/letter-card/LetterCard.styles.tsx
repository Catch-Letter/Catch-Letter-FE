import { css } from '@emotion/react'
import { colors } from '#/styles/color'
import { LetterCardProps } from '#/components/letter-card/LetterCard'

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

export const LetterCardStyle = ({ type, background }: LetterCardProps) => css`
  background: ${background || backgroundColors[type]};
  border: 1.5px solid ${borderColors[type]};
`
