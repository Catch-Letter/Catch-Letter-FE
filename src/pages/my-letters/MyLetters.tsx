import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { BackHeader } from '#/components'
import { fetchMyLetters } from '#/api/myLetters'
import {
  MyLettersWrapper,
  TitleStyle,
  BadgeStyle,
  GridContainer,
  LetterCardStyle,
} from './MyLetters.styles'
import { Letter } from '#/types/myLetters'

const MyLetters = () => {
  const [shakingCard, setShakingCard] = useState<number | null>(null)
  const [letters, setLetters] = useState<Letter[]>([])
  const navigate = useNavigate()
  const { uuid } = useParams()

  useEffect(() => {
    const getLetters = async () => {
      if (!uuid) {
        console.error('uuid 에러')
        return
      }

      try {
        const response = await fetchMyLetters(uuid, 15)
        setLetters(response.data)
      } catch (error) {
        console.error('편지 데이터를 불러오지 못했습니다.', error)
      }
    }

    getLetters()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const incorrectCards = letters.filter((letter) => !letter.is_correct)

      if (incorrectCards.length > 0) {
        const randomCard = incorrectCards[Math.floor(Math.random() * incorrectCards.length)]
        setShakingCard((prev) => (prev === randomCard.id ? null : randomCard.id))

        setTimeout(() => {
          setShakingCard(null)
        }, 500)
      }
    }, 1600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div css={MyLettersWrapper}>
      <BackHeader
        Center={
          <div css={TitleStyle}>
            편지함
            <span css={BadgeStyle}>{letters.length}</span>
          </div>
        }
      />

      <div css={GridContainer}>
        {letters.map((letter) => (
          <div
            key={letter.id}
            css={LetterCardStyle(shakingCard, letter.id)}
            onClick={() => navigate('/tryAnswer')}
          >
            {!letter.is_correct && (
              <div className='lock-letter'>
                <img src='../public/lock.png' alt='잠금 아이콘' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyLetters
