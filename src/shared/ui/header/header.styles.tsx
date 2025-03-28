import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const headerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 16px;
  color: ${colors.grey[1]};
  box-sizing: border-box;

  .left {
    margin-right: auto;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  }

  .right {
    margin-left: auto;
  }
`
