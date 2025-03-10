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
import { useTranslation } from 'react-i18next'
import lockImage from '#/assets/create/lock.png'
import { colors } from '#/styles/color'

const MyLetters = () => {
  const [shakingCard, setShakingCard] = useState<number | null>(null)
  const [letters, setLetters] = useState<Letter[]>([])
  const navigate = useNavigate()
  const { uuid } = useParams()
  const { t } = useTranslation()

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

  const extractColor = (etc: string | null | undefined) => {
    try {
      if (!etc) return colors.grey[9]

      const parsedEtc = JSON.parse(etc)
      const color = parsedEtc.color ?? 'grey'

      switch (color) {
        case 'green':
          return colors.green[6]
        case 'blue':
          return colors.blue[600]
        case 'pink':
          return colors.pink[6]
        case 'violet':
          return colors.violet[6]
        case 'grey':
        default:
          return colors.grey[9]
      }
    } catch (error) {
      console.error('JSON 파싱 애러', error)
      return colors.grey[11]
    }
  }

  return (
    <div css={MyLettersWrapper}>
      <BackHeader
        Center={
          <div css={TitleStyle}>
            {t('myLetters')}
            <span css={BadgeStyle}>{letters.length}</span>
          </div>
        }
      />

      <div css={GridContainer}>
        {letters.map((letter) => (
          <div
            key={letter.id}
            css={LetterCardStyle(
              shakingCard,
              letter.id,
              extractColor(letter.letter.etc),
              letter.thumbnail_url ?? lockImage
            )}
            onClick={() => navigate('/tryAnswer')}
          >
            {!letter.is_correct && (
              <div className='lock-letter'>
                <img src={lockImage} alt='lock-icon' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyLetters
