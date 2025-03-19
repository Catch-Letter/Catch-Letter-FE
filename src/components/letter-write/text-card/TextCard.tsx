import { CardStyles } from './TextCard.styles'
import { ComponentProps } from 'react'

export interface CardProps extends ComponentProps<'textarea'> {
  color?: string
  border?: boolean
  height?: string
  rounded?: boolean
}

const TextCard = ({ color, border, height, rounded, value, onChange, ...props }: CardProps) => {
  return (
    <textarea
      css={CardStyles({ color, border, rounded, height })}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default TextCard
