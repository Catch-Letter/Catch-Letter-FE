import useFallingLetters, { FallingLettersHookArgs } from './useFallingLetters'
import { css } from '@emotion/react'
import { useRef } from 'react'

type Props = Pick<FallingLettersHookArgs, 'letters'>

const FallingLetters = ({ letters }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useFallingLetters({ ref: containerRef, letters })

  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      `}
      ref={containerRef}
    />
  )
}

export default FallingLetters
