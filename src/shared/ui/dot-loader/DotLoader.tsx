import { colors } from '#/styles/color'
import { wrapperStyle, dotStyle } from './DotLoader.style'

interface DotLoaderProps {
  size?: number
  color?: string
  backgroundColor?: string
}

const DotLoader = ({ size = 8, color = colors.white, backgroundColor }: DotLoaderProps) => {
  return (
    <div css={wrapperStyle(size, backgroundColor)}>
      {[0, 0.2, 0.4].map((delay, idx) => (
        <div key={idx} css={dotStyle(delay, size, color)} />
      ))}
    </div>
  )
}

export default DotLoader
