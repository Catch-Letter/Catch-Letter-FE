import { ShareItems } from '#/components/share-modal/shareItem'
import { ShareModalStyle, ShareModalContainer } from '#/components/share-modal/ShareModal.styles'
import { Toast } from '#/components/toast'
import { Button, Modal, ModalProps } from '#/shared/ui'
import { useToastStore } from '#/store/toastStore'
import { useTranslation } from 'react-i18next'

export type ShareModalProps = Omit<ModalProps, 'children'> & {
  url: string
  onClose: () => void
}

const ShareModal = ({ isOpen, url, onClose }: ShareModalProps) => {
  const { t } = useTranslation()
  const { showToast, removeToast } = useToastStore()

  const handleCloseModal = () => {
    onClose()
    removeToast()
  }

  const copyLink = () => {
    showToast(t('create.copyLink') + ' ✨', 'success', 'modal')
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
              {t('copy')}
            </button>
          </div>
          <span className='desc'>{t('copySNS')}</span>
        </div>
        <Button width={84} onClick={handleCloseModal}>
          {t('close')}
        </Button>
      </div>
      <Toast position='bottom' location='modal' offset='68%' />
    </Modal>
  )
}

export default ShareModal
