import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'
import { Button, InputField } from '#/shared/ui'
import { useState, useRef } from 'react'
import { DrawingWrapper, FormWrapper } from '#/pages/drawing/Drawing.styles'
import { useNavigate, useParams } from 'react-router'
import { Canvas, DrawingIntro } from '#/components/drawing'
import { requestDrawUpload, uploadImageToPresignedUrl } from '#/api/draw'
import Konva from 'konva'
import { useTranslation } from 'react-i18next'

const Drawing = () => {
  const [answer, setAnswer] = useState('')
  const [isDrawingMode, setIsDrawingMode] = useState(false)
  const navigate = useNavigate()
  const { uuid } = useParams()
  const { t } = useTranslation()

  const stageRef = useRef<Konva.Stage | null>(null)

  const specialCharRegex = /[^a-zA-Z0-9가-힣]/
  const isInvalid =
    answer.trim().length === 0 || answer.trim().length > 8 || specialCharRegex.test(answer)

  const getInvalidMessage = (answer: string) => {
    if (answer.trim().length === 0) {
      return t('draw.invalidMessage1')
    }
    if (answer.trim().length > 8) {
      return t('draw.invalidMessage2')
    }
    if (/[^a-zA-Z0-9가-힣]/.test(answer)) {
      return t('draw.invalidMessage3')
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

      console.log(response)

      await uploadImageToPresignedUrl(presigned_url, file)
      navigate(`/writeletter/${uuid}/${response.id}`)
    } catch (error) {
      console.error('업로드 실패', error)
    }
  }

  return (
    <div css={DrawingWrapper}>
      <Background color='grey' />
      <BackHeader Center={<span>{t('draw.header')}</span>} />
      <div css={FormWrapper}>
        <div className='input-wrapper'>
          <InputField
            placeholder={t('draw.placeholder')}
            value={answer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
            isInvalid={isInvalid}
            helpMessage={t('draw.helpMessage')}
            validMessage={t('draw.validMessage')}
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
          {t('draw.button')}
        </Button>
      </div>
    </div>
  )
}

export default Drawing
