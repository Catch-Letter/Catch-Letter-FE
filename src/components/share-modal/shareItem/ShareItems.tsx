import { ShareModalProps } from '#/components/share-modal/ShareModal'
import { shareHandlers } from '#/shared/utils/shareHandlers'
import { useTranslation } from 'react-i18next'
import { ShareItemStyle } from './ShareItems.styles'
import { trackBtnClick } from '#/shared/utils/gtag'
import { shareItems } from '#/shared/config/shareSNS'

type shareItemProps = Pick<ShareModalProps, 'url'> & {
  shareIcon: typeof shareItems
}

const ShareItems = ({ url, shareIcon }: shareItemProps) => {
  const { t } = useTranslation()
  const shareText = t('shareSNS')

  const handleItemClick = (item: string) => {
    trackBtnClick(`${item}Share`)
    const handlers = shareHandlers(url, shareText)
    handlers[item]()
  }

  return (
    <div>
      <ul css={ShareItemStyle}>
        {Object.keys(shareIcon).map((item) => (
          <li key={item} onClick={() => handleItemClick(item)}>
            <img src={shareIcon[item as keyof typeof shareIcon]} alt={item} decoding='sync' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShareItems
