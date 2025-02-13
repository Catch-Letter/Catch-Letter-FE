import { SuccessStyle, SuccessWrapper } from './Success.styles'
import { Button } from '#/shared/ui'
import { TimeArea, DescLink } from '#/components/success'
import { BackHeader } from '#/components'
import { useLocation } from 'react-router'
import countTimer from '#/shared/utils/countTimer'

const Success = () => {
  const location = useLocation()
  const user = location.state
  const title = '링크가 생성되었어요!'
  const link = `http://localhost:3000/${user.uuid}`
  const btnName = '링크복사'
  const desc = `링크는 재전송 되지 않아요 \n 링크 복사 후 기억할 수 있는 곳에 복사해두세요!`
  const leftTime = countTimer(user.expired)
  console.log(countTimer(user.expired))

  return (
    <div css={SuccessStyle}>
      <BackHeader />
      <div css={SuccessWrapper}>
        <DescLink title={title} link={link} btnName={btnName} desc={desc} />
        <TimeArea title='우체통 열람가능 시간' time={leftTime} />
        <Button width={343}>내 우체통 공유하기!</Button>
      </div>
    </div>
  )
}

export default Success
