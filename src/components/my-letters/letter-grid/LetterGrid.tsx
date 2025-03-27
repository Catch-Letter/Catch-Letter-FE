import LetterCard from '../letter-card/LetterCard'
import { LetterData } from '#/types/myLetters'

interface LetterGridProps {
  pages: { data: LetterData[] }[]
  shakingCard: number | null
  uuid: string
  onLoad?: (id: number, loaded: boolean) => void
}

const LetterGrid = ({ pages, shakingCard, uuid, onLoad }: LetterGridProps) => {
  return (
    <>
      {pages.flatMap((page, pageIndex) =>
        page.data.map((letter) => (
          <LetterCard
            key={`${letter.id}_${pageIndex}`}
            letter={letter}
            shakingCard={shakingCard}
            uuid={uuid}
            onLoad={onLoad}
          />
        ))
      )}
    </>
  )
}
export default LetterGrid
