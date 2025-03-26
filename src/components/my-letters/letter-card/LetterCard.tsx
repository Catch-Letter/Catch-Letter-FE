import { useEffect, useState } from 'react'
import { DotLoader } from '#/shared/ui'
import { extractColor } from '#/types/extractColor'
import { Letter } from '#/types/myLetters'
import { LetterCardStyle } from './LetterCard.styles'
import { Letters } from '#/components/my-letters/letters'
import { colors } from '#/styles/color'

interface LetterCardProps {
  letter: Letter
  shakingCard: number | null
  uuid: string
}

// 썸네일 로딩 상태를 위한 LetterCard 컴포넌트
const LetterCard = ({ letter, shakingCard, uuid }: LetterCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const thumbnailUrl = letter.thumbnail_url ?? ''
  const backgroundColor = extractColor(letter.letter.etc)

  useEffect(() => {
    if (!thumbnailUrl) {
      setIsLoaded(true)
      return
    }

    const img = new Image()
    img.src = thumbnailUrl
    img.onload = () => setIsLoaded(true)
  }, [thumbnailUrl])

  return (
    <div
      css={LetterCardStyle(shakingCard, letter.id, backgroundColor, isLoaded ? thumbnailUrl : '')}
    >
      {!isLoaded ? (
        <DotLoader backgroundColor='none' color='rgba(255, 255, 255, 0.6)' />
      ) : (
        <Letters letter={letter} uuid={uuid} />
      )}
    </div>
  )
}

export default LetterCard
