import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LetterWriteStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.grey[13]};

  .header {
    background-color: pink;
    height: 48px;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0px 16px;
  }

  .explain-area {
    padding: 0 14px;
    font-size: 14px;
    font-weight: 500px;
    color: ${colors.grey[7]};

    .title {
      color: ${colors.neonGreen[4]};
    }

    ul {
      list-style: disc;
      padding-left: 20px;
    }
  }
`
