import { SkeletonSquareStyles } from '#/shared/ui/skeleton/skeleton-square/skeleton-square.styles'

export interface SkeletonCardProps {
  width?: string
  height?: string
}

const SkeltonSquare = ({ width, height }: SkeletonCardProps) => {
  return <div css={SkeletonSquareStyles({ width, height })}></div>
}

export default SkeltonSquare
