import { Facebook, Kakao, LINE, X } from '#/assets/shareSNS'
import { ShareModalProps } from '#/components/share-modal/ShareModal'
import { shareHandlers } from '#/shared/utils/shareHandlers'
import { useTranslation } from 'react-i18next'
import { ShareItemStyle } from './ShareItems.styles'

const shareItems = {
  Kakao,
  LINE,
  Facebook,
  X,
}

type shareItemProps = Pick<ShareModalProps, 'url'>

const ShareItems = ({ url }: shareItemProps) => {
  const { t } = useTranslation()
  const shareText = t('shareSNS')

  const handleItemClick = (item: string) => {
    const handlers = shareHandlers(url, shareText)
    handlers[item]()
  }
  return (
    <div>
      <ul css={ShareItemStyle}>
        {Object.keys(shareItems).map((item) => (
          <li
            key={item}
            onClick={() => {
              handleItemClick(item)
            }}
          >
            <img src={shareItems[item as keyof typeof shareItems]} alt={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShareItems
