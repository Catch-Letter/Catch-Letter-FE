import { Facebook, Kakao, LINE, X } from '#/assets/shareSNS'
import {
  ShareItemStyle,
  ShareModalStyle,
  ShareModalContainer,
} from '#/components/share-modal/ShareModal.styles'
import { Button, Modal, ModalProps } from '#/shared/ui'

type ShareModalProps = Omit<ModalProps, 'children'> & {
  url: string
  onClose?: () => void
  onItemClick?: () => void
}

const shareItems = {
  Kakao,
  LINE,
  Facebook,
  X,
}

const ShareModal = ({ isOpen, url, onClickOverlay }: ShareModalProps) => {
  const copyLink = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <Modal isOpen={isOpen} onClickOverlay={onClickOverlay}>
      <div css={ShareModalStyle}>
        <div css={ShareModalContainer}>
          <div className='title'>SNS 공유하기</div>
          <ul css={ShareItemStyle}>
            {Object.keys(shareItems).map((item) => (
              <li key={item}>
                <img src={shareItems[item as keyof typeof shareItems]} alt={item} />
              </li>
            ))}
          </ul>
          <div className='area-copy'>
            <span className='url'>{url}</span>
            <button className='btn-copy' onClick={copyLink}>
              복사
            </button>
          </div>
          <span className='desc'>버튼을 클릭하면 링크가 클립보드에 복사됩니다!</span>
        </div>
        <Button width={100}>닫기</Button>
      </div>
    </Modal>
  )
}

export default ShareModal
