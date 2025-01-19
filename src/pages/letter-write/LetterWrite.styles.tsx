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
    padding: 16px;
  }

  .explain-area {
    padding: 0 30px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey[7]};

    .title {
      color: ${colors.neonGreen[4]};
    }

    ul {
      list-style: disc;
      padding-left: 30px;
    }
  }
`
