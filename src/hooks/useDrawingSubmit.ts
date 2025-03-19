import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import Konva from 'konva'
import { requestDrawUpload, uploadImageToPresignedUrl } from '#/api/draw'
import { convertStageToSVG } from '#/shared/utils/convertToSvg'

export const useDrawingSubmit = (
  uuid: string | undefined,
  answer: string,
  stageRef: React.RefObject<Konva.Stage>
) => {
  const navigate = useNavigate()

  const handleUpload = useCallback(async () => {
    if (!uuid) {
      console.error('uuid 에러')
      return
    }

    const stage = stageRef.current
    if (!stage) {
      console.error('Canvas가 초기화되지 않았습니다.')
      return
    }

    try {
      // svg 변환
      const svgContent = convertStageToSVG(stage)
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

      navigate(`/writeletter/${uuid}/${response.id}`, {
        state: {
          img: presigned_url,
        },
      })
    } catch (error) {
      console.error('업로드 실패', error)
    }
  }, [uuid, answer, stageRef, navigate])

  return { handleUpload }
}
