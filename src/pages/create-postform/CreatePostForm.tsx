import { fetchCreatePost } from '#/api/createPost'
import { BackHeader } from '#/components'
import { Button, InputField, SeparatedInput } from '#/shared/ui'
import { Background } from '#/shared/ui/background'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'

const CreatePostForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const onCheckName = (name: string) => {
    setName(name)
    setIsInvalid(name.trim().length === 0)
  }

  const handleCreatePost = async () => {
    try {
      const res = await fetchCreatePost(name, password)
      navigate('/success', {
        state: {
          uuid: res.data.uuid,
          expired: res.data.expired_at,
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

  const nameMessage = isInvalid ? `${t('create.invalidMessage')}` : ''

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckName(e.target.value)}
            maxLength={15}
            helpMessage={t('create.helpMessage')}
            isInvalid={isInvalid}
            validMessage={t('create.validMessage')}
            invalidMessage={nameMessage}
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
    </div>
  )
}

export default CreatePostForm
