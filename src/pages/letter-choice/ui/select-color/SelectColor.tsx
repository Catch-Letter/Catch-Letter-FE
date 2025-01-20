import { ColorStyle, SelectColorStyle } from './SelectColor.styles'
import { useColorStore } from '#/store/colorStore'

export const colors = ['grey', 'pink', 'violet', 'green', 'blue'] as const

const SelectColor = () => {
  const selectedColor = useColorStore((state) => state.selectedColor)
  const setSelectedColor = useColorStore((state) => state.setSelectedColor)

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
