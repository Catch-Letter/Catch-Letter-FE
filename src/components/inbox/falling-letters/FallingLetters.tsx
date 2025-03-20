// TODO : resize 이벤트 추가
import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'
import { useRef } from 'react'
import useFallingLetters from './useFallingLetters'

const FallingLetters = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useFallingLetters({ ref: containerRef })

  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: ${ZIndex.fallingLetter};
        pointer-events: none;
      `}
      ref={containerRef}
    />
  )
}

export default FallingLetters
