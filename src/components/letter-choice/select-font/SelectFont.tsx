import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useTranslation } from 'react-i18next'
import { FontItem, SelectFontStyle } from './SelectFont.styles'

const SelectFont = () => {
  const { t } = useTranslation()
  const { selectedFont, setSelectedFont } = useLetterCreationStore()

  const fonts = [
    { name: `${t('theme.default')}`, style: 'NotoSansKR' },
    { name: `${t('theme.handwritten1')}`, style: 'Ownglyph' },
    { name: `${t('theme.handwritten2')}`, style: 'NanumPen' },
  ] as const

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
