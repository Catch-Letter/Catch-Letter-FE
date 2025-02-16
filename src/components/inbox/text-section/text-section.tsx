import { textSectionStyles } from '#/components/inbox/text-section/text-section styles'
import { Flex } from '#/shared/ui'
import { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<'section'> {
  title1: ReactNode
  value1: ReactNode
  title2: ReactNode
  value2: ReactNode
}

const TextSection = ({ title1, value1, title2, value2 }: Props) => {
  return (
    <Flex as='section' gap={16} direction='column' css={textSectionStyles} role='group'>
      <Flex direction='column' role='group'>
        <span className='title1'>{title1}</span>
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
