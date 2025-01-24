import { useLetterCreationStore } from '#/store/letterCreateStore'
import { FontItem, SelectFontStyle } from './SelectFont.styles'

const fonts = [
  { name: '기본', style: 'NotoSansKR', type: 'default' as const },
  { name: '손글씨1', style: 'Ownglyph EuiyeonChae', type: 'ownglyph' as const },
  { name: '손글씨2', style: 'NanumPen', type: 'nanum' as const },
]

const SelectFont = () => {
  const { selectedFont, setSelectedFont } = useLetterCreationStore()

  return (
    <div css={SelectFontStyle}>
      <ul>
        {fonts.map((font, idx) => (
          <li
            key={idx}
            css={FontItem(font.style)}
            className={selectedFont === font.type ? 'active' : ''}
            onClick={() => setSelectedFont(font.type)}
          >
            {font.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectFont
