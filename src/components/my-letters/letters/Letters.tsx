import { useNavigate } from 'react-router'
import { lock } from '#/assets/create'
import { LockLetterStyle } from './Letters.styles'
import { useTranslation } from 'react-i18next'
import { Letter } from '#/types/myLetters'

interface LettersProps {
  letter: Letter
  uuid: string
}

const Letters = ({ letter, uuid }: LettersProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <>
      {letter.is_correct ? (
        <div
          onClick={() =>
            navigate(`/checkAnswer/${uuid}/${letter.id}`, {
              state: { answerLength: letter.answer_length },
            })
          }
        />
      ) : (
        <div
          css={LockLetterStyle}
          onClick={() =>
            navigate(`/tryAnswer/${uuid}/${letter.id}`, {
              state: { answerLength: letter.answer_length },
            })
          }
        >
          <img src={lock} alt='lock-icon' />
          <div
            className='lock-text'
            dangerouslySetInnerHTML={{ __html: t('myLetters.lockDesc') }}
          ></div>
        </div>
      )}
    </>
  )
}

export default Letters
