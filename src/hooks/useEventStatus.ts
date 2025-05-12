import { fetchEventList } from '#/api/event'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const useEventStatus = () => {
  const [event, setEvent] = useState('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [error, setError] = useState('')

  const onStartDate = (start_at: string) => {
    setStartDate(dayjs(start_at).format('YYYY-MM-DD'))
  }

  const onEndDate = (end_at: string) => {
    setEndDate(dayjs(end_at).format('YYYY-MM-DD'))
  }

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const res = await fetchEventList()

        if (res.data.length > 0) {
          setEvent(res.data[0].id)
          onStartDate(res.data[0].start_at)
          onEndDate(res.data[0].end_at)
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data.message || '에러가 발생했습니다.'
          setError(message)
        }
      }
    }
    loadEvent()
  }, [])

  return {
    event,
    startDate,
    endDate,
    error,
  }
}

export default useEventStatus
