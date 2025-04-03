import LetterCard from '../letter-card/LetterCard'
import { LetterGridProps } from '#/types/myLetters'

const LetterGrid = ({ pages, shakingCard, uuid, onLoad }: LetterGridProps) => {
  const letters = pages.flatMap((page) => page.data)

  return (
    <>
      {letters.map((letter) => (
        <LetterCard
          key={letter.id}
          letter={letter}
          shakingCard={shakingCard}
          uuid={uuid}
          onLoad={onLoad}
        />
      ))}
    </>
  )
}
export default LetterGrid
