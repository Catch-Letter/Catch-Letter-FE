import { useState, useRef } from 'react'
import { useParams } from 'react-router'
import { DrawingWrapper, FormWrapper } from '#/pages/drawing/Drawing.styles'
import Konva from 'konva'
import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'
import { Button, InputField } from '#/shared/ui'
import { Canvas, DrawingIntro } from '#/components/drawing'
import { useDrawingSubmit } from '#/hooks/useDrawingSubmit'
import { useTranslation } from 'react-i18next'

const Drawing = () => {
  const [answer, setAnswer] = useState('')
  const [isDrawingMode, setIsDrawingMode] = useState(false)
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

  const { handleUpload } = useDrawingSubmit(uuid, answer, stageRef)

  return (
    <div css={DrawingWrapper}>
      <Background color='grey' />
      <BackHeader Center={<span>{t('draw.header')}</span>} />
      <div css={FormWrapper}>
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

        <div className='canvas-wrapper'>
          {!isDrawingMode ? (
            <DrawingIntro onStart={() => setIsDrawingMode(true)} />
          ) : (
            <Canvas stageRef={stageRef} />
          )}
        </div>

        <div className='button-wrapper'>
          <Button width={142} onClick={handleUpload} disabled={!answer || isInvalid}>
            {t('draw.button')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Drawing
