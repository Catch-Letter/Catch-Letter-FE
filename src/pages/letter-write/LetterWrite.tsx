import React, { useEffect, useState } from 'react'
import { BackHeader } from '#/components'
import { useLocation, useNavigate, useParams } from 'react-router'
import { LetterWriteStyle, LetterWriteWrapper } from './LetterWrite.styles'
import { Input, Button } from '#/shared/ui'
import { WriteDesc, TextCard } from '#/components/letter-write'
import { useTranslation } from 'react-i18next'
import { fetchUUID } from '#/api/uuid'

const LetterWrite = () => {
  const { t } = useTranslation()
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [recipient, setRecipient] = useState(location.state?.to || '')
  const [sender, setSender] = useState(location.state?.from || '')
  const [content, setContent] = useState(location.state?.content || '')

  const handleChoiceLetter = () => {
    navigate(`/choiceletter/${uuid}/${id}`, {
      state: {
        to: recipient,
        content,
        from: sender,
      },
    })
  }

  const handleSender = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return
    setSender(e.target.value)
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 1000) return
    setContent(e.target.value)
  }

  if (!uuid) return <>페이지가 존재하지 않습니다.</>

  useEffect(() => {
    const getUUID = async () => {
      try {
        const res = await fetchUUID(uuid)
        setRecipient(res.name)
        return res.data
      } catch (error) {
        console.log('failed to fetch UUID', error)
      }
    }
    getUUID()
  }, [uuid])

  return (
    <div css={LetterWriteWrapper}>
      <BackHeader Center='비밀편지 쓰기' />
      <div css={LetterWriteStyle}>
        <div className='content'>
          <div className='input-to'>
            <label className='input-label'>TO</label>
            <Input placeholder={t('write.to')} value={recipient} readOnly />
          </div>
          <TextCard
            color='#f4f4f5'
            placeholder={t('write.content')}
            value={content}
            onChange={() => {
              handleContent
            }}
          />
          <div className='input-from'>
            <label className='input-label'>FROM</label>
            <Input placeholder={t('write.from')} value={sender} onChange={() => handleSender} />
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
