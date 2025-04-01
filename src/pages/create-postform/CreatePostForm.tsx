import { fetchCreatePost } from '#/api/createPost'
import { BackHeader, Toast } from '#/components'
import { Background, Button, InputField, SeparatedInput } from '#/shared/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { useToastStore } from '#/store/toastStore'

const CreatePostForm = () => {
  const navigate = useNavigate()
  const { showToast } = useToastStore()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleCreatePost = async () => {
    try {
      const res = await fetchCreatePost(name, password)
      navigate('/success', {
        state: {
          mailboxUrl: res.data.url,
          expired: res.data.expired_at,
        },
      })
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  const onCheckPassword = (value: string) => {
    if (value.length === 5 && isNaN(Number(value))) {
      showToast(t('numberPWD'), 'error')
      return
    }
    setPassword(value)
  }

  return (
    <div css={CreateFormStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader Center={t('create.title')} />
      <div css={FormWrapper}>
        <div className='form'>
          <InputField
            label={t('create.name')}
            placeholder={t('create.name_desc')}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            maxLength={15}
            helpMessage={t('create.helpMessage')}
            isInvalid={name.trim().length === 0}
            validMessage={t('create.validMessage')}
            invalidMessage={t('create.invalidMessage')}
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
      </div>
      <Button
        className='btn_submit'
        width={343}
        onClick={handleCreatePost}
        disabled={!name || !password}
      >
        {t('submit')}
      </Button>
      <Toast position='top' />
    </div>
  )
}

export default CreatePostForm
