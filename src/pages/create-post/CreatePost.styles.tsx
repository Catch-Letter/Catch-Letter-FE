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
    font-size: 32px;
    font-weight: 700;
  }

  .sub-title {
    font-size: 16px;
    font-weight: 500;
  }

  .create-btn {
    margin-top: 104px;
  }
`

export const CreateWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`
