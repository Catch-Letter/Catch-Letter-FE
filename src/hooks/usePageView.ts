import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const usePageView = () => {
  const location = useLocation()

  useEffect(() => {
    if (!import.meta.env.PROD) return
    // @ts-ignore
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: location.pathname,
    })
  }, [location])
}
