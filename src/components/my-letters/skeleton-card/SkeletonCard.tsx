import { DotLoader } from '#/shared/ui'
import { colors } from '#/styles/color'
import { SkeletonCardStyle } from './SkeletionCard.styles'

const SkeletonCard = () => {
  return (
    <div css={SkeletonCardStyle}>
      <DotLoader color={colors.grey[9]} />
    </div>
  )
}

export default SkeletonCard
