import { KonvaJSON } from '#/types/drawing'
import Konva from 'konva'

export const convertStageToSVG = (stage: Konva.Stage | null): string | null => {
  if (!stage) return null

  const json = stage.toJSON()
  const parsedData: KonvaJSON = JSON.parse(json)
  if (!parsedData.children) return null

  const layer = parsedData.children.find((child) => child.className === 'Layer')
  if (!layer || !layer.children) return null

  const allLines: string[] = []

  layer.children.forEach((child) => {
    if (child.className === 'Line' && child.attrs.points.length > 0) {
      const points = child.attrs.points.join(' ')
      const strokeWidth = child.attrs.strokeWidth ?? (child.attrs.isEraser ? 20 : 3)

      if (child.attrs.isEraser) {
        allLines.push(
          `<polyline points="${points}" stroke="white" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" stroke-linejoin="round" />`
        )
      } else {
        const stroke = child.attrs.stroke ?? 'black'
        allLines.push(
          `<polyline points="${points}" stroke="${stroke}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" stroke-linejoin="round" />`
        )
      }
    }
  })

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${stage.width()}" height="${stage.height()}">
      ${allLines.join('\n')}
    </svg>
  `

  return svgContent
}
