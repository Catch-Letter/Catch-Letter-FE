import { ReactNode, useState } from 'react'
import { TabItem, TabStyle } from './Tab.styles'

interface TabProps {
  items: string[]
  renderChildren: (selectedItem: string) => ReactNode
}

const Tab = ({ items, renderChildren }: TabProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0])

  const handleClickItem = (item: string) => {
    setSelectedItem(item)
  }

  return (
    <div css={TabStyle}>
      <ul>
        {' '}
        {items.map((item, idx) => (
          <li
            css={TabItem}
            key={idx}
            className={selectedItem === item ? 'active' : ''}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className='tab-area'>{renderChildren(selectedItem)}</div>
    </div>
  )
}

export default Tab
