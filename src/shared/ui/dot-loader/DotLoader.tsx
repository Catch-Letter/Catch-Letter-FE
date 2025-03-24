import { wrapperStyle, dotStyle } from './DotLoader.style'

interface DotLoaderProps {
  size: number
  color: string
}

const DotLoader = ({ size, color }: DotLoaderProps) => {
  return (
    <div css={wrapperStyle(size)}>
      {[0, 0.2, 0.4].map((delay, idx) => (
        <div key={idx} css={dotStyle(delay, size, color)} />
      ))}
    </div>
  )
}

export default DotLoader
