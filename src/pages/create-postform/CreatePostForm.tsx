import { BackHeader } from '#/components'
import { Button, InputField } from '#/shared/ui'
import { CreateFormStyle, FormWrapper } from './CreatePostForm.styles'

const CreatePostForm = () => {
  return (
    <div css={CreateFormStyle}>
      <BackHeader Center='우체통 발급' />
      <div css={FormWrapper}>
        <div className='form'>
          <InputField label='우체통 이름' placeholder='우체통 이름을 지어주세요.' />
          <InputField label='우체통 비밀번호' placeholder='우체통 이름을 지어주세요.' />
        </div>
        <Button width={343}>확인</Button>
      </div>
    </div>
  )
}

export default CreatePostForm
