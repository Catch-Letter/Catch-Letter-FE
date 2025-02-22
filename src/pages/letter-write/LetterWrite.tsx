import React, { useState } from 'react'
import { BackHeader } from '#/components'
import { useLocation, useNavigate } from 'react-router'
import { LetterWriteStyle, LetterWriteWrapper } from './LetterWrite.styles'
import { Input, Button } from '#/shared/ui'
import { WriteDesc, TextCard } from '#/components/letter-write'
import { useTranslation } from 'react-i18next'

const LetterWrite = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [recipient, setRecipient] = useState(location.state?.to || '')
  const [sender, setSender] = useState(location.state?.from || '')
  const [content, setContent] = useState(location.state?.content || '')

  const handleChoiceLetter = () => {
    navigate('/choiceletter', {
      state: {
        to: recipient,
        content,
        from: sender,
      },
    })
  }
  return (
    <div css={LetterWriteWrapper}>
      <BackHeader Center='비밀편지 쓰기' />
      <div css={LetterWriteStyle}>
        <div className='content'>
          <div className='input-to'>
            <label className='input-label'>TO</label>
            <Input
              placeholder={t('write.to')}
              value={recipient}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setRecipient(e.target.value)
              }}
            />
          </div>
          <TextCard
            color='#f4f4f5'
            placeholder={t('write.content')}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
          <div className='input-from'>
            <label className='input-label'>FROM</label>
            <Input
              placeholder={t('write.from')}
              value={sender}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSender(e.target.value)
              }}
            />
          </div>
        </div>
        <WriteDesc
          className='desc'
          title={t('write.help')}
          descs={t('write.explain', { returnObjects: true }) as string[]}
        />
        <div className='button-area'>
          <Button variant='secondary' width={82}>
            {t('before')}
          </Button>
          <Button onClick={handleChoiceLetter} disabled={!recipient || !sender || !content}>
            {t('write.theme')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LetterWrite
