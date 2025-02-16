import { containerStyles } from './layout.styles'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main css={containerStyles}>
      <Outlet />
    </main>
  )
}

export default Layout
