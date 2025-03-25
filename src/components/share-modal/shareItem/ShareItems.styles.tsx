import { css } from '@emotion/react'

export const ShareItemStyle = css`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  li {
    margin: 30px 0;
    img {
      width: 42px;
      height: 42px;
      display: block;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
