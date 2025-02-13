import { ReactNode } from 'react'
import { DescLinkStyle } from './DescLink.styles'

interface DescLinkProps {
  title: String
  link: string
  btnName?: string
  desc: ReactNode
}

const DescLink = ({ title, link, btnName, desc }: DescLinkProps) => {
  const copyLink = () => {
    navigator.clipboard.writeText(link)
  }

  return (
    <div css={DescLinkStyle}>
      <div className='title'>{title}</div>
      <div className='link'>{link}</div>
      <button onClick={copyLink} className='btn-copy'>
        {btnName}
      </button>
      <div className='desc'>{desc}</div>
    </div>
  )
}

export default DescLink
