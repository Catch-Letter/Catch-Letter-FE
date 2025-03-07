import { BackHeader } from '#/components'
import { Button, InputField } from '#/shared/ui'
import { useState } from 'react'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { useTranslation } from 'react-i18next'
import { submitCreatePost } from '#/api/auth'
import { fetchAuthToken } from '#/api/auth'

const CreatePostForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleCreatePost = async () => {
    const res = await submitCreatePost(name, password)
    if (res) {
      const authRes = await fetchAuthToken(name, password, res.data.uuid)
      console.log('토큰 api', authRes)

      navigate('/success', {
        state: {
          uuid: res.data.uuid,
          expired: res.data.expired_at,
        },
      })
    }
  }

  const onCheckPassword = (value: string) => {
    if (isNaN(Number(value))) return
    setPassword(value)
  }

  return (
    <div css={CreateFormStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader Center='우체통 발급' />
      <div css={FormWrapper}>
        <div className='form'>
          <InputField
            label={t('create.name')}
            placeholder={t('create.name_desc')}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <SeparatedInput
            label={t('create.password')}
            length={5}
            type='password'
            value={password}
            onChangeValue={onCheckPassword}
          />
          <span className='notice'>{t('create.password_desc')}</span>
        </div>
        <Button width={343} onClick={handleCreatePost} disabled={!name || !password}>
          {t('submit')}
        </Button>
      </div>
    </div>
  )
}

export default CreatePostForm
