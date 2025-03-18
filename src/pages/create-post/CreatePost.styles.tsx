import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreatePostStyle = css`
  height: 100%;

  .title-area {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    gap: 12px;
    margin-bottom: 54px;
  }

  .title {
    font-size: 34px;
    font-weight: 700;

    @media (width<768px) {
      font-size: 32px;
    }
  }

  .sub-title {
    font-size: 18px;
    font-weight: 500;

    @media (width<768px) {
      font-size: 16px;
    }
  }

  .create-btn {
    margin-top: 20%;

    @media (width>768px) {
      width: 50%;
    }
  }
`

export const CreateWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`
