import { TutorialImg1, TutorialImg2, TutorialImg3 } from '#/assets/tutorial'
import { EmblaOptionsType } from 'embla-carousel'
import { useTranslation } from 'react-i18next'
import { Carousel } from './carousel'
import { Slide } from './slide'

const Tutorial = () => {
  const { t } = useTranslation()
  const OPTIONS: EmblaOptionsType = {}
  const slideData = [
    {
      title: t('inbox.tutorial.step1.title'),
      image: TutorialImg1,
      description: t('inbox.tutorial.step1.description'),
    },
    {
      title: t('inbox.tutorial.step2.title'),
      image: TutorialImg2,
      description: t('inbox.tutorial.step2.description'),
    },
    {
      title: t('inbox.tutorial.step3.title'),
      image: TutorialImg3,
      description: t('inbox.tutorial.step3.description'),
    },
  ]

  const SLIDES = slideData.map(({ title, image, description }, idx) => (
    <Slide order={idx + 1} title={title} image={image} description={description} key={title} />
  ))

  return <Carousel slides={SLIDES} options={OPTIONS} />
}

export default Tutorial
