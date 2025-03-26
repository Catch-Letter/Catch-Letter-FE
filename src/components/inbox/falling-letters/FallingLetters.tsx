// TODO : resize 이벤트 추가
import { useResizeContainer } from '#/hooks'
import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'
import { useRef } from 'react'
import useFallingLetters from './useFallingLetters'

const FallingLetters = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { size } = useResizeContainer(containerRef)
  useFallingLetters({ ref: containerRef, size })

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
