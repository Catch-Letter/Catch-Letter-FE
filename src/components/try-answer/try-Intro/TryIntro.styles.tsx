import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const TryIntroStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(241, 241, 242, 0.9);
  border: 1.5px solid ${colors.grey[2]};
  border-radius: 24px;
`

export const TryIntroWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  img {
    margin-bottom: 12px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 140%;
    color: ${colors.grey[12]};
    letter-spacing: -0.45px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    color: ${colors.grey[12]};

    letter-spacing: -0.45px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.blue[600]};
    margin-top: 8px;
  }
`
