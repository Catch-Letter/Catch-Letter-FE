import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { FC, ReactNode } from 'react'
import { CarouselStyle } from './Carousel.styles'
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButton'
import { DotButton, useDotButton } from './CarouselDotButton'

interface Props {
  slides: ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: FC<Props> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section css={CarouselStyle}>
      <div className='embla__viewport' ref={emblaRef}>
        <ol className='embla__container'>{slides.map((slide) => slide)}</ol>
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

        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
