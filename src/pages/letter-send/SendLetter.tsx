import { Header } from '#/shared/ui'
import { SendLetterStyle } from './SendLetter.styles'
import { Button } from '#/shared/ui/button'
import { SendCard, SendDesc } from '#/components/letter-send'

const desc = {
  TITLE: '친구에게 편지가 보내졌어요!',
  SUBTITLE: '암호를 풀어야 내 편지를 확인할 수 있어요!',
}

const SendLetter = () => {
  return (
    <div css={SendLetterStyle}>
      <Header />
      <SendDesc title={desc.TITLE} subTitle={desc.SUBTITLE} />
      <SendCard content='/santa.svg' />
      <div className='button-area'>
        <Button width={339}>나도 우체통 발급</Button>
        <Button width={339} variant='secondary'>
          확인
        </Button>
      </div>
    </div>
  )
}

export default SendLetter
