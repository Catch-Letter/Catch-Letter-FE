import { LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Button } from '#/shared/ui/button'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useLocation, useNavigate } from 'react-router'
import { ChoiceLetterStyle } from './ChoiceLetter.styles'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

const ChoiceLetter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const letterInfo = location.state
  const { selectedColor, selectedFont, selectedPattern, resetStore } = useLetterCreationStore()

  const tempId = '0292b67c-970e-445a-9ba0-2dd47ae7d95a'
  const letterId = 7

  const handleSendLetter = async (uuid: string, letterId: number) => {
    try {
      const res = await apiClient.post(API_ENDPOINTS.SEND_LETTER(uuid, letterId), {
        to: letterInfo.to,
        from: letterInfo.from,
        contents: letterInfo.content,
        etc: JSON.stringify({
          color: selectedColor,
          font: selectedFont,
          pattern: selectedPattern,
        }),
      })

      navigate('/sendsuccess')
      resetStore()
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

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
        <Button width={245} onClick={() => handleSendLetter(tempId, letterId)}>
          편지 보내기
        </Button>
      </div>
    </div>
  )
}

export default ChoiceLetter
