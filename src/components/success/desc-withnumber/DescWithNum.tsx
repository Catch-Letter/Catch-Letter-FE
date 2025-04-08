import { DescWithNumWrapper } from '#/components/success/desc-withnumber/DescWithNum.styles'

interface DescWithNumProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number
  width?: string
  children: React.ReactNode
}

const DescWithNum = ({ number, width, children, ...props }: DescWithNumProps) => {
  return (
    <div css={DescWithNumWrapper(width as string)} {...props}>
      <div className='number'>{number}</div>
      <div className='desc'>{children}</div>
    </div>
  )
}

export default DescWithNum
