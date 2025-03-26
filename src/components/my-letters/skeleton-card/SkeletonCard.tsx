import { DotLoader } from '#/shared/ui'
import { colors } from '#/styles/color'
import { SkeletonCardStyle } from './SkeletionCard.styles'

const SkeletonCard = ({ count = 6 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} css={SkeletonCardStyle}>
          <DotLoader color={colors.grey[9]} />
        </div>
      ))}
    </>
  )
}

export default SkeletonCard
