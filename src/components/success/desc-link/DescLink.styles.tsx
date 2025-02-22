import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const DescLinkStyle = css`
  display: flex;
  flex-direction: column;
  width: 280px;
  color: #fff;
  margin: 42px 67px 0 35px;
  box-sizing: border-box;
  flex-wrap: wrap;

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .link {
    font-weight: 700;
    margin-bottom: 8px;
    word-break: break-word;
  }

  .desc {
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 260px;
    white-space: pre-line;
  }

  .btn-copy {
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
