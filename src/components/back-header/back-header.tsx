import { Header, LanguageSwitcher } from '#/shared/ui'
import { ComponentProps, FC, ReactNode, useCallback } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { iconStyles } from './back-header.styles'

interface Props extends ComponentProps<'header'> {
  Center?: ReactNode
  Right?: ReactNode
}

const BackHeader: FC<Props> = ({ Center, Right = <LanguageSwitcher />, ...props }) => {
  const navigate = useNavigate()
  const goBack = useCallback(navigate.bind(null, -1), [])

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
