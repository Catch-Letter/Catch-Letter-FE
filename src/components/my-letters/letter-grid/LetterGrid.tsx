import { Letter } from '#/types/myLetters'
import { Letters } from '#/components/my-letters/letters'
import { extractColor } from '#/types/extractColor'
import { LetterCardStyle } from './LetterGrid.styles'

interface Props {
  pages: { data: Letter[] }[]
  shakingCard: number | null
  uuid: string
}

const LetterGrid = ({ pages, shakingCard, uuid }: Props) => {
  return (
    <>
      {pages.flatMap((page, pageIndex) =>
        page.data.map((letter) => (
          <div
            key={`${letter.id}_${pageIndex}`}
            css={LetterCardStyle(
              shakingCard,
              letter.id,
              extractColor(letter.letter.etc),
              letter.thumbnail_url ?? ''
            )}
          >
            <Letters letter={letter} uuid={uuid} />
          </div>
        ))
      )}
    </>
  )
}

export default LetterGrid
