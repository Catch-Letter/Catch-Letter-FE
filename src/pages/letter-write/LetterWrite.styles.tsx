import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LetterWriteWrapper = css`
  background-color: ${colors.grey[13]};
  display: flex;
  flex-direction: column;
`
export const LetterWriteStyle = css`
  padding: 16px;
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
    margin: 0 auto;
    gap: 12px;
  }

  .button-area {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
  }

  @media (width>= 700px) {
    .content {
      width: 90%;
    }

    .button-area {
      width: 100%;
      button {
        width: 30%;
      }
    }

    .desc {
      margin-left: 28%;
    }
  }
`
