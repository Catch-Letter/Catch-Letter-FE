import { eventImg } from '#/assets/event'
import { EventButtonWrapper } from '#/shared/ui/event/EventButton.styles'
import { ComponentProps } from 'react'

const EventButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <button css={EventButtonWrapper} {...props}>
      <img src={eventImg} alt='eventicon' width={48} height={48} />
      <span>EVENT</span>
    </button>
  )
}

export default EventButton
