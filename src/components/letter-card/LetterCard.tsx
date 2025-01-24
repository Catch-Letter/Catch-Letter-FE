import { LetterCardStyle } from '#/components/letter-card/LetterCard.styles'
import Card, { CardProps } from '#/shared/ui/card/Card'

type CardType = 'violet' | 'pink' | 'green' | 'blue' | 'grey'

export interface LetterCardProps extends CardProps {
  type: CardType
}
const LetterCard = ({ type, ...props }: LetterCardProps) => {
  return <Card {...props} css={LetterCardStyle({ type })} />
}

export default LetterCard
