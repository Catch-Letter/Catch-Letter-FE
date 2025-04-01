import Konva from 'konva'
import { useRef, useState, forwardRef, useEffect } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import {
  CanvasWrapper,
  PaletteWrapper,
  PaletteStyle,
  CanvasStageWrapper,
  EraserCursor,
} from './Canvas.styles'
import { CanvasTools } from '#/components/drawing/canvas-tools'
import { paletteColors } from '#/styles/paletteColors'
import { LineData, CanvasProps } from '#/types/drawing'
import { useEraserCursor } from '#/hooks/useEraserCursor'

const Canvas = forwardRef<Konva.Stage, CanvasProps>(({ stageRef, lines, setLines }, _ref) => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000')

  const isDrawing = useRef<boolean>(false)

  const [_undoStack, setUndoStack] = useState<LineData[][]>([])
  const [redoStack, setRedoStack] = useState<LineData[][]>([])

  const [isEraser, setIsEraser] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 500 })

  const cursorPos = useEraserCursor(isEraser, containerRef)

  // 캔버스 크기 조절
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setCanvasSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight - 110,
        })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    const handleWindowMouseUp = () => {
      isDrawing.current = false
    }

    window.addEventListener('mouseup', handleWindowMouseUp)
    window.addEventListener('touchend', handleWindowMouseUp)

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('mouseup', handleWindowMouseUp)
      window.removeEventListener('touchend', handleWindowMouseUp)
    }
  }, [isEraser])

  // 그림 그리기 시작
  const handleMouseDown = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    e.evt.preventDefault()

    isDrawing.current = true
    const stage = e.target.getStage()
    const point = stage?.getPointerPosition()

    if (!point) return

    setLines((prevLines) => [
      ...prevLines,
      { points: [point.x, point.y], color: selectedColor, isEraser },
    ])
  }

  const handleMouseMove = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
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
    setIsEraser(true)
  }

  // 색상 변경시 지우개 모드 해제
  const handleColorChange = (hex: string) => {
    setIsEraser(false)
    setSelectedColor(hex)
  }

  // 그림 전체 삭제
  const handleClearCanvas = () => {
    if (lines.length === 0) return
    setLines([])
  }

  return (
    <div css={CanvasWrapper} ref={containerRef}>
      {isEraser && cursorPos && <div css={EraserCursor(cursorPos.x, cursorPos.y, 20)} />}

      <div css={PaletteWrapper}>
        {paletteColors.map(({ color, hex }) => (
          <button
            key={color}
            css={PaletteStyle(hex, selectedColor === hex && !isEraser)}
            onClick={() => handleColorChange(hex)}
          />
        ))}
      </div>

      <div css={CanvasStageWrapper}>
        <Stage
          ref={stageRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.isEraser ? 20 : 3}
                lineCap='round'
                globalCompositeOperation={line.isEraser ? 'destination-out' : 'source-over'}
              />
            ))}
          </Layer>
        </Stage>
      </div>

      <CanvasTools
        onUndo={handleUndo}
        onRedo={handleRedo}
        onEraser={handleEraser}
        onClear={handleClearCanvas}
        isEraser={isEraser}
        undoDisabled={lines.length === 0}
      />
    </div>
  )
})

export default Canvas
