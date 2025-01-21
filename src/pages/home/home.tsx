import SeparatedInput from '#/shared/ui/separated-input/separated-input'
import { colors } from '#/styles/color'
import styled from '@emotion/styled'

const Home = () => {
  return (
    <Container>
      <div className='exam'>환영합니다 *^^*</div>
      <SeparatedInput length={6} label='인증번호' />
    </Container>
  )
}

const Container = styled.div`
  .exam {
    color: ${colors.violet[5]};
  }
`

export default Home
