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
    position: relative;
    box-sizing: border-box;
    padding: 4px;
    width: 100%;
    border-radius: 8px;
    align-items: center;
    height: 36px;
    border: 1px solid ${colors.white};

    .url {
      font-size: 14px;
    }

    .btn-copy {
      position: absolute;
      right: 0px;
      top: 4px;
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

  .desc {
    margin-left: 5px;
    font-size: 12px;
    color: ${colors.neonGreen[6]};
  }
`
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
  }
`
