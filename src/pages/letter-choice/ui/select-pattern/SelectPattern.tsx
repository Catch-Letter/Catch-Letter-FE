import { useLetterCreationStore } from '#/store/letterCreateStore'
import { PatternStyle, SelectPatternStyle } from './SelectPattern.styles'

const patterns = {
  default: '/redline.svg',
  line: '/Mask1.svg',
  dot: '/Mask2.svg',
  grid: '/Mask3.svg',
} as const

const SelectPattern = () => {
  const { selectedPattern, setSelectedPattern } = useLetterCreationStore()

  return (
    <div css={SelectPatternStyle}>
      <ul>
        {Object.keys(patterns).map((pattern, idx) => (
          <li
            css={PatternStyle}
            key={idx}
            className={selectedPattern === pattern ? 'active' : ''}
            onClick={() => setSelectedPattern(pattern as keyof typeof patterns)}
          >
            <img src={patterns[pattern as keyof typeof patterns]} alt={pattern} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectPattern
