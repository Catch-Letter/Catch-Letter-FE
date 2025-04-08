import { TimeAreaStyle } from './TimeArea.styles'

interface TimeAreaProps {
  time: string
}

const TimeArea = ({ time }: TimeAreaProps) => {
  return <span css={TimeAreaStyle}>{time}</span>
}

export default TimeArea
