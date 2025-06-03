import { RefreshButonStyle } from './RefreshButton.styles'
import { Button } from '#/shared/ui'
import { RefreshIcon } from '#/components/refresh-icon'

interface RefreshButtonProps {
  refetch: () => void
  isRefetching: boolean
}

const RefreshButton = ({ refetch, isRefetching }: RefreshButtonProps) => {
  return (
    <Button css={RefreshButonStyle} onClick={refetch}>
      새로고침 <RefreshIcon isRefetching={isRefetching} />
    </Button>
  )
}

export default RefreshButton
