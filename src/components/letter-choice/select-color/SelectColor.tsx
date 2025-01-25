import { useLetterCreationStore } from '#/store/letterCreateStore'
import { ColorStyle, SelectColorStyle } from './SelectColor.styles'

export const colors = ['grey', 'pink', 'violet', 'green', 'blue'] as const

const SelectColor = () => {
  const { selectedColor, setSelectedColor } = useLetterCreationStore()

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
