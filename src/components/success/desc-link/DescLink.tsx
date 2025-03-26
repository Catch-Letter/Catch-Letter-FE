import { ReactNode } from 'react'
import { DescLinkStyle } from './DescLink.styles'
import { useToastStore } from '#/store/toastStore'

interface DescLinkProps {
  title: string
  link: string
  btnName?: string
  desc: ReactNode
}

const DescLink = ({ title, link, btnName, desc }: DescLinkProps) => {
  const { showToast } = useToastStore()

  const copyLink = () => {
    navigator.clipboard.writeText(link)
    showToast('링크가 복사되었습니다 ✨', 'success')
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
