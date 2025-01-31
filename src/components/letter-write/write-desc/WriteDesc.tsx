import { WriteDescStyle } from './WriteDesc.styles'

interface WriteDescProps {
  title: string
  descs: string[]
}
const WriteDesc = ({ title, descs }: WriteDescProps) => {
  return (
    <div css={WriteDescStyle}>
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
