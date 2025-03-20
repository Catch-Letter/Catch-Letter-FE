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
