import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'
import { Button, InputField } from '#/shared/ui'
import { useState, useRef } from 'react'
import { DrawingWrapper, FormWrapper } from '#/pages/drawing/Drawing.styles'
import { useNavigate, useParams } from 'react-router'
import { Canvas, DrawingIntro } from '#/components/drawing'
import { requestDrawUpload, uploadImageToPresignedUrl } from '#/api/draw'
import Konva from 'konva'

const Drawing = () => {
  const [answer, setAnswer] = useState('')
  const [isDrawingMode, setIsDrawingMode] = useState(false)
  const navigate = useNavigate()
  const { uuid } = useParams()

  const stageRef = useRef<Konva.Stage | null>(null)

  const specialCharRegex = /[^a-zA-Z0-9가-힣]/
  const isInvalid =
    answer.trim().length === 0 || answer.trim().length > 8 || specialCharRegex.test(answer)

  const getInvalidMessage = (answer: string) => {
    if (answer.trim().length === 0) {
      return '암호를 적어주세요! :('
    }
    if (answer.trim().length > 8) {
      return '8자를 초과할 수 없어요! :('
    }
    if (/[^a-zA-Z0-9가-힣]/.test(answer)) {
      return '특수문자 및 띄어쓰기는 사용할 수 없어요! :('
    }
    return ''
  }

  const invalidMessage = getInvalidMessage(answer)

  const handleSubmit = async () => {
    if (!uuid) {
      console.error('uuid 에러')
      return
    }

    if (!stageRef.current) {
      console.error('Canvas가 초기화되지 않았습니다.')
      return
    }

    try {
      const stage = stageRef.current
      const svgDataURL = stage.toDataURL({ mimeType: 'image/svg+xml' })

      const blob = new Blob([svgDataURL], { type: 'image/svg+xml' })
      const file = new File([blob], 'drawing.svg', { type: 'image/svg+xml' })

      const response = await requestDrawUpload(uuid, answer)
      const { presigned_url } = response

      await uploadImageToPresignedUrl(presigned_url, file)
      navigate(`/writeletter/${uuid}`)
    } catch (error) {
      console.error('업로드 실패', error)
    }
  }

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
            invalidMessage={invalidMessage}
            maxLength={8}
          />
        </div>
        {!isDrawingMode ? (
          <DrawingIntro onStart={() => setIsDrawingMode(true)} />
        ) : (
          <Canvas stageRef={stageRef} />
        )}
        <Button
          width={142}
          onClick={handleSubmit}
          disabled={!answer || isInvalid}
          style={{ marginTop: '20px' }}
        >
          다 그렸어요!
        </Button>
      </div>
    </div>
  )
}

export default Drawing
