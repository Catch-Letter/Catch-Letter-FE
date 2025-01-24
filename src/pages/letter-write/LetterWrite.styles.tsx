import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LetterWriteStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.grey[13]};
  padding: 0 16px;

  .input-to,
  .input-from {
    position: relative;

    .input-label {
      position: absolute;
      font-size: 16px;
      font-weight: 900;
      top: 8px;
      left: 15px;
    }
  }

  .input-to {
    Input,
    Input::placeholder {
      text-indent: 30px;
    }
  }

  .input-from {
    Input,
    Input::placeholder {
      text-indent: 60px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .button-area {
    display: flex;
    gap: 12px;
    margin: 20px auto 0;
  }
`
