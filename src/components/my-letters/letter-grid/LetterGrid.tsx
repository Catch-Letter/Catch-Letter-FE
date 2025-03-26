import LetterCard from '../letter-card/LetterCard'
import { Letter } from '#/types/myLetters'

interface LetterGridProps {
  pages: { data: Letter[] }[]
  shakingCard: number | null
  uuid: string
}

const LetterGrid = ({ pages, shakingCard, uuid }: LetterGridProps) => {
  return (
    <>
      {pages.flatMap((page, pageIndex) =>
        page.data.map((letter) => (
          <LetterCard
            key={`${letter.id}_${pageIndex}`}
            letter={letter}
            shakingCard={shakingCard}
            uuid={uuid}
          />
        ))
      )}
    </>
  )
}
export default LetterGrid
