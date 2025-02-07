import { useState } from 'react'
import { TabItem, TabStyle } from './Tab.styles'
import { SelectColor, SelectFont, SelectPattern } from '#/components/letter-choice'

const tabItem = ['색상', '패턴', '글꼴'] as const

const Tab = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof tabItem)[number]>(tabItem[0])

  const handleClickItem = (item: (typeof tabItem)[number]) => {
    setSelectedItem(item)
  }

  const renderItem = (selectedItem: (typeof tabItem)[number]) => {
    switch (selectedItem) {
      case '색상':
        return <SelectColor />
      case '패턴':
        return <SelectPattern />
      case '글꼴':
        return <SelectFont />
    }
  }

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
