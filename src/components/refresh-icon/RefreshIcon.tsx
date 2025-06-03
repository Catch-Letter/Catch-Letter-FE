import { LuRefreshCw } from 'react-icons/lu'
import { useState, useEffect } from 'react'
import { SpinStyle } from './RefreshIcon.style'

interface RefreshIconProps {
  isRefetching: boolean
  size?: number
}

const RefreshIcon = ({ isRefetching, size }: RefreshIconProps) => {
  const [showSpin, setShowSpin] = useState(false)

  useEffect(() => {
    if (isRefetching) {
      setShowSpin(true)
    } else {
      const timer = setTimeout(() => {
        setShowSpin(false)
      }, 1600)
      return () => clearTimeout(timer)
    }
  }, [isRefetching])

  return <LuRefreshCw size={size} css={showSpin && SpinStyle} />
}

export default RefreshIcon
