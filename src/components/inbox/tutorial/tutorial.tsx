import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from './carousel'

interface Props {}

const Tutorial = ({}: Props) => {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return <Carousel slides={SLIDES} options={OPTIONS} />
}

export default Tutorial
