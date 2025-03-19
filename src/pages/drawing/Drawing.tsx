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
import { KonvaJSON } from '#/types/drawing'

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

  const convertStageToSVG = () => {
    if (!stageRef.current) return null

    const stage = stageRef.current
    const json = stage.toJSON()
    const parsedData: KonvaJSON = JSON.parse(json)

    if (!parsedData.children) return null

    const layer = parsedData.children.find((child) => child.className === 'Layer')
    if (!layer || !layer.children) return null

    // Line 요소를 SVG로 변환
    const svgContent = layer.children
      .map((child) => {
        if (child.className === 'Line' && child.attrs.points.length > 0) {
          return `<polyline points="${child.attrs.points.join(' ')}" 
                  stroke="${child.attrs.stroke ?? 'black'}" 
                  stroke-width="${child.attrs.strokeWidth ?? 2}" 
                  fill="none" />`
        }
        return ''
      })
      .join('')

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${stage.width()}" height="${stage.height()}">${svgContent}</svg>`
  }

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

      // svg 변환
      const svgContent = convertStageToSVG()
      if (!svgContent) {
        console.error('SVG 변환 실패')
        return
      }

      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' })
      const svgFile = new File([svgBlob], 'drawing.svg', { type: 'image/svg+xml' })

      // png 변환
      const pngBlob = (await stage.toBlob({ mimeType: 'image/png' })) as Blob

      if (!pngBlob) {
        console.error('png 변환 안됨')
        return
      }

      const pngFile = new File([pngBlob], 'thumbnail.png', { type: 'image/png' })

      const response = await requestDrawUpload(uuid, answer)
      const { presigned_url, thumbnail_presigned_url } = response

      await uploadImageToPresignedUrl(presigned_url, svgFile)
      await uploadImageToPresignedUrl(thumbnail_presigned_url, pngFile)

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
          <Button width={142} onClick={handleSubmit} disabled={!answer || isInvalid}>
            {t('draw.button')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Drawing
