import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const SkeletonCardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 16px;
  background-color: ${colors.grey[12]};
  background-size: 200% 100%;
`
