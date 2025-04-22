import { useEffect, useState } from 'react'
import { extractColor } from '#/types/extractColor'
import { LetterCardStyle } from './LetterCard.styles'
import Letter from '#/components/my-letters/letter/Letter'
import { SkeletonCard } from '#/components/my-letters/skeleton-card'
import { LetterCardProps } from '#/types/myLetters'

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

    const handleLoad = () => setIsLoaded(true)
    const handleError = () => setIsLoaded(true)

    img.onload = handleLoad
    img.onerror = handleError

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [thumbnailUrl])

  if (!isLoaded) {
    return <SkeletonCard />
  }

  return (
    <div css={LetterCardStyle(shakingCard, letter.id, backgroundColor, thumbnailUrl)}>
      <Letter letter={letter} uuid={uuid} backgroundColor={backgroundColor} />
    </div>
  )
}

export default LetterCard
