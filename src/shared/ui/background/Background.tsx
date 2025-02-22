import { backgroundStyle, zigzagLine } from './Background.styles'
import { colors } from '#/styles/color'

interface BackgroundProps {
  color?: keyof typeof colors
  animated?: boolean
  gradientType?: 'default' | 'blueGradient' | 'halfGradient'
}

const getStroke = (gradientType: BackgroundProps['gradientType']) => {
  if (gradientType === 'blueGradient') {
    return 'url(#blueGradientStroke)'
  }
  if (gradientType === 'halfGradient') {
    return 'url(#halfGradientStroke)'
  }
  return 'rgba(255, 255, 255, 0.2)'
}

const Background = ({ color, animated = false, gradientType = 'default' }: BackgroundProps) => {
  return (
    <div css={backgroundStyle(color)}>
      <svg
        css={zigzagLine(animated)}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 500'
        preserveAspectRatio='xMidYMid slice'
      >
        <defs>
          <linearGradient id='blueGradientStroke' gradientTransform='rotate(110)'>
            <stop offset='2.99%' stopColor='rgba(31, 31, 31, 0.8)' />
            <stop offset='44.84%' stopColor='rgba(49, 74, 107, 0.8)' />
            <stop offset='102.24%' stopColor='rgba(96, 145, 209, 0.8)' />
          </linearGradient>
        </defs>

        <defs>
          <linearGradient id='halfGradientStroke' gradientTransform='rotate(110)'>
            <stop offset='0' stopColor='rgba(255, 255, 255, 0.1)' />
            <stop offset='50%' stopColor='rgba(0, 0, 0, 0)' />
          </linearGradient>
        </defs>

        <path
          d='M500 -60 L20 240 L680 80 L20 400 L430 320 L40 600'
          stroke={getStroke(gradientType)}
          fill='none'
          strokeWidth='72'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default Background
