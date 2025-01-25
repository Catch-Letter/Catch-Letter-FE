import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const WriteDescStyle = css`
  padding: 0 30px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey[7]};
  margin-top: 16px;
  margin: 16px auto 0;

  .title {
    color: ${colors.neonGreen[4]};
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }
`
