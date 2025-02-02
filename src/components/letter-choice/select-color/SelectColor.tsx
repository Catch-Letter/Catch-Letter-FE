import { ColorType, useLetterCreationStore } from '#/store/letterCreateStore'
import { ColorStyle, SelectColorStyle, backgroundColors } from './SelectColor.styles'

export const colors = Object.keys(backgroundColors) as ColorType[]

const SelectColor = () => {
  const { selectedColor, setSelectedColor } = useLetterCreationStore()

  return (
    <div css={SelectColorStyle}>
      <ul>
        {colors.map((color) => (
          <li
            css={ColorStyle(color)}
            key={color}
            className={selectedColor === color ? 'active' : ''}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ul>
    </div>
  )
}

export default SelectColor
