import { Flex } from '#/shared/ui'
import { ComponentProps, ReactNode } from 'react'
import { InformaitonButton } from '../tutorial'
import { textSectionStyles } from './text-section styles'
import { IoShareSocial } from 'react-icons/io5'

interface Props extends ComponentProps<'section'> {
  title1: ReactNode
  value1: ReactNode
  title2: ReactNode
  value2: ReactNode
  onClickShareButton?: () => void
  onClickInformationButton: () => void
}

const TextSection = ({
  title1,
  value1,
  title2,
  value2,
  onClickShareButton,
  onClickInformationButton,
}: Props) => {
  return (
    <Flex as='section' gap={16} direction='column' css={textSectionStyles} role='group'>
      <Flex direction='column' gap={8} role='group'>
        <Flex justify='space-between' className='title1'>
          <span>{title1}</span>
          <div className='btn-group'>
            <IoShareSocial onClick={onClickShareButton} />
            <InformaitonButton onClick={onClickInformationButton} />
          </div>
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
