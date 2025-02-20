import { BackHeader } from '#/components'
import { Background } from '#/shared/ui/background'

const Drawing = () => {
  return (
    <div>
      <Background color='grey' />
      <BackHeader Center={<span>우체통 발급</span>} />
    </div>
  )
}

export default Drawing
