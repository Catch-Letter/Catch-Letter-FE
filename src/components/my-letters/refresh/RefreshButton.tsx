import { LuRefreshCw } from 'react-icons/lu'
import { RefreshButonStyle } from './RefreshButton.styles'
import { Button } from '#/shared/ui'

const RefreshButton = ({ refetch }: { refetch: () => void }) => {
  return (
    <Button css={RefreshButonStyle} onClick={refetch}>
      새로고침 <LuRefreshCw />
    </Button>
  )
}

export default RefreshButton
