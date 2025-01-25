import { ColorType, FontType, PatternType } from '#/store/letterCreateStore'
import { LetterContentStyle } from './LetterContent.styles'

interface LetterProps {
  to: string
  content: string
  from: string
  pattern: PatternType
  color: ColorType
  font: FontType
}

const LetterContent = ({ to, content, from, pattern, color, font }: LetterProps) => {
  return (
    <div css={LetterContentStyle(pattern, color, font)}>
      <div className='letter-area'>
        <div className='to'>To. {to}</div>
        <div className='letter'>{content}</div>
        <div className='from'>From. {from}</div>
      </div>
    </div>
  )
}

export default LetterContent
