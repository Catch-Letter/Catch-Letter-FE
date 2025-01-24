import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreatePostStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colors.grey[13]};

  .title-area {
    display: flex;
    flex-direction: column;
    color: #fff;
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

  Button {
    margin-top: 104px;
  }
`
