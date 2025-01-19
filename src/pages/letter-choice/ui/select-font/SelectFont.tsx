import { useState } from 'react'
import { FontItem, SelectFontStyle } from './SelectFont.styles'

const fonts = [
  { name: '기본', style: 'NotoSansKR' },
  { name: '류류', style: 'Ownglyph_ryurue-Rg' },
  { name: '의연', style: 'Uiyeun' },
]

const SelectFont = () => {
  const [selectedFont, setSelectedFont] = useState(fonts[0].name)

  const handleClickFont = (font: string) => {
    setSelectedFont(font)
  }

  return (
    <div css={SelectFontStyle}>
      <ul>
        {fonts.map((font, idx) => (
          <li
            key={idx}
            css={FontItem(font.style)}
            className={selectedFont === font.name ? 'active' : ''}
            onClick={() => handleClickFont(font.name)}
          >
            {font.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectFont
