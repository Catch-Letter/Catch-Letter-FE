import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const DrawingIntroStyle = css`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 600px;
  padding: 192px 64px;
  border-radius: 8px;
  background: rgba(88, 89, 92, 0.9);
  border: 1.5px solid ${colors.grey[8]};
`

export const IntroWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 12px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.45px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.45px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.blue[600]};
    margin-top: 8px;
  }
`
