import { LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Button } from '#/shared/ui/button'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useLocation, useNavigate } from 'react-router'
import { ChoiceLetterStyle } from './ChoiceLetter.styles'

const ChoiceLetter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const letterInfo = location.state
  const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()

  const handlePrev = () => {
    navigate('/writeletter', {
      state: {
        to: letterInfo.to,
        content: letterInfo.content,
        from: letterInfo.from,
      },
    })
  }

  return (
    <div css={ChoiceLetterStyle}>
      <div className='content'>
        <LetterCard type={selectedColor}>
          <LetterContent
            to={letterInfo.to}
            content={letterInfo.content}
            from={letterInfo.from}
            color={selectedColor}
            pattern={selectedPattern}
            font={selectedFont}
          />
        </LetterCard>
      </div>
      <Tab />
      <div className='button-area'>
        <Button variant='secondary' width={82} onClick={handlePrev}>
          이전
        </Button>
        <Button width={245}>편지 보내기</Button>
      </div>
    </div>
  )
}

export default ChoiceLetter
