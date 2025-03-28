import LetterCard from '../letter-card/LetterCard'
import { LetterData } from '#/types/myLetters'

interface LetterGridProps {
  pages: { data: LetterData[] }[]
  shakingCard: number | null
  uuid: string
  onLoad?: (id: number, loaded: boolean) => void
}

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
