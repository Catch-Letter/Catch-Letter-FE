import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const buttonStyle = (isKorean: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey[7]};
  color: ${colors.grey[1]};
  border: 1px solid #98999b;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  span {
    padding: 0 5px;
    font-weight: bold;
    color: ${isKorean ? colors.grey[1] : colors.grey[5]};
  }

  span + span {
    color: ${isKorean ? colors.grey[5] : colors.grey[1]};
  }

  &:hover {
    background-color: ${colors.grey[8]};
  }
`
