import { useNavigate } from 'react-router'
import { lock } from '#/assets/create'
import { LockLetterStyle } from './Letter.styles'
import { useTranslation } from 'react-i18next'
import { LetterData } from '#/types/myLetters'

interface LettersProps {
  letter: LetterData
  uuid: string
}

const Letter = ({ letter, uuid }: LettersProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleNavigate = () => {
    const path = letter.is_correct
      ? `/checkAnswer/${uuid}/${letter.id}`
      : `/tryAnswer/${uuid}/${letter.id}`

    navigate(path, {
      state: { answerLength: letter.answer_length },
    })
  }

  return letter.is_correct ? (
    <div onClick={handleNavigate} style={{ width: '100%', height: '100%' }} />
  ) : (
    <div css={LockLetterStyle} onClick={handleNavigate}>
      <img src={lock} alt='lock-icon' />
      <div className='lock-text' dangerouslySetInnerHTML={{ __html: t('myLetters.lockDesc') }} />
    </div>
  )
}

export default Letter
