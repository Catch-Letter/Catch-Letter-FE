import Konva from 'konva'

// drawing 기능
export interface LineData {
  points: number[]
  color: string
  isEraser: boolean
}

export interface CanvasProps {
  stageRef: React.RefObject<Konva.Stage>
  lines: LineData[]
  setLines: React.Dispatch<React.SetStateAction<LineData[]>>
}

// 그림 svg 변환
interface KonvaLineNode {
  className: 'Line'
  attrs: {
    points: number[]
    stroke?: string
    strokeWidth?: number
  }
}

interface KonvaLayer {
  className: 'Layer'
  children?: KonvaLineNode[]
}

export interface KonvaJSON {
  children?: KonvaLayer[]
}
