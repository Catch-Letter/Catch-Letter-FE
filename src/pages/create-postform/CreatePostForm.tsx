import { BackHeader } from '#/components'
import { Button, InputField } from '#/shared/ui'
import { useState } from 'react'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useNavigate } from 'react-router'
import { Background } from '#/shared/ui/background'

const CreatePostForm = () => {
  const navigate = useNavigate()
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

  return (
    <div css={CreateFormStyle}>
      <Background gradientType='halfGradient' />
      <BackHeader Center='우체통 발급' />
      <div css={FormWrapper}>
        <div className='form'>
          <InputField
            label='우체통 이름'
            placeholder='우체통 이름을 지어주세요.'
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <InputField
            label='우체통 비밀번호'
            placeholder='우체통 이름을 지어주세요.'
            type='password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <span className='notice'>우체통 비밀번호는 우체통을 열때마다 필요해요!</span>
        </div>
        <Button width={343} onClick={handleCreatePost} disabled={!name && !password}>
          확인
        </Button>
      </div>
    </div>
  )
}

export default CreatePostForm
