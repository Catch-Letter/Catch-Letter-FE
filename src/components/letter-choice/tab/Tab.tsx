import { useEffect, useState } from 'react'
import { TabItem, TabStyle } from './Tab.styles'
import { SelectColor, SelectFont, SelectPattern } from '#/components/letter-choice'
import { useTranslation } from 'react-i18next'

const Tab = () => {
  const { t } = useTranslation()
  const [tabItem, setTabItem] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('')

  const handleClickItem = (item: string) => {
    setSelectedItem(item)
  }

  const renderItem = (selectedItem: string) => {
    switch (selectedItem) {
      case `${t('theme.color')}`:
        return <SelectColor />
      case `${t('theme.pattern')}`:
        return <SelectPattern />
      case `${t('theme.font')}`:
        return <SelectFont />
    }
  }

  useEffect(() => {
    const items = [t('theme.color'), t('theme.pattern'), t('theme.font')]
    setTabItem(items)
    setSelectedItem(items[0]) // 언어 변경 시 첫 번째 항목 선택
  }, [t])

  return (
    <div css={TabStyle}>
      <ul>
        {' '}
        {tabItem.map((item) => (
          <li
            css={TabItem}
            key={item}
            className={selectedItem === item ? 'active' : ''}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className='tab-area'>{renderItem(selectedItem)}</div>
    </div>
  )
}

export default Tab
