import { ReactNode } from 'react'
import { CardStyle } from './Card.styles'

type CardType = 'violet' | 'pink' | 'green' | 'blue' | 'grey'

export interface CardProps {
  type: CardType
  children?: ReactNode
  height?: string
}

const Card = ({ type, children }: CardProps) => {
  return <div css={CardStyle({ type })}>{children}</div>
}

export default Card
