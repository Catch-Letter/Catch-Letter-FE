import { TextCard } from '#/components/text-card'
import { LetterWriteStyles } from './LetterWrite.styles'
import { ChangeEvent, useState } from 'react'
import { WRITE_LETTER, WRITE_LETTER_EXPLAIN } from '#/shared/constants/letter'
import { Input } from '#/shared/ui'

const LetterWrite = () => {
  const [receiver, setReceiver] = useState('')
  const [sender, setSender] = useState('')
  const [letter, setLetter] = useState('')

  return (
    <div css={LetterWriteStyles}>
      <div className='header'>헤더</div>
      <div className='content'>
        <Input
          placeholder={WRITE_LETTER.TO}
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <TextCard
          color='#f4f4f5'
          placeholder={WRITE_LETTER.CONTENT}
          value={letter}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLetter(e.target.value)}
        />
        <Input
          placeholder={WRITE_LETTER.FROM}
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <div className='explain-area'>
          <div className='title'>{WRITE_LETTER.TO}</div>
          <ul>
            {WRITE_LETTER_EXPLAIN.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LetterWrite
