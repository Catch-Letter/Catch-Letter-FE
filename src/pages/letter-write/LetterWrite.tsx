import { LetterWriteStyle, letterWriteWrapper } from './LetterWrite.styles'
import { Input, Button } from '#/shared/ui'
import { WriteDesc, TextCard } from '#/components/letter-write'
import { useTranslation } from 'react-i18next'
import { BackHeader } from '#/components'

const LetterWrite = () => {
  const { t } = useTranslation()
  return (
    <div css={LetterWriteStyle}>
      <BackHeader Center='비밀편지 쓰기' />
      <div css={letterWriteWrapper}>
        <div className='content'>
          <div className='input-to'>
            <label className='input-label'>TO</label>
            <Input placeholder={t('write.to')} />
          </div>
          <TextCard color='#f4f4f5' placeholder={t('write.content')} />
          <div className='input-from'>
            <label className='input-label'>FROM</label>
            <Input placeholder={t('write.from')} />
          </div>
        </div>
        <WriteDesc
          title={t('write.help')}
          descs={t('write.explain', { returnObjects: true }) as string[]}
        />
        <div className='button-area'>
          <Button variant='secondary' width={82}>
            {t('before')}
          </Button>
          <Button>{t('write.theme')}</Button>
        </div>
      </div>
    </div>
  )
}

export default LetterWrite
