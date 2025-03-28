import { dayjs } from '#/shared/api'
import { useEffect, useState } from 'react'

const useCountdownTimer = (deadline: string) => {
  const [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = dayjs()
      const deadlineTime = dayjs(deadline)

      if (now.isAfter(deadlineTime)) {
        setRemainingTime(0)
        return
      }

      const diff = deadlineTime.diff(now)

      setRemainingTime(diff)
    }

    calculateRemainingTime()

    const interval = setInterval(calculateRemainingTime, 1000)

    return () => clearInterval(interval)
  }, [deadline])

  return {
    leftTime: dayjs.duration(remainingTime).format('HH:mm:ss'),
  }
}

export default useCountdownTimer
