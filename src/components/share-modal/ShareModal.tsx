import { ShareItems } from '#/components/share-modal/shareItem'
import { ShareModalContainer, ShareModalStyle } from '#/components/share-modal/ShareModal.styles'
import { Toast } from '#/components/toast'
import { shareItems } from '#/shared/config/shareSNS'
import { Button, Modal, ModalProps } from '#/shared/ui'
import { trackBtnClick } from '#/shared/utils/gtag'
import { useToastStore } from '#/store/toastStore'
import { useTranslation } from 'react-i18next'

export type ShareModalProps = Omit<ModalProps, 'children'> & {
  url: string
  onClose: () => void
}

const ShareModal = ({ isOpen, url, onClose, onClickOverlay }: ShareModalProps) => {
  const { t } = useTranslation()
  const { showToast, removeToast } = useToastStore()

  const handleCloseModal = () => {
    onClose()
    removeToast()
  }

  const copyLink = () => {
    trackBtnClick('copyLinkFromModal')
    showToast(t('create.copyLink') + ' ✨', 'success', 'modal')
    navigator.clipboard.writeText(url)
  }

  return (
    <Modal isOpen={isOpen} onClickOverlay={onClickOverlay}>
      <div css={ShareModalStyle}>
        <div css={ShareModalContainer}>
          <div className='title'>{t('shareOnSNS')}</div>
          <ShareItems url={url} shareIcon={shareItems} />
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
