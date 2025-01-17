import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const textSectionStyles = css`
  background-color: transparent;
  color: ${colors.grey[1]};
  margin-top: 24px;
  margin-left: 26px;

  .title1 {
    font-size: 18px;
    font-weight: 400;
  }

  .value1 {
    font-size: 56px;
    font-weight: 900;
  }

  .title2 {
    font-size: 14px;
    font-weight: 400;
  }

  .value2 {
    font-size: 32px;
    font-weight: 900;
  }
`
