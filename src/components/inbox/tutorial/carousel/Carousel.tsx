import { CarouselStyle } from '#/components/inbox/tutorial/carousel/Carousel.styles'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { FC, ReactNode } from 'react'
import { DotButton, useDotButton } from './CarouselDotButton'

interface Props {
  slides: ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: FC<Props> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <section css={CarouselStyle}>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>{slides.map((slide) => slide)}</div>
      </div>

      <div className='embla__controls'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
