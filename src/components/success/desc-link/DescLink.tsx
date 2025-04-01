import { ReactNode } from 'react'
import { DescLinkStyle } from './DescLink.styles'
import { useToastStore } from '#/store/toastStore'
import { useTranslation } from 'react-i18next'
import { Toast } from '#/components/toast'

interface DescLinkProps {
  title: string
  link: string
  btnName?: string
  desc: ReactNode
}

const DescLink = ({ title, link, btnName, desc }: DescLinkProps) => {
  const { t } = useTranslation()
  const { showToast } = useToastStore()

  const copyLink = () => {
    navigator.clipboard.writeText(link)
    showToast(t('create.copyLink') + ' ✨', 'success', 'page')
  }

  return (
    <div css={DescLinkStyle}>
      <div className='title'>{title}</div>
      <div className='link'>{link}</div>
      <button onClick={copyLink} className='btn-copy'>
        {btnName}
      </button>
      <div className='desc'>{desc}</div>
      <Toast location='page' />
    </div>
  )
}

export default DescLink
