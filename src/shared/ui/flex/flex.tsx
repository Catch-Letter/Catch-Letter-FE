import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface Props {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  gap?: string | number
}

const Flex = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'direction',
})<Props>(({ align, justify, direction, gap }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
  gap: typeof gap === 'number' ? gap + 'px' : gap,
}))
export default Flex
