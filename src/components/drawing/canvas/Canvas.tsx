import { useState } from 'react'
import { CanvasStyle, PaletteWrapper, PaletteStyle } from './Canvas.styles'

const Canvas = () => {
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
  const [selectedColor, setSelectedColor] = useState<string>('#000000')

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
    </div>
  )
}

export default Canvas
