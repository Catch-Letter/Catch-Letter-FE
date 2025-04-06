import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LetterWriteWrapper = css`
  background-color: ${colors.grey[13]};
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const LetterWriteStyle = css`
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: ${colors.grey[13]};
  flex-grow: 1;

  .input-to,
  .input-from {
    position: relative;

    .input-label {
      position: absolute;
      font-size: 16px;
      font-weight: 900;
      color: ${colors.grey[13]};
      top: 10px;
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
    flex-grow: 1;
    gap: 12px;
  }

  .button-area {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;
  }
`
