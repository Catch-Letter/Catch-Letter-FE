import { useEffect, useState } from 'react'
import { extractColor } from '#/types/extractColor'
import { LetterData } from '#/types/myLetters'
import { LetterCardStyle } from './LetterCard.styles'
import Letter from '#/components/my-letters/letter/Letter'
import { SkeletonCard } from '#/components/my-letters/skeleton-card'

interface LetterCardProps {
  letter: LetterData
  shakingCard: number | null
  uuid: string
  onLoad?: (id: number, loaded: boolean) => void
}

// 썸네일 로딩 상태를 위한 LetterCard 컴포넌트
const LetterCard = ({ letter, shakingCard, uuid, onLoad }: LetterCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const thumbnailUrl = letter.thumbnail_url ?? ''
  const backgroundColor = extractColor(letter.letter.etc)

  useEffect(() => {
    if (!thumbnailUrl) {
      setIsLoaded(true)
      onLoad?.(letter.id, true)
      return
    }

    const img = new Image()
    img.src = thumbnailUrl
    img.onload = () => {
      setIsLoaded(true)
      onLoad?.(letter.id, true)
    }

    img.onerror = () => {
      setIsLoaded(true)
      onLoad?.(letter.id, false)
    }
  }, [thumbnailUrl])

  return (
    <div css={LetterCardStyle(shakingCard, letter.id, backgroundColor, thumbnailUrl)}>
      {!isLoaded ? <SkeletonCard /> : <Letter letter={letter} uuid={uuid} />}
    </div>
  )
}

export default LetterCard
