import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'
import { Button, InputField } from '#/shared/ui'
import { useState } from 'react'
import { DrawingWrapper, FormWrapper } from '#/pages/drawing/Drawing.styles'
import { useNavigate } from 'react-router'

const Drawing = () => {
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()
  const specialCharRegex = /[^a-zA-Z0-9가-힣]/
  const isInvalid = answer.trim().length > 8 || specialCharRegex.test(answer)

  return (
    <div css={DrawingWrapper}>
      <Background color='grey' />
      <BackHeader Center={<span>그림 암호 출제</span>} />
      <div css={FormWrapper}>
        <div className='input-wrapper'>
          <InputField
            placeholder='이 그림의 정체는 무엇일까요?'
            value={answer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
            isInvalid={isInvalid}
            helpMessage='* 한글 , 영문 모두 8자까지 가능해요!'
            validMessage='재밌는 암호가 될 거 같아요! :)'
            invalidMessage={
              answer.trim().length > 8
                ? '8자를 초과할 수 없어요! :('
                : '특수문자는 사용할 수 없어요! :('
            }
            maxLength={8}
          />
        </div>
        <Button
          width={142}
          onClick={() => {
            navigate('/writeletter')
          }}
          disabled={!answer || isInvalid}
        >
          다 그렸어요!
        </Button>
      </div>
    </div>
  )
}

export default Drawing
