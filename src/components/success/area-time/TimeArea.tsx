import { TimeAreaStyle } from './TimeArea.styles'

interface TimeAreaProps {
  title: string
  time: string
}

const TimeArea = ({ title, time }: TimeAreaProps) => {
  return (
    <div css={TimeAreaStyle}>
      {title} <span className='time'>{time}</span>
    </div>
  )
}

export default TimeArea
