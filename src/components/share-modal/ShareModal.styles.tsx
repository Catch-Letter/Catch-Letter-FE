import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const ShareModalStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  background-color: ${colors.grey[13]};
  border-radius: 8px;
  border: 1px solid ${colors.grey[8]};
  align-items: center;
  padding: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  .area-copy {
    padding-right: 55px;
    display: flex;
    box-sizing: border-box;
    padding: 4px;
    width: 300px;
    border-radius: 8px;
    align-items: center;
    height: 36px;
    border: 1px solid ${colors.grey[5]};
    overflow: hidden;

    .url {
      flex-grow: 1;
      min-width: 0;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .btn-copy {
      flex-shrink: 0;
      margin-left: auto;
      display: flex;
      padding: 6px;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      background: #000;
      color: ${colors.neonGreen[6]};
      font-size: 12px;
      border: none;
      width: 50px;

      &:hover {
        cursor: pointer;
        background: ${colors.grey[12]};
      }
    }
  }
`

export const ShareModalContainer = css`
  margin: 14px 44px 40px;
  text-align: center;

  .desc {
    font-size: 12px;
    color: ${colors.neonGreen[6]};
  }
`
