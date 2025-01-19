import { TextCard } from '#/components/text-card'
import { LetterWriteStyles } from './LetterWrite.styles'
import { WRITE_LETTER, WRITE_LETTER_EXPLAIN } from '#/shared/constants/letter'
import { Input } from '#/shared/ui'
import { BackHeader } from '#/components'

const LetterWrite = () => {
  return (
    <div css={LetterWriteStyles}>
      <BackHeader Center='비밀편지 쓰기' Right='한영키' />
      <div className='content'>
        <Input placeholder={WRITE_LETTER.TO} />
        <TextCard color='#f4f4f5' placeholder={WRITE_LETTER.CONTENT} />
        <Input placeholder={WRITE_LETTER.FROM} />
      </div>
      <div className='explain-area'>
        <div className='title'>{WRITE_LETTER.HELP}</div>
        <ul>
          {WRITE_LETTER_EXPLAIN.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LetterWrite
