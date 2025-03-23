import { css } from '@emotion/react'

export const ShareItemStyle = css`
  display: flex;
  gap: 20px;

  li {
    margin: 30px 0;
    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
