import { KonvaJSON } from '#/types/drawing'
import Konva from 'konva'

export const convertStageToSVG = (stage: Konva.Stage | null): string | null => {
  if (!stage) return null

  const json = stage.toJSON()
  const parsedData: KonvaJSON = JSON.parse(json)

  if (!parsedData.children) return null

  const layer = parsedData.children.find((child) => child.className === 'Layer')
  if (!layer || !layer.children) return null

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
