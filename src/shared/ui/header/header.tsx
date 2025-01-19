import { ComponentProps, FC, ReactNode } from 'react'
import { headerStyles } from './header.styles'

interface Props extends ComponentProps<'header'> {
  Left?: ReactNode
  Center?: ReactNode
  Right?: ReactNode
}

const Header: FC<Props> = ({ Left, Center, Right, ...props }) => {
  return (
    <header css={headerStyles} {...props}>
      <div className='left'>{Left}</div>
      <div className='center'>{Center}</div>
      <div className='right'>{Right}</div>
    </header>
  )
}

export default Header
