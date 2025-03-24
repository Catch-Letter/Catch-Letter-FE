import { useState, useRef } from 'react'
import { useLocation, useParams } from 'react-router'
import { DrawingWrapper, FormWrapper } from '#/pages/drawing/Drawing.styles'
import Konva from 'konva'
import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'
import { Button, InputField } from '#/shared/ui'
import { Canvas, DrawingIntro } from '#/components/drawing'
import { answerValidate, isAnswerInvalid } from '#/shared/utils/answerValidation'
import { useDrawingSubmit } from '#/hooks/useDrawingSubmit'
import { useTranslation } from 'react-i18next'
import { LineData } from '#/types/drawing'

const Drawing = () => {
  const { t } = useTranslation()
  const { uuid } = useParams()
  const location = useLocation()

  const [answer, setAnswer] = useState(location.state?.answer || '')
  const [isDrawingMode, setIsDrawingMode] = useState<boolean>(
    location.state?.isDrawingMode || false
  )
  const [lines, setLines] = useState<LineData[]>(location.state?.lines || [])

  const stageRef = useRef<Konva.Stage | null>(null)

  const invalidMessage = answerValidate(answer, t)
  const isInvalid = isAnswerInvalid(answer)

  const { handleUpload } = useDrawingSubmit(uuid, answer, stageRef, lines)

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
            <Canvas stageRef={stageRef} lines={lines} setLines={setLines} />
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
