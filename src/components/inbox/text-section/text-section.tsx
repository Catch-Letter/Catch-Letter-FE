import { Flex } from '#/shared/ui'
import { ComponentProps, ReactNode } from 'react'
import { InformaitonButton } from '../tutorial'
import { textSectionStyles } from './text-section styles'

interface Props extends ComponentProps<'section'> {
  title1: ReactNode
  value1: ReactNode
  title2: ReactNode
  value2: ReactNode
  onClickInformationButton: () => void
}

const TextSection = ({ title1, value1, title2, value2, onClickInformationButton }: Props) => {
  return (
    <Flex as='section' gap={16} direction='column' css={textSectionStyles} role='group'>
      <Flex direction='column' gap={8} role='group'>
        <Flex justify='space-between' className='title1'>
          <span>{title1}</span>
          <InformaitonButton onClick={onClickInformationButton} />
        </Flex>
        <span className='value1'>{value1}</span>
      </Flex>
      <Flex direction='column' gap={8} role='group'>
        <span className='title2'>{title2}</span>
        <span className='value2'>{value2}</span>
      </Flex>
    </Flex>
  )
}

export default TextSection
