import { css } from '@emotion/react'

export const DrawingWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const FormWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 16px;
  flex-grow: 1;
  min-height: 0;

  .canvas-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }
`
