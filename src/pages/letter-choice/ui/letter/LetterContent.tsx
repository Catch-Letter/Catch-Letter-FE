import { ColorType, PatternType } from '#/store/colorStore'
import { LetterContentStyle } from './LetterContent.styles'

interface LetterProps {
  to: string
  content: string
  from: string
  pattern: PatternType
  color: ColorType
}

const LetterContent = ({ to, content, from, pattern, color }: LetterProps) => {
  return (
    <div css={LetterContentStyle(pattern, color)}>
      <div className='letter-area'>
        <div className='to'>To. {to}</div>
        <div className='letter'>{content}</div>
        <div className='from'>From. {from}</div>
      </div>
    </div>
  )
}

export default LetterContent
