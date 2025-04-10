import { ReactNode } from 'react'
import { SlideStyles } from './Slide.styles'

interface Props {
  order: number
  title: string
  image: ReactNode | string
  description: string
}

const Slide = ({ order, title, image, description }: Props) => {
  return (
    <li css={SlideStyles}>
      <span className='order'>{order}</span>
      <h3 className='title'>{title}</h3>
      {typeof image === 'string' ? <img src={image} alt={`image for ${title}`} /> : image}
      <p className='description'>{description}</p>
    </li>
  )
}

export default Slide
