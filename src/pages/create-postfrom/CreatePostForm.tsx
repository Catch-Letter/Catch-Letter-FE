import { Button, Header, InputField } from '#/shared/ui'
import { CreateFormStyle } from './CreatePostForm.styles'

const CreatePostForm = () => {
  return (
    <div css={CreateFormStyle}>
      <Header />
      <div className='form'>
        <InputField label='우체통 이름' placeholder='우체통 이름을 지어주세요.' />
        <InputField label='비밀번호' placeholder='우체통 이름을 지어주세요.' />
      </div>
      <Button width={343}>확인</Button>
    </div>
  )
}

export default CreatePostForm
