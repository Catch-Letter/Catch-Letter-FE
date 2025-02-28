import { BackHeader } from '#/components'
import { Button, InputField } from '#/shared/ui'
import { useState } from 'react'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { useTranslation } from 'react-i18next'

const CreatePostForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleCreatePost = async () => {
    try {
      const res = await apiClient.post(API_ENDPOINTS.CREATE, {
        name,
        password,
      })
      navigate('/success', {
        state: {
          uuid: res.data.data.uuid,
          expired: res.data.data.expired_at,
        },
      })
      return res.data
    } catch (error) {
      console.error(error)
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
