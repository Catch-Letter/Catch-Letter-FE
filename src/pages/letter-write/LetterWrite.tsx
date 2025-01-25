import { LetterWriteStyle } from './LetterWrite.styles'
import { Input, Button } from '#/shared/ui'
import { WRITE_LETTER, WRITE_LETTER_EXPLAIN } from '#/shared/constants/letter'
import { WriteDesc, TextCard } from '#/components/letter-write'

const LetterWrite = () => {
  return (
    <div css={LetterWriteStyle}>
      <div className='content'>
        <div className='input-to'>
          <label className='input-label'>TO</label>
          <Input placeholder={WRITE_LETTER.TO} />
        </div>
        <TextCard color='#f4f4f5' placeholder={WRITE_LETTER.CONTENT} />
        <div className='input-from'>
          <label className='input-label'>FROM</label>
          <Input placeholder={WRITE_LETTER.FROM} />
        </div>
      </div>
      <WriteDesc title={WRITE_LETTER.HELP} descs={WRITE_LETTER_EXPLAIN} />
      <div className='button-area'>
        <Button variant='secondary' width={82}>
          이전
        </Button>
        <Button>편지 선택하기!</Button>
      </div>
    </div>
  )
}

export default LetterWrite
