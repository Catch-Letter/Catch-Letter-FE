import { LetterCardStyle } from './LetterCard.styles'
import Card, { CardProps } from '#/shared/ui/card/Card'
import { ColorType } from '#/store/letterCreateStore'

export interface LetterCardProps extends CardProps {
  type: ColorType
}
const LetterCard = ({ type, ...props }: LetterCardProps) => {
  return <Card {...props} css={LetterCardStyle({ type })} />
}

export default LetterCard
