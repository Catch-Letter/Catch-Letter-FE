import { DotLoader } from '#/shared/ui'
import { colors } from '#/styles/color'
import { LoadingContainer, infoTextStyle } from './Loading.styles'

const Loading = () => {
  return (
    <div css={LoadingContainer}>
      <DotLoader size={12} color={colors.white} />
      <div css={infoTextStyle}>
        <h1>정보를 불러오고 있어요!</h1>
        <span>잠시만 기다려 주세요</span>
      </div>
    </div>
  )
}

export default Loading
