import dayjs from 'dayjs'
import { useState } from 'react'

const useEventStatus = () => {
  const [event, setEvent] = useState('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const onStartDate = (start_at: string) => {
    setStartDate(dayjs(start_at).format('YYYY-MM-DD'))
  }

  const onEndDate = (end_at: string) => {
    setEndDate(dayjs(end_at).format('YYYY-MM-DD'))
  }

  return {
    event,
    setEvent,
    startDate,
    onStartDate,
    endDate,
    onEndDate,
  }
}

export default useEventStatus
