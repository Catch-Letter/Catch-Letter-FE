import { SkeletonCardProps } from '#/shared/ui/skeleton/skeleton-square/skeleton-square'
import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

export const SkeletonAnimation = keyframes`
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
`

export const SkeletonSquareStyles = ({ width, height }: SkeletonCardProps) => css`
  display: inline-block;
  width: ${width || '100%'};
  height: ${height || '100%'};
  background-color: ${colors.grey[12]};
  background-image: linear-gradient(
    90deg,
    ${colors.grey[12]} 25%,
    ${colors.grey[10]} 50%,
    ${colors.grey[12]} 75%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;
  overflow: hidden;
  animation: ${SkeletonAnimation} 1s infinite linear;
  border-radius: 10px;
`
