import { ShareItems } from '#/components/share-modal/shareItem'
import { ShareModalStyle, ShareModalContainer } from '#/components/share-modal/ShareModal.styles'
import { Button, Modal, ModalProps } from '#/shared/ui'

export type ShareModalProps = Omit<ModalProps, 'children'> & {
  url: string
  onClose: () => void
}

const ShareModal = ({ isOpen, url, onClose }: ShareModalProps) => {
  const copyLink = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <Modal isOpen={isOpen}>
      <div css={ShareModalStyle}>
        <div css={ShareModalContainer}>
          <div className='title'>SNS 공유하기</div>
          <ShareItems url={url} />
          <div className='area-copy'>
            <span className='url'>{url}</span>
            <button className='btn-copy' onClick={copyLink}>
              복사
            </button>
          </div>
          <span className='desc'>버튼을 클릭하면 링크가 클립보드에 복사됩니다!</span>
        </div>
        <Button width={100} onClick={onClose}>
          닫기
        </Button>
      </div>
    </Modal>
  )
}

export default ShareModal
