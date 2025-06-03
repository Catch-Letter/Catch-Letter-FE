import { LuRefreshCw } from 'react-icons/lu'
import { RefreshButonStyle } from './RefreshButton.styles'
import { Button } from '#/shared/ui'

const RefreshButton = () => {
  return (
    <Button css={RefreshButonStyle} onClick={() => {}}>
      새로고침 <LuRefreshCw />
    </Button>
  )
}

export default RefreshButton
