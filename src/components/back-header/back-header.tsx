import { Header } from '#/shared/ui'
import { ComponentProps, FC, ReactNode, useCallback } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { iconStyles } from './back-header.styles'

interface Props extends ComponentProps<'header'> {
  Center?: ReactNode
  Right?: ReactNode
  goBackPath?: string
}

const BackHeader: FC<Props> = ({ Center, Right, goBackPath, ...props }) => {
  const navigate = useNavigate()
  const goBack = useCallback(() => {
    goBackPath ? navigate(goBackPath) : navigate(-1)
  }, [navigate, goBackPath])

  return (
    <Header
      Left={
        <IoIosArrowBack onClick={goBack} aria-label='Go back to Previous Page' css={iconStyles} />
      }
      Center={Center}
      Right={Right}
      {...props}
    />
  )
}

export default BackHeader
