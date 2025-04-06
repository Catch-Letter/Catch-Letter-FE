import { KonvaJSON } from '#/types/drawing'
import Konva from 'konva'

export const convertStageToSVG = (stage: Konva.Stage | null): string | null => {
  if (!stage) return null

  const json = stage.toJSON()
  const parsedData: KonvaJSON = JSON.parse(json)
  if (!parsedData.children) return null

  const layer = parsedData.children.find((child) => child.className === 'Layer')
  if (!layer || !layer.children) return null

  const normalLines: string[] = []
  const eraserLines: string[] = []

  layer.children.forEach((child) => {
    if (child.className === 'Line' && child.attrs.points.length > 0) {
      const points = child.attrs.points.join(' ')
      const strokeWidth = child.attrs.strokeWidth ?? (child.attrs.isEraser ? 20 : 3)

      if (child.attrs.isEraser) {
        eraserLines.push(
          `<polyline points="${points}" stroke="black" stroke-width="${strokeWidth}" fill="none" />`
        )
      } else {
        const stroke = child.attrs.stroke ?? 'black'
        normalLines.push(
          `<polyline points="${points}" stroke="${stroke}" stroke-width="${strokeWidth}" fill="none" />`
        )
      }
    }
  })

  const maskContent = `
    <mask id="eraseMask">
      <rect width="100%" height="100%" fill="white"/>
      ${eraserLines.join('\n')}
    </mask>
  `

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${stage.width()}" height="${stage.height()}">
      <defs>
        ${maskContent}
      </defs>
      <g mask="url(#eraseMask)">
        ${normalLines.join('\n')}
      </g>
    </svg>
  `

  return svgContent
}
