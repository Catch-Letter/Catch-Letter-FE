import { css } from '@emotion/react'

export const headerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid red;
  height: 48px;
  padding: 12px 16px;

  .left {
    margin-right: auto;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .right {
    margin-left: auto;
  }
`
