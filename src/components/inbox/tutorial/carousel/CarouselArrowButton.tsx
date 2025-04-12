import { EmblaCarouselType } from 'embla-carousel'
import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type Props = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <button className='embla__button embla__button--prev' type='button' {...restProps}>
      <IoIosArrowBack aria-hidden />
      {children}
    </button>
  )
}
// ;<IoIosArrowBack onClick={goBack} aria-label='Go back to Previous Page' css={iconStyles} />

export const NextButton: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <button className='embla__button embla__button--next' type='button' {...restProps}>
      <IoIosArrowForward aria-hidden />
      {children}
    </button>
  )
}
