import { useRef, useState } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { FaArrowLeft, FaArrowRight, FaEraser } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'
import {
  CanvasStyle,
  PaletteWrapper,
  PaletteStyle,
  ToolWrapper,
  IconWrapper,
} from './Canvas.styles'

interface Line {
  points: number[]
  color: string
}

const paletteColors = [
  { color: 'Black', hex: '#000000' },
  { color: 'White', hex: '#FFFFFF' },
  { color: 'Red', hex: '#F8596A' },
  { color: 'Orange', hex: '#FF9061' },
  { color: 'Yellow', hex: '#FFDE55' },
  { color: 'Green', hex: '#39E7BA' },
  { color: 'Blue', hex: '#388CFF' },
  { color: 'Purple', hex: '#B072F8' },
]

const Canvas = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000')
  const [lines, setLines] = useState<Line[]>([])
  const isDrawing = useRef<boolean>(false)

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true
    const stage = e.target.getStage()
    const pos = stage?.getPointerPosition()
    if (!pos) return

    setLines((prevLines) => [...prevLines, { points: [pos.x, pos.y], color: selectedColor }])
  }

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) return

    const stage = e.target.getStage()
    const point = stage?.getPointerPosition()
    if (!point) return

    setLines((prevLines) => {
      const newLines = [...prevLines]
      const lastLine = newLines[newLines.length - 1]

      if (!lastLine) return prevLines
      lastLine.points = [...lastLine.points, point.x, point.y]

      return newLines
    })
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  return (
    <div css={CanvasStyle}>
      <div css={PaletteWrapper}>
        {paletteColors.map(({ color, hex }) => (
          <button
            key={color}
            css={PaletteStyle(hex, selectedColor)}
            onClick={() => setSelectedColor(hex)}
          />
        ))}
      </div>

      <Stage
        width={300}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={3}
              lineCap='round'
            />
          ))}
        </Layer>
      </Stage>

      <div css={ToolWrapper}>
        <div css={IconWrapper}>
          <button className='icon' aria-label='Undo'>
            <FaArrowLeft size={20} />
          </button>
          <button className='icon' aria-label='Redo'>
            <FaArrowRight size={20} />
          </button>
        </div>
        <div css={IconWrapper}>
          <button className='icon' aria-label='Eraser'>
            <FaEraser size={20} />
          </button>
          <button className='icon' aria-label='Clear Canvas'>
            <FaTrashCan size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Canvas
