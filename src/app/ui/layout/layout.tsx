import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { containerStyles } from './layout.styles'

const Layout = () => {
  useEffect(() => {
    const setFullHeight = () => {
      const height = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${height}px`)
    }

    window.addEventListener('resize', setFullHeight)
    window.addEventListener('load', setFullHeight)

    setFullHeight()

    return () => {
      window.removeEventListener('resize', setFullHeight)
      window.removeEventListener('load', setFullHeight)
    }
  }, [])

  return (
    <main css={containerStyles}>
      <Outlet />
    </main>
  )
}

export default Layout
