import { fetchCreatePost } from '#/api/createPost'
import { BackHeader, Toast } from '#/components'
import { Background, Button, InputField, SeparatedInput } from '#/shared/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { trackBtnClick } from '#/shared/utils/gtag'

const CreatePostForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleCreatePost = async () => {
    trackBtnClick('createPostSubmit')
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
      throw error
    }
  }

  const handleName = (value: string) => {
    if (value.length > 15) return
    setName(value)
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleName(e.target.value)
            }}
            helpMessage={t('create.helpMessage')}
            isInvalid={name.trim().length === 0}
            validMessage={t('create.validMessage')}
            invalidMessage={t('create.invalidMessage')}
          />
          <SeparatedInput
            label={t('create.password')}
            length={5}
            type='password'
            pattern='[0-9]*'
            inputMode='numeric'
            value={password}
            onChangeValue={setPassword}
          />
          <span className='notice'>{t('create.password_desc')}</span>
        </div>
      </div>
      <Button
        className='btn_submit'
        width={343}
        onClick={handleCreatePost}
        disabled={!name || /^[0-9]{5}$/.test(password) === false}
      >
        {t('submit')}
      </Button>
      <Toast position='top' />
    </div>
  )
}

export default CreatePostForm
