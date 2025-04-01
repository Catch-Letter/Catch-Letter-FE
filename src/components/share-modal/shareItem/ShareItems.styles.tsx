import { css } from '@emotion/react'

export const ShareItemStyle = css`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  li {
    margin: 40px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
