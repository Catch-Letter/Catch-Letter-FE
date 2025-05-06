import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { pageview } from '#/utils/gtag'

export const usePageView = () => {
  const location = useLocation()

  useEffect(() => {
    if (!import.meta.env.PROD) return
    pageview(location.pathname)
  }, [location])
}
