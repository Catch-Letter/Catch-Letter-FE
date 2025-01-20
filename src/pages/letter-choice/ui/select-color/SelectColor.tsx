import { useState } from 'react'
import { ColorStyle, SelectColorStyle } from './selectColor.styles'

export const colors = ['grey', 'pink', 'violet', 'green', 'blue'] as const

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState('grey')

  return (
    <div css={SelectColorStyle}>
      <ul>
        {colors.map((color, idx) => (
          <li
            css={ColorStyle(color)}
            key={idx}
            className={selectedColor === color ? 'active' : ''}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ul>
    </div>
  )
}

export default SelectColor
