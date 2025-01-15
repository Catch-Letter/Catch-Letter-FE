import { colors } from '#/styles/color'
import styled from '@emotion/styled'

const Home = () => {
  return (
    <Container>
      <div className='exam'>환영합니다 *^^*</div>
    </Container>
  )
}

const Container = styled.div`
  .exam {
    color: ${colors.violet[5]};
  }
`

export default Home
