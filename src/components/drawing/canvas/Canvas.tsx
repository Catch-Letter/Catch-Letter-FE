import { useRef, useState } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { CanvasStyle, PaletteWrapper, PaletteStyle } from './Canvas.styles'
import { CanvasTools } from '#/components/drawing/canvas-tools'

interface Line {
  points: number[]
  color: string
  isEraser: boolean
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

  const [undoStack, setUndoStack] = useState<Line[][]>([])
  const [redoStack, setRedoStack] = useState<Line[][]>([])

  const [isEraser, setIsEraser] = useState<boolean>(false)

  // 그림 그리기 시작
  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true
    const stage = e.target.getStage()
    const pos = stage?.getPointerPosition()
    if (!pos) return

    setLines((prevLines) => [
      ...prevLines,
      { points: [pos.x, pos.y], color: selectedColor, isEraser },
    ])
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

      return [...newLines]
    })
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  // 그림 되돌리기
  const handleUndo = () => {
    if (lines.length > 0) {
      setUndoStack((prev) => [...prev, [...lines]])
      setRedoStack((prev) => [[...lines], ...prev])
      setLines(lines.slice(0, -1))
    }
  }

  // 그림 되살리기
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastState = redoStack[0]
      setRedoStack((prev) => prev.slice(1))
      setUndoStack((prev) => [...prev, [...lines]])
      setLines(lastState)
    }
  }

  // 부분 지우기
  const handleEraser = () => {
    setIsEraser((prev) => !prev)
  }

  // 색상 변경시 지우개 모드 해제
  const handleColorChange = (hex: string) => {
    setIsEraser(false)
    setSelectedColor(hex)
  }

  // 그림 전체 삭제
  const handleClearCanvas = () => {
    setLines([])
  }

  return (
    <div css={CanvasStyle}>
      <div css={PaletteWrapper}>
        {paletteColors.map(({ color, hex }) => (
          <button
            key={color}
            css={PaletteStyle(hex, selectedColor)}
            onClick={() => handleColorChange(hex)}
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
              globalCompositeOperation={line.isEraser ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>

      <CanvasTools
        onUndo={handleUndo}
        onRedo={handleRedo}
        onEraser={handleEraser}
        onClear={handleClearCanvas}
      />
    </div>
  )
}

export default Canvas
