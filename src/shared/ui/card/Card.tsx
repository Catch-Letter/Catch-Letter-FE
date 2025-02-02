import { ReactNode } from 'react'
import { CardStyle } from './Card.styles'
import { Interpolation, Theme } from '@emotion/react'

export interface CardProps {
  children?: ReactNode
  background?: string
  height?: string
  width?: string
  css?: Interpolation<Theme>
}

const Card = ({ background, height, width, children, ...props }: CardProps) => {
  return (
    <div css={CardStyle({ height, width, background })} {...props}>
      {children}
    </div>
  )
}

export default Card
