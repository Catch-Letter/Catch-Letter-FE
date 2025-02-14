import { useLetterCreationStore } from '#/store/letterCreateStore'
import { FontItem, SelectFontStyle } from './SelectFont.styles'

const fonts = [
  { name: '기본', style: 'NotoSansKR' },
  { name: '손글씨1', style: 'Ownglyph' },
  { name: '손글씨2', style: 'NanumPen' },
] as const

const SelectFont = () => {
  const { selectedFont, setSelectedFont } = useLetterCreationStore()

  return (
    <div css={SelectFontStyle}>
      <ul>
        {fonts.map((font) => (
          <li
            key={font.style}
            css={FontItem(font.style)}
            className={selectedFont === font.style ? 'active' : ''}
            onClick={() => setSelectedFont(font.style)}
          >
            {font.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectFont
