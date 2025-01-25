import { ReactNode } from 'react'
import { SendDescStyle } from './SendDesc.styles'

export interface SendDescProps {
  title?: ReactNode
  subTitle?: ReactNode
}

const SendDesc = ({ title, subTitle }: SendDescProps) => {
  return (
    <div css={SendDescStyle}>
      <div className='title'>{title}</div>
      <div className='sub-title'>{subTitle}</div>
    </div>
  )
}

export default SendDesc
