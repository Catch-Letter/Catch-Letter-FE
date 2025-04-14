import { useNavigate } from 'react-router'
import { lock } from '#/assets/create'
import { LockLetterStyle } from './Letter.styles'
import { useTranslation } from 'react-i18next'
import { LetterData } from '#/types/myLetters'
import { extractColorToString } from '#/types/extractColor'

interface LettersProps {
  letter: LetterData
  uuid: string
  backgroundColor: string
}

const Letter = ({ letter, uuid, backgroundColor }: LettersProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleNavigate = () => {
    const path = letter.is_correct
      ? `/checkAnswer/${uuid}/${letter.id}`
      : `/tryAnswer/${uuid}/${letter.id}`

    navigate(path, {
      state: {
        answerLength: letter.answer_length,
        letterColor: extractColorToString(letter.letter.etc),
      },
    })
  }

  return letter.is_correct ? (
    <div onClick={handleNavigate} style={{ width: '100%', height: '100%' }} />
  ) : (
    <div css={LockLetterStyle(backgroundColor)} onClick={handleNavigate}>
      <img src={lock} alt='lock-icon' />
      <div className='lock-text'>
        {(t('myLetters.lockDesc', { returnObjects: true }) as string[]).map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Letter
