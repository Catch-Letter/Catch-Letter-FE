import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Konva from 'konva'
import { requestDrawUpload, uploadImageToPresignedUrl } from '#/api/draw'
import { convertStageToSVG } from '#/shared/utils/convertToSvg'
import { LineData } from '#/types/drawing'
import { useToastStore } from '#/store/toastStore'
import { trackBtnClick } from '#/shared/utils/gtag'

export const useDrawingSubmit = (
  uuid: string | undefined,
  answer: string,
  stageRef: React.RefObject<Konva.Stage>,
  lines: LineData[]
) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { showToast } = useToastStore()

  const handleUpload = useCallback(async () => {
    trackBtnClick('draw')

    if (!uuid) {
      navigate('/')
      showToast('우체통이 존재하지 않습니다', 'error')
      return
    }

    const stage = stageRef.current
    if (!stage) {
      navigate('/not-found')
      return
    }

    try {
      // svg 변환
      const svgContent = convertStageToSVG(stage)
      if (!svgContent) {
        navigate('/not-found')
        return
      }

      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' })
      const svgFile = new File([svgBlob], 'drawing.svg', { type: 'image/svg+xml' })

      // png 변환
      const pngBlob = (await stage.toBlob({ mimeType: 'image/png' })) as Blob
      if (!pngBlob) {
        navigate('/not-found')
        return
      }

      const pngFile = new File([pngBlob], 'thumbnail.png', { type: 'image/png' })

      const response = await requestDrawUpload(uuid, answer)
      const { presigned_url, thumbnail_presigned_url } = response

      await uploadImageToPresignedUrl(presigned_url, svgFile)
      await uploadImageToPresignedUrl(thumbnail_presigned_url, pngFile)

      navigate(`/writeletter/${uuid}/${response.id}`, {
        state: {
          img: pngFile,
          lines,
          answer,
          isDrawingMode: true,
          to: location.state?.to,
          content: location.state?.content,
          from: location.state?.from,
        },
      })
    } catch (error) {
      navigate('/not-found')
    }
  }, [uuid, answer, lines, stageRef, navigate])

  return { handleUpload }
}
