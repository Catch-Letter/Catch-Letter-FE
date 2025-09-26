import { Facebook, Kakao, LINE, X, Insta } from '#/assets/shareSNS'
import { ShareModalProps } from '#/components/share-modal/ShareModal'
import { shareHandlers } from '#/shared/utils/shareHandlers'
import { useTranslation } from 'react-i18next'
import { ShareItemStyle } from './ShareItems.styles'
import { trackBtnClick } from '#/shared/utils/gtag'
import { useEffect, useState } from 'react'
import { SkeltonSquare } from '#/shared/ui'

const shareItems = {
  Kakao,
  Facebook,
  LINE,
  Insta,
  X,
}

type shareItemProps = Pick<ShareModalProps, 'url'>

const ShareItems = ({ url }: shareItemProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useTranslation()
  const shareText = t('shareSNS')

  const handleItemClick = (item: string) => {
    trackBtnClick(`${item}Share`)
    const handlers = shareHandlers(url, shareText)
    handlers[item]()
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <div>
      <ul css={ShareItemStyle}>
        {Object.keys(shareItems).map((item) => (
          <li key={item} onClick={() => handleItemClick(item)}>
            {isLoading ? (
              <SkeltonSquare />
            ) : (
              <img src={shareItems[item as keyof typeof shareItems]} alt={item} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShareItems
