import { TextCard } from '#/components/text-card'
import { LetterWriteStyles } from '#/pages/letter-write/LetterWrite.styles'
import { ChangeEvent, useState } from 'react'
import { WRITE_LETTER_EXPLAIN, WRITE_LETTER_TITLE } from '#/shared/constants/letter'

const LetterWrite = () => {
  const [letter, setLetter] = useState('')

  return (
    <div css={LetterWriteStyles}>
      <div className='header'>헤더</div>
      <div className='content'>
        <input />
        <TextCard
          color='#f4f4f5'
          placeholder='상대에게 전하고 싶은 내용을 적어주세요!'
          value={letter}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLetter(e.target.value)}
        />
        <input />
        <div className='explain-area'>
          <div className='title'>{WRITE_LETTER_TITLE}</div>
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
