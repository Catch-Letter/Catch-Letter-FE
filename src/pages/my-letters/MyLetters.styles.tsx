import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const MyLettersWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey[11]};
`

export const TitleStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BadgeStyle = css`
  text-align: center;
  background-color: ${colors.grey[13]};
  padding: 4px 8px;
  border-radius: 100px;
  font-size: 13px;
  color: ${colors.neonGreen[5]};
`

export const GridContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 10px 16px;
  overflow-y: auto;
`
