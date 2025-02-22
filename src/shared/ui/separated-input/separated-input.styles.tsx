import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const separatedInputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const separateInputs = css`
  display: flex;
  gap: 5px;
`

export const separateInput = css`
  width: 30px;
  text-align: center;
  padding: 8px;
  border: none;
  border: 1px solid black;
  font-size: 28px;
  border-radius: 5px;
  background-color: ${colors.grey[1]};
`
export const labels = css`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.grey[1]};
`
