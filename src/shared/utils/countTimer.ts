import { useEffect, useState } from 'react'

const countTimer = (time: string) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const updateTimer = () => {
      const serverDate = new Date(time)
      const expiration = serverDate.getTime()
      const now = new Date().getTime()

      const diff = expiration - now

      setTimer(diff > 0 ? diff : 0)

      if (diff > 0) {
        const timeout = setTimeout(updateTimer, 1000)
        return () => clearTimeout(timeout)
      }
    }

    updateTimer()

    return () => {}
  }, [time])

  const hours = Math.floor(timer / (1000 * 60 * 60))
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timer % (1000 * 60)) / 1000)

  return timer > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : '00:00:00'
}

export default countTimer
