import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const WriteDescStyle = css`
  padding: 0 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey[7]};
  margin-top: 16px;

  .title {
    color: ${colors.neonGreen[4]};
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }
`
