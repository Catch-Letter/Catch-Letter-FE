import { ShareItems } from '#/components/share-modal/shareItem'
import { ShareModalStyle, ShareModalContainer } from '#/components/share-modal/ShareModal.styles'
import { Button, Modal, ModalProps } from '#/shared/ui'
import { useTranslation } from 'react-i18next'

export type ShareModalProps = Omit<ModalProps, 'children'> & {
  url: string
  onClose: () => void
}

const ShareModal = ({ isOpen, url, onClose }: ShareModalProps) => {
  const { t } = useTranslation()
  const copyLink = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <Modal isOpen={isOpen}>
      <div css={ShareModalStyle}>
        <div css={ShareModalContainer}>
          <div className='title'>{t('shareOnSNS')}</div>
          <ShareItems url={url} />
          <div className='area-copy'>
            <span className='url'>{url}</span>
            <button className='btn-copy' onClick={copyLink}>
              복사
            </button>
          </div>
          <span className='desc'>{t('copySNS')}</span>
        </div>
        <Button width={80} onClick={onClose}>
          닫기
        </Button>
      </div>
    </Modal>
  )
}

export default ShareModal
