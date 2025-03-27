import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const LockLetterStyle = (backgroundColor: string) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${backgroundColor};
  border-radius: 16px;
  gap: 12px;
  backdrop-filter: blur(1.2px);

  .lock-text {
    line-height: 140%;
    text-align: center;
    color: ${colors.grey[5]};
  }
`
