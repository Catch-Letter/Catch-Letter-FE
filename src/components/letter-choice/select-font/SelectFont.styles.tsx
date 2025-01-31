import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SelectFontStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    align-self: stretch;
    justify-content: center;
  }
`

export const FontItem = (fontStyle: string) => css`
  color: ${colors.white};
  cursor: pointer;
  font-size: ${fontStyle === 'NotoSansKR' ? '18px' : '20px'};
  font-weight: 400;
  font-family: ${fontStyle};

  &.active {
    color: ${colors.neonGreen[5]};
    font-size: ${fontStyle === 'NotoSansKR' ? '20px' : '24px'};
    font-weight: 700;
  }
`
