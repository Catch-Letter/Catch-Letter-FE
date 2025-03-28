import { WriteDescStyle } from './WriteDesc.styles'

interface WriteDescProps {
  title: string
  descs: string[]
  className?: string
}
const WriteDesc = ({ title, descs, className }: WriteDescProps) => {
  return (
    <div css={WriteDescStyle} className={className}>
      <div className='title'>{title}</div>
      <ul>
        {descs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default WriteDesc
