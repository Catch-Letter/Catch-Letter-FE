import { Header } from '#/shared/ui'
import { ComponentProps, FC, ReactNode } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { iconStyles } from './back-header.styles'

interface Props extends ComponentProps<'header'> {
  Center?: ReactNode
  Right?: ReactNode
}

const BackHeader: FC<Props> = ({ Center, Right, ...props }) => {
  const navigate = useNavigate()
  const goBack = navigate.bind(null, -1)

  return (
    <Header
      Left={<IoIosArrowBack onClick={goBack} aria-label='Go Back' css={iconStyles} />}
      Center={Center}
      Right={Right}
      {...props}
    />
  )
}

export default BackHeader
