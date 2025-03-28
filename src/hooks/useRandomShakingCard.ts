import { LetterData } from '#/types/myLetters'
import { useState, useEffect } from 'react'

// 랜덤으로 !is_correct인 카드 흔들기
export const useRandomShakingCard = (letters: LetterData[] = []) => {
  const [shakingCard, setShakingCard] = useState<number | null>(null)

  useEffect(() => {
    const incorrectCards = letters.filter((l) => !l.is_correct)
    if (incorrectCards.length === 0) return

    const interval = setInterval(() => {
      const random = incorrectCards[Math.floor(Math.random() * incorrectCards.length)]
      setShakingCard((prev) => (prev === random.id ? null : random.id))

      setTimeout(() => setShakingCard(null), 500)
    }, 1600)

    return () => clearInterval(interval)
  }, [letters])

  return shakingCard
}
