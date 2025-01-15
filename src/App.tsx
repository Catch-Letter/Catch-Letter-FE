import { colors } from '#/styles/color'
import styled from '@emotion/styled'

const App = () => {
  return (
    <Container>
      <div className='exam'>환영합니다 *^^*</div>
    </Container>
  )
}

export default App

const Container = styled.div`
  .exam {
    color: ${colors.violet[5]};
  }
`
