import { useState } from 'react'
import { PatternStyle, SelectPatternStyle } from './SelectPattern.styles'

const patterns = ['/redline.svg', '/Mask1.svg', '/Mask2.svg', '/Mask3.svg']

const SelectPattern = () => {
  const [selectedPattern, setSelectedPattern] = useState('')
  return (
    <div css={SelectPatternStyle}>
      <ul>
        {patterns.map((pattern, idx) => (
          <li
            css={PatternStyle}
            key={idx}
            className={selectedPattern === pattern ? 'active' : ''}
            onClick={() => setSelectedPattern(pattern)}
          >
            <img src={pattern} alt='패턴' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectPattern
