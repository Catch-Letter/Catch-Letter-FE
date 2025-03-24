import { dotWrapper, LoadingContainer, infoTextStyle, getDotStyle } from './Loading.styles'

const Loading = () => {
  return (
    <div css={LoadingContainer}>
      <div css={dotWrapper}>
        {[0, 0.2, 0.4].map((delay, idx) => (
          <div key={idx} css={getDotStyle(delay)} />
        ))}
      </div>
      <div css={infoTextStyle}>
        <h1>정보를 불러오고 있어요!</h1>
        <span>잠시만 기다려 주세요</span>
      </div>
    </div>
  )
}

export default Loading
