import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LetterWriteWrapper = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.grey[13]};
`
export const LetterWriteStyle = css`
  padding: 0 16px;
  color: ${colors.grey[13]};

  .input-to,
  .input-from {
    position: relative;

    .input-label {
      position: absolute;
      font-size: 16px;
      font-weight: 900;
      color: ${colors.grey[13]};
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
