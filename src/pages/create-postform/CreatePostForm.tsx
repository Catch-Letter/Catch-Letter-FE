import { BackHeader } from '#/components'
import { Button, InputField } from '#/shared/ui'
import { useState } from 'react'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'
import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { useTranslation } from 'react-i18next'
import { fetchCreatePost } from '#/api/createPost'

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

  const nameMessage = isInvalid ? '우체통 이름을 입력해주세요 :)' : ''

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckName(e.target.value)}
            maxLength={15}
            helpMessage='우체통 이름은 15글자 이내로 입력해주세요.'
            isInvalid={isInvalid}
            validMessage={'사용할 수 있는 이름입니다 :)'}
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
        <Button
          className='btn_submit'
          width={343}
          onClick={handleCreatePost}
          disabled={!name || !password}
        >
          {t('submit')}
        </Button>
      </div>
    </div>
  )
}

export default CreatePostForm
