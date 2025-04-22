import { LetterCardStyle } from './LetterCard.styles'
import Card, { CardProps } from '#/shared/ui/card/Card'
import { ColorType } from '#/types/letterStyle'

export interface LetterCardProps extends CardProps {
  type: ColorType
  background?: string
}
const LetterCard = ({ type, background, ...props }: LetterCardProps) => {
  return <Card {...props} background={background} css={LetterCardStyle({ type, background })} />
}

export default LetterCard
