import { dot, grid, line, redLine } from '#/assets/letterPattern'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { PatternStyle, SelectPatternStyle } from './SelectPattern.styles'

const patterns = {
  default: redLine,
  line,
  dot,
  grid,
}

const SelectPattern = () => {
  const { selectedPattern, setSelectedPattern } = useLetterCreationStore()

  return (
    <div css={SelectPatternStyle}>
      <ul>
        {Object.keys(patterns).map((pattern) => (
          <li
            css={PatternStyle}
            key={pattern}
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
