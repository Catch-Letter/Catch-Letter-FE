import { CardStyles } from '#/components/text-card/TextCard.styles'
import { ComponentProps } from 'react'

export interface CardProps extends ComponentProps<'textarea'> {
  color?: string
  border?: boolean
  rounded?: boolean
}

const Card = ({ color, border, rounded, value, onChange, ...props }: CardProps) => {
  return (
    <textarea
      css={CardStyles({ color, border, rounded })}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Card
