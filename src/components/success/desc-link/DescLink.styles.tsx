import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const DescLinkStyle = css`
  display: flex;
  flex-direction: column;
  width: 375px;
  color: #fff;
  padding: 44px 60px 0 35px;
  box-sizing: border-box;

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .link {
    font-weight: 700;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 260px;
    white-space: pre-line;
  }

  .btn-copy {
    align-self: flex-start;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #000;
    color: ${colors.neonGreen[6]};
    font-size: 13px;
    border: none;
    width: 67px;

    &:hover {
      cursor: pointer;
      background: ${colors.grey[12]};
    }
  }
`
